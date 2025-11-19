import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-context";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import WebPages from "@/pages/web-pages";
import WebApps from "@/pages/web-apps";
import Automation from "@/pages/automation";
import Forms from "@/pages/forms";
import Kontakt from "@/pages/kontakt";
import Footer from "@/components/Footer";

// SEO-optimized pages
import WebDevelopmentPrague from "@/pages/web-development-prague";
import EcommerceDevelopment from "@/pages/ecommerce-development";
import AutomationSolutions from "@/pages/automation-solutions";
import ContactFormsCrm from "@/pages/contact-forms-crm";
import ONas from "@/pages/o-nas";
import Reference from "@/pages/reference";
import FAQ from "@/pages/faq";
import Cenik from "@/pages/cenik";
import GDPR from "@/pages/gdpr";
import PodminkyUziti from "@/pages/podminky-uziti";

function Router() {
  // Handle GitHub Pages SPA redirect
  useEffect(() => {
    const url = window.location.href;
    const hasQueryParam = url.includes('?/');

    if (hasQueryParam) {
      const path = url.split('?/')[1].split('&')[0];
      const search = url.split('&').slice(1).join('&');
      const cleanPath = path.replace(/~and~/g, '&');

      // Replace the URL without the query parameter
      window.history.replaceState(null, '', `/${cleanPath}${search ? `?${search.replace(/~and~/g, '&')}` : ''}`);
    }
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/webove-stranky" component={WebPages} />
      <Route path="/webove-aplikace" component={WebApps} />
      <Route path="/automatizace" component={Automation} />
      <Route path="/formulare" component={Forms} />
      <Route path="/kontakt" component={Kontakt} />

      {/* SEO-optimized landing pages */}
      <Route path="/web-development-prague" component={WebDevelopmentPrague} />
      <Route path="/ecommerce-development" component={EcommerceDevelopment} />
      <Route path="/automation-solutions" component={AutomationSolutions} />
      <Route path="/contact-forms-crm" component={ContactFormsCrm} />

      {/* Information pages */}
      <Route path="/o-nas" component={ONas} />
      <Route path="/reference" component={Reference} />
      <Route path="/faq" component={FAQ} />
      <Route path="/cenik" component={Cenik} />

      {/* Legal pages */}
      <Route path="/gdpr" component={GDPR} />
      <Route path="/podminky-uziti" component={PodminkyUziti} />

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
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
