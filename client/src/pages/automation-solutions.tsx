import { motion } from "framer-motion";
import { Zap, Settings, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function AutomationSolutions() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-[hsl(265,85%,25%)] dark:via-background dark:to-[hsl(250,75%,20%)] dark:opacity-30 light:bg-gradient-to-br light:from-blue-50 light:via-white light:to-purple-50 light:opacity-80" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Automatizace procesů
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Automatizujte opakující se úkony a firemní procesy. Ušetřete čas, snižte náklady 
              a zvýšte produktivitu pomocí chytrých řešení.
            </p>
            <Button
              size="lg"
              onClick={() => setLocation('/kontakt')}
              className="bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)]"
            >
              Konzultace zdarma
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-12">
            Služby automatizace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="h-full bg-card border-card-border">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                  <Zap className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                </div>
                <CardTitle>Workflow automatizace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automatizace opakujících se procesů a schvalovacích toků</p>
              </CardContent>
            </Card>
            <Card className="h-full bg-card border-card-border">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                  <Settings className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                </div>
                <CardTitle>API integrace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Propojení různých systémů a aplikací pro plynulou spolupráci</p>
              </CardContent>
            </Card>
            <Card className="h-full bg-card border-card-border">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                  <Clock className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                </div>
                <CardTitle>Time-saving řešení</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Úspora hodin práce denně pomocí automatických procesů</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}