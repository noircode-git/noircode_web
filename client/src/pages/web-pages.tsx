import { motion } from "framer-motion";
import { ArrowLeft, Globe, CheckCircle, Code, Smartphone, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme-context";

export default function WebPages() {
  const [, setLocation] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Responzivní design",
      description: "Perfektní zobrazení na všech zařízeních - počítač, tablet, mobil"
    },
    {
      icon: Zap,
      title: "Rychlé načítání",
      description: "Optimalizace pro nejrychlejší možné načtení stránek"
    },
    {
      icon: Shield,
      title: "Bezpečnost na prvním místě",
      description: "SSL certifikáty, bezpečné hostingové řešení"
    },
    {
      icon: BarChart3,
      title: "SEO optimalizace",
      description: "Optimalizace pro vyhledávače pro lepší pozice ve výsledcích"
    },
    {
      icon: Code,
      title: "Moderní technologie",
      description: "Nejnovější webové standardy a frameworky"
    },
    {
      icon: Smartphone,
      title: "Mobilní optimalizace",
      description: "Speciální pozornost věnovaná mobilním zařízením"
    }
  ];

  const pricing = [
    {
      name: "Základní web",
      price: "od 10.000 Kč",
      features: [
        "až 10 stránek",
        "Responzivní design",
        "Kontaktní formulář",
        "Základní SEO",
        "Reaktivní prvky",
        "Možnost hostingu a údržby"
      ]
    },
    {
      name: "Firemní web",
      price: "od 15.000 Kč",
      features: [
        "až 20 stránek",
        "Pokročilý design",
        "CMS systém",
        "Pokročilé SEO",
        "Analytics integrace",
        "Možnost hostingu a údržby"
      ]
    },
    {
      name: "E-commerce",
      price: "od 25.000 Kč",
      features: [
        "Neomezený počet stránek",
        "E-shop řešení",
        "Platební brány",
        "Skladové hospodářství",
        "Pokročilá analytika",
        "Možnost hostingu a údržby"
      ]
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
                <Globe className="h-12 w-12 text-[hsl(265,85%,65%)]" />
              </div>

              <ThemeToggle />
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Webové stránky
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vytváříme moderní, rychlé a efektní webové stránky, které vašemu byznysu přinesou výsledky.
              Od jednoduchých prezentačních stránek až po komplexní firemní weby.
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
              Co získáte
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

      {/* Pricing */}
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
              Cenové balíčky
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vyberte si balíček, který nejlépe vyhovuje vašim potřebám
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-card-border hover-elevate transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(265,85%,65%)]/30 hover:shadow-xl hover:shadow-[hsl(265,85%,65%)]/20">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="font-['Space_Grotesk'] text-2xl font-semibold mb-2 text-card-foreground">
                        {plan.name}
                      </h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-[hsl(265,85%,75%)] to-[hsl(250,75%,75%)] bg-clip-text text-transparent">
                        {plan.price}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[hsl(265,85%,65%)] flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)] shadow-lg shadow-[hsl(265,85%,65%)]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(265,85%,65%)]/30"
                      onClick={() => {
                        setLocation("/");
                        setTimeout(() => {
                          const element = document.getElementById("contact");
                          element?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      Kontaktujte nás
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Připraveni začít?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktujte nás ještě dnes a promluvme si o vašem projektu.
              Společně vytvoříme webové stránky, které vašemu byznysu pomohou růst.
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
              Zahájit projekt
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}