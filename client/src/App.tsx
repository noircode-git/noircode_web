import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-context";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import WebPages from "@/pages/web-pages";
import WebApps from "@/pages/web-apps";
import Automation from "@/pages/automation";
import Forms from "@/pages/forms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/webove-stranky" component={WebPages} />
      <Route path="/webove-aplikace" component={WebApps} />
      <Route path="/automatizace" component={Automation} />
      <Route path="/formulare" component={Forms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
