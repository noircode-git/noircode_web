import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function PodminkyUziti() {
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
                Podmínky užití
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Obchodní podmínky a pravidla pro užívání našich služeb a webových stránek.
            </p>
            <Button
              size="lg"
              onClick={() => setLocation('/kontakt')}
              className="bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)]"
            >
              Kontakt
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-xl mb-4">Předmět smlouvy</h2>
              <p className="text-muted-foreground">Tyto podmínky upravují poskytování IT služeb firmou Noircode.</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Povinnosti poskytovatele</h2>
              <p className="text-muted-foreground">Zavazujeme se poskytovat služby v dohodnuté kvalitě a termínu.</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Povinnosti zákazníka</h2>
              <p className="text-muted-foreground">Poskytnutí potřebných informací a včasná platba za služby.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}