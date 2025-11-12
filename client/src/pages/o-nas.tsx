import { motion } from "framer-motion";
import { Users, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function ONas() {
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
                O nás
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Jsme tým zkušených programátorů se zaměřením na zakázkový vývoj softwaru. 
              Specializujeme se na moderní webová řešení.
            </p>
            <Button
              size="lg"
              onClick={() => setLocation('/kontakt')}
              className="bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)]"
            >
              Kontaktujte nás
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6">
                Naše mise
              </h2>
              <p className="text-lg text-muted-foreground">
                Pomáháme firmám digitalizovat a optimalizovat jejich procesy pomocí moderního softwaru.
                Věříme, že technologie má být užitečná, efektivní a přístupná.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold mb-6">
                Naše hodnoty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                    <Users className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Osobní přístup</h3>
                  <p className="text-muted-foreground">Každý projekt je jedinečný. Věnujeme vám čas a pozornost.</p>
                </div>
                <div>
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                    <Award className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Kvalitní kód</h3>
                  <p className="text-muted-foreground">Používáme nejnovější technologie a best practices.</p>
                </div>
                <div>
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg">
                    <Clock className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Rychlé řešení</h3>
                  <p className="text-muted-foreground">Dodržujeme termíny a doručujeme včas.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}