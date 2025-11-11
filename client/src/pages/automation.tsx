import { motion } from "framer-motion";
import { ArrowLeft, Zap, CheckCircle, Bot, Workflow, Clock, TrendingUp, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme-context";

export default function Automation() {
  const [, setLocation] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Bot,
      title: "Inteligentní automatizace",
      description: "AI-powered řešení pro automatizaci složitých obchodních procesů"
    },
    {
      icon: Workflow,
      title: "Workflow optimalizace",
      description: "Automatizace opakujících se úkonů a firemních procesů"
    },
    {
      icon: Clock,
      title: "Úspora času",
      description: "Eliminace manuální práce a zrychlení business procesů"
    },
    {
      icon: TrendingUp,
      title: "Zvýšení efektivity",
      description: "Vyšší produktivita a lepší využití zdrojů"
    },
    {
      icon: Shield,
      title: "Spolehlivost",
      description: "Automatizované procesy bez lidských chyb"
    },
    {
      icon: Settings,
      title: "Snadná správa",
      description: "Uživatelsky přívětivé rozhraní pro monitoring a úpravy"
    }
  ];

  const automationTypes = [
    {
      title: "Business Process Automation",
      description: "Automatizace administrativních a obchodních procesů",
      examples: ["Fakturace", "Smlouvy", "Reporting", "Schvalovací procesy"]
    },
    {
      title: "Data Processing",
      description: "Automatické zpracování a analýza dat",
      examples: ["Import/export dat", "Validace", "Transformace", "Synchronizace"]
    },
    {
      title: "Communication Automation",
      description: "Automatizace komunikace s klienty a partnery",
      examples: ["Email kampaně", "Notifikace", "Reminder systémy", "Chatboty"]
    },
    {
      title: "Integration Solutions",
      description: "Propojení různých systémů a aplikací",
      examples: ["API integrace", "Webhooky", "Middleware", "ETL procesy"]
    }
  ];

  const benefits = [
    {
      metric: "70%",
      description: "Průměrná úspora času na administrativu"
    },
    {
      metric: "95%",
      description: "Snížení chybovosti v procesech"
    },
    {
      metric: ">50%",
      description: "Zvýšení produktivity týmů"
    },
    {
      metric: "24/7",
      description: "Nepřetržitý provoz automatizovaných procesů"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 md:py-32 dark:bg-gradient-to-br dark:from-[hsl(265,85%,25%)] dark:via-background dark:to-[hsl(250,75%,20%)] light:bg-gradient-to-br light:from-blue-50 light:via-white light:to-purple-50 overflow-hidden">
        <div className="absolute inset-0 dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] dark:bg-[size:100px_100px] light:bg-[var(--light-bg-pattern)] light:opacity-40" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                className="text-muted-foreground hover:text-[hsl(265,85%,65%)] transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zpět na hlavní stránku
              </Button>

              <div className="inline-block p-4 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-2xl">
                <Zap className="h-12 w-12 text-[hsl(265,85%,65%)]" />
              </div>

              <ThemeToggle />
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Automatizace
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Uvolněte potenciál vaší firmy pomocí inteligentní automatizace.
              Od jednoduchých workflow až po komplexní AI-powered řešení.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Proč automatizovat?
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full" />}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(265,85%,75%)] to-[hsl(250,75%,75%)] bg-clip-text text-transparent mb-2">
                  {benefit.metric}
                </div>
                <p className="text-muted-foreground text-sm leading-tight">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 relative bg-gradient-to-b from-background via-[hsl(265,85%,8%)] to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Klíčové výhody
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full" />}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-card-border hover-elevate transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(265,85%,65%)]/30">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                      <feature.icon className="h-6 w-6 text-[hsl(265,85%,65%)]" />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-3 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Typy automatizace
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nabízíme komplexní automatizační řešení pro různé oblasti vašeho byznysu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-card-border hover-elevate transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(265,85%,65%)]/30 hover:shadow-xl hover:shadow-[hsl(265,85%,65%)]/20">
                  <CardContent className="p-8">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-semibold mb-4 text-card-foreground">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <div>
                      <p className="text-sm text-[hsl(265,85%,65%)] font-medium mb-3">Příklady použití:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {type.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-[hsl(265,85%,65%)] flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative bg-gradient-to-b from-background via-[hsl(265,85%,8%)] to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Připraveni automatizovat?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktujte nás a provedeme audit vašich procesů.
              Společně najdeme oblasti, kde automatizace přinese největší přínos.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)] shadow-lg shadow-[hsl(265,85%,65%)]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(265,85%,65%)]/30 hover:scale-105 px-8 py-6 text-base"
              onClick={() => {
                setLocation("/");
                setTimeout(() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Zvýšit produktivitu
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}