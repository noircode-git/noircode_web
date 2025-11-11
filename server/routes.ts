import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import fetch from "node-fetch";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      res.status(201).json({
        success: true,
        message: "Zpráva byla úspěšně odeslána. Ozveme se vám do 24 hodin.",
        data: message,
      });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({
          success: false,
          message: "Neplatná data formuláře",
          errors: error,
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({
          success: false,
          message: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.",
        });
      }
    }
  });

  // Optional: Get all contact messages (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        message: "Nepodařilo se načíst zprávy",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
