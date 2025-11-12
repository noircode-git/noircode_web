import { motion } from "framer-motion";
import { Code2, Globe, ArrowRight, CheckCircle2, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function WebDevelopmentPrague() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Jednoduché, rychlé a efektivní landing pages pro vaše produkty a služby",
      features: ["Responzivní design", "SEO optimalizace", "Rychlé načítání"]
    },
    {
      icon: Code2,
      title: "Firemní weby",
      description: "Komplexní webové prezentace s CMS pro snadnou správu obsahu",
      features: ["Správa obsahu", "Blog", "Kontaktní formuláře"]
    },
    {
      icon: Star,
      title: "E-commerce",
      description: "Internetové obchody s platebními bránami a správou produktů",
      features: ["Platební systémy", "Správa objednávek", "Inventář"]
    }
  ];

  const technologies = [
    { name: "React", description: "Moderní uživatelské rozhraní" },
    { name: "Next.js", description: "SEO optimalizovaný framework" },
    { name: "TypeScript", description: "Bezpečný a udržovatelný kód" },
    { name: "Node.js", description: "Výkonný server-side runtime" },
    { name: "PostgreSQL", description: "Spolehlivá databáze" },
    { name: "Tailwind CSS", description: "Moderní styling" }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Lokální partner",
      description: "Jsme tým v Praze s osobním přístupem a rychlou komunikací"
    },
    {
      icon: Award,
      title: "Kvalitní kód",
      description: "Používáme nejnovější technologie a best practices"
    },
    {
      icon: CheckCircle2,
      title: "Podpora 24/7",
      description: "Technická podpora a údržba pro váš web"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
                Webový vývoj v Praze
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Profesionální vývoj webových stránek a aplikací v Praze. 
              Moderní technologie, kvalitní kód a osobní přístup pro váš byznys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setLocation('/kontakt')}
                className="bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)]"
              >
                Získat nabídku
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation('/webove-aplikace')}
              >
                Naše portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6">
              Naše služby
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializujeme se na kompletní webová řešení od jednoduchých stránek po složité aplikace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-card-border hover:border-[hsl(265,85%,65%)]/30 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                      <service.icon className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6">
              Technologie, které používáme
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moderní a spolehlivé technologie pro výkonná a udržovatelná řešení
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-card border border-card-border rounded-lg"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6">
              Proč si vybrat nás?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-full">
                  <benefit.icon className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6">
              Máte projekt? Pojďme si promluvit!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kontaktujte nás pro bezplatnou konzultaci a cenovou nabídku. 
              Rádi vám pomůžeme s realizací vašich webových projektů.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setLocation('/kontakt')}
                className="bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)]"
              >
                Začít projekt
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation('/reference')}
              >
                Zobrazit reference
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}