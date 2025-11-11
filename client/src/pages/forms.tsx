import { motion } from "framer-motion";
import { ArrowLeft, FileText, CheckCircle, Shield, Zap, Users, BarChart3, Smartphone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme-context";

export default function Forms() {
  const [, setLocation] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Profesionální formuláře",
      description: "Přizpůsobitelné registrační formuláře pro různé účely"
    },
    {
      icon: Shield,
      title: "Validace dat",
      description: "Automatická kontrola a validace zadaných údajů"
    },
    {
      icon: Mail,
      title: "Automatické notifikace",
      description: "Potvrzovací email a upozornění pro správce i uživatele"
    },
    {
      icon: BarChart3,
      title: "Statistiky a reporting",
      description: "Sledování konverzí a analytika použití formulářů"
    },
    {
      icon: Users,
      title: "Správa uživatelů",
      description: "Centralizovaná správa registrovaných uživatelů"
    },
    {
      icon: Smartphone,
      title: "Mobilní optimalizace",
      description: "Perfektní fungování na všech typech zařízení"
    }
  ];

  const formTypes = [
    {
      title: "Registrační formuláře",
      description: "Pro registrace na eventy, kurzy nebo služby",
      features: ["Vícekrokové formuláře", "Kapacitní limity", "Čekací listiny", "Platební integrace"]
    },
    {
      title: "Kontaktní formuláře",
      description: "Profesionální formy pro sběr kontaktů a poptávek",
      features: ["Přizpůsobitelné pole", "File upload", "Newsletter signup", "CRM integrace"]
    },
    {
      title: "Přihlašovací systémy",
      description: "Komplexní řešení pro správu uživatelských účtů",
      features: ["Autentifikace", "Role a oprávnění", "Password recovery", "Social login"]
    },
    {
      title: "Dotazníky a průzkumy",
      description: "Interaktivní formuláře pro sběr zpětné vazby",
      features: ["Různé typy otázek", "Logika podmínek", "Výsledky v real-time", "Export dat"]
    }
  ];

  const integrations = [
    { name: "Google Sheets", description: "Automatický export dat" },
    { name: "Mailchimp", description: "Newsletter integrace" },
    { name: "Stripe", description: "Platební brány" },
    { name: "Zapier", description: "Automatizace workflow" },
    { name: "Slack", description: "Notifikace týmů" },
    { name: "CRM systémy", description: "Propojení s obchodem" }
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
                <FileText className="h-12 w-12 text-[hsl(265,85%,65%)]" />
              </div>

              <ThemeToggle />
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Registrační formuláře
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Profesionální registrační formuláře s databázovým propojením.
              Od jednoduchých kontaktních formulářů až po komplexní registrační systémy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Klíčové vlastnosti
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

      {/* Form Types */}
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
              Typy formulářů
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nabízíme různé typy formulářů pro různé obchodní potřeby
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {formTypes.map((type, index) => (
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
                      <p className="text-sm text-[hsl(265,85%,65%)] font-medium mb-3">Funkce:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-[hsl(265,85%,65%)] flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

      {/* Integrations */}
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
              Integrace
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Propojte své formuláře s oblíbenými nástroji a službami
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-card-border hover-elevate transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(265,85%,65%)]/30 text-center p-6">
                  <CardContent className="p-0">
                    <h4 className="font-['Space_Grotesk'] text-lg font-semibold mb-2 text-card-foreground">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
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
              Potřebujete formulář?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktujte nás a vytvoříme pro vás profesionální registrační formulář
              přizpůsobený vašim specifickým potřebám a požadavkům.
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
              Vytvořit formulář
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}