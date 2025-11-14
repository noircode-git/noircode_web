import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "img-src 'self' https: data:;");
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);

  // --- START changed code: robust multi-step listen with fallbacks ---
  const hostsToTry: Array<string | undefined> = [
    process.env.HOST || "0.0.0.0",
    "127.0.0.1",
    undefined, // try without explicit host (OS chooses)
  ];

  const tryListen = (index = 0) => {
    const host = hostsToTry[index];
    const onError = (err: any) => {
      server.off("error", onError);

      // If this host isn't supported, try the next fallback
      if (err?.code === "ENOTSUP" || err?.code === "EACCES" || err?.code === "EADDRINUSE") {
        const nextIndex = index + 1;
        if (nextIndex < hostsToTry.length) {
          const nextHost = hostsToTry[nextIndex];
          log(
            `Host ${host ?? "OS-selected"} failed (${err.code}); falling back to ${nextHost ?? "no explicit host"
            }`
          );
          // schedule next attempt
          setImmediate(() => tryListen(nextIndex));
          return;
        }
      }

      // All fallbacks exhausted or non-recoverable error
      log(`Failed to bind server: ${err?.code ?? err?.message ?? err}`);
      process.exit(1);
    };

    server.on("error", onError);

    if (host === undefined) {
      // listen with only port (OS chooses the interface)
      server.listen(port, () => {
        server.off("error", onError);
        log(`serving on :${port} (host chosen by OS)`);
      });
    } else {
      server.listen({ port, host, reusePort: true }, () => {
        server.off("error", onError);
        log(`serving on ${host}:${port}`);
      });
    }
  };

  tryListen();
  // --- END changed code ---
})();
