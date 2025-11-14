import { motion } from "framer-motion";
import { ArrowLeft, Code2, CheckCircle, Database, Shield, Zap, Users, BarChart3, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme-context";


export default function WebApps() {
  const [, setLocation] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Code2,
      title: "Moderní technologie",
      description: "React, Node.js, TypeScript - nejnovější nástroje pro vývoj"
    },
    {
      icon: Database,
      title: "Databázové řešení",
      description: "PostgreSQL, MongoDB nebo jiné databáze dle vašich potřeb"
    },
    {
      icon: Shield,
      title: "Bezpečnost na prvním místě",
      description: "Autentifikace, autorizace, šifrování dat"
    },
    {
      icon: Zap,
      title: "Vysoký výkon",
      description: "Optimalizace pro rychlé načítání a plynulý chod"
    },
    {
      icon: Users,
      title: "Uživatelsky přívětivé",
      description: "Intuitivní rozhraní navržené pro koncové uživatele"
    },
    {
      icon: BarChart3,
      title: "Analytics & reporting",
      description: "Sledování uživatelského chování a výkonnostních metrik"
    }
  ];

  const technologies = [
    { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", items: ["Node.js", "Express", "FastAPI", "GraphQL"] },
    { name: "Databáze", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
    { name: "Deployment", items: ["Vercel", "AWS", "Docker", "Kubernetes"] }
  ];

  const caseStudies = [
    {
      title: "PROJEKT 1",
      description: "popis 1",
      tech: "React, Node.js, PostgreSQL",
      results: ["výsledek 1.1", "výsledek 1.2", "výsledek 1.3"]
    },
    {
      title: "PROJEKT 2",
      description: "popis 2",
      tech: "Next.js, Express, MongoDB",
      results: ["1000+ registrovaných studentů", "95% dokončenost kurzů", "Mobilní aplikace"]
    },
    {
      title: "PROJEKT 3",
      description: "popis 3",
      tech: "React, FastAPI, PostgreSQL",
      results: ["70% snížení chyb", "Real-time inventura", "API pro integrace"]
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
                <Code2 className="h-12 w-12 text-[hsl(265,85%,65%)]" />
              </div>

              <ThemeToggle />
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Webové aplikace
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vytváříme komplexní webové aplikace na míru vašim obchodním potřebám.
              Od jednoduchých nástrojů až po enterprise řešení s tisíci uživateli.
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

      {/* Technologies */}
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
              Technologie
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Používáme moderní a ověřené technologie pro tvorbu spolehlivých aplikací
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-card-border">
                  <CardContent className="p-6">
                    <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-4 text-card-foreground">
                      {tech.name}
                    </h3>
                    <ul className="space-y-2">
                      {tech.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(265,85%,65%)]" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Reference
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Úspěšné projekty, které jsme realizovali pro naše klienty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
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
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm text-[hsl(265,85%,65%)] font-medium mb-2">Technologie:</p>
                      <p className="text-sm text-muted-foreground">{study.tech}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(265,85%,65%)] font-medium mb-3">Výsledky:</p>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-[hsl(265,85%,65%)] flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
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
              Připraveni na vlastní aplikaci?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktujte nás a promluvme si o vašich požadavcích.
              Společně vytvoříme řešení, které vašemu byznysu přinese konkurenční výhodu.
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