import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Globe, Zap, FileText, ArrowRight, Send, Mail, Github, Linkedin, Loader2, CheckCircle2, Phone } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme-context";
import logoLight from "@assets/image2_1761121323009.png";
import logoIcon from "@assets/image0_1761121323009.png";
import logoBlack from "@assets/image0_black.png";
import webDesign1 from "@assets/stock_images/modern_web_design_da_e4b71a98.jpg";
import webDesign2 from "@assets/stock_images/modern_web_design_da_8380accf.jpg";
import devWorkspace1 from "@assets/stock_images/professional_develop_1147f882.jpg";
import devWorkspace2 from "@assets/stock_images/professional_develop_133eea55.jpg";
import mobileApp1 from "@assets/stock_images/mobile_app_developme_865bc70e.jpg";
import mobileApp2 from "@assets/stock_images/mobile_app_developme_5d0b2db9.jpg";

// 3D Laptop Component
function Laptop3D() {
  const laptopRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: laptopRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <div ref={laptopRef} className="relative flex items-center justify-center min-h-[600px]" style={{ perspective: "2000px" }}>
      <motion.div
        style={{
          rotateY,
          rotateX,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Laptop Container */}
        <div className="relative w-[400px] md:w-[600px] lg:w-[800px]">
          {/* Laptop Screen */}
          <div className="relative preserve-3d" style={{ transformStyle: "preserve-3d" }}>
            {/* Screen back (outer shell) */}
            <div
              className="w-full aspect-[16/10] dark:bg-gradient-to-br dark:from-[hsl(265,85%,15%)] dark:via-[hsl(265,85%,20%)] dark:to-[hsl(250,75%,18%)] light:bg-gradient-to-br light:from-gray-100 light:via-gray-200 light:to-gray-300 rounded-lg shadow-2xl dark:border-[6px] dark:border-[hsl(265,85%,25%)] light:border-[6px] light:border-gray-300 relative"
              style={{
                transform: "rotateX(-5deg)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
              }}
            >
              {/* Screen bezel */}
              <div className="absolute inset-3 bg-black rounded-sm overflow-hidden shadow-inner">
                {/* Actual screen content */}
                <div className="w-full h-full bg-gradient-to-br from-[hsl(265,85%,8%)] via-background to-[hsl(250,75%,10%)] p-6 overflow-hidden relative">
                  {/* Screen glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50" />
                  
                  {/* Code editor mockup */}
                  <div className="relative z-10 space-y-3 font-mono text-xs md:text-sm">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[hsl(265,85%,65%)]/20">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-muted-foreground/60 text-xs">index.tsx</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">1</span>
                        <span><span className="text-[hsl(265,85%,70%)]">import</span> <span className="text-[hsl(250,75%,75%)]">React</span> <span className="text-[hsl(265,85%,70%)]">from</span> <span className="text-green-400">'react'</span>;</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">2</span>
                        <span className="text-muted-foreground/40">  </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">3</span>
                        <span><span className="text-[hsl(265,85%,70%)]">function</span> <span className="text-[hsl(250,75%,75%)]">App</span>() {'{'}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">4</span>
                        <span className="text-muted-foreground/40">    </span><span className="text-[hsl(265,85%,70%)]">return</span> (
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">5</span>
                        <span className="text-muted-foreground/40">      </span><span className="text-blue-400">&lt;div</span> <span className="text-[hsl(250,75%,75%)]">className</span>=<span className="text-green-400">"app"</span><span className="text-blue-400">&gt;</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">6</span>
                        <span className="text-muted-foreground/40">        </span><span className="text-blue-400">&lt;h1&gt;</span><span className="text-foreground/80">Noircode</span><span className="text-blue-400">&lt;/h1&gt;</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">7</span>
                        <span className="text-muted-foreground/40">      </span><span className="text-blue-400">&lt;/div&gt;</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">8</span>
                        <span className="text-muted-foreground/40">    </span>);
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground/40">9</span>
                        <span>{'}'}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Camera notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rounded-full border border-gray-600" />
            </div>

            {/* Laptop Base/Keyboard */}
            <div
              className="w-full mt-1 dark:bg-gradient-to-br dark:from-[hsl(265,85%,18%)] dark:via-[hsl(265,85%,22%)] dark:to-[hsl(250,75%,20%)] light:bg-gradient-to-br light:from-gray-200 light:via-gray-300 light:to-gray-400 rounded-lg shadow-2xl dark:border-t-4 dark:border-gray-600 light:border-t-4 light:border-gray-400 relative"
              style={{
                height: "40px",
                transform: "translateZ(-10px) rotateX(85deg)",
                transformOrigin: "top",
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
              }}
            >
              {/* Keyboard texture */}
              <div className="absolute inset-2 grid grid-cols-12 gap-[2px] opacity-40">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    className="dark:bg-[hsl(265,85%,10%)] light:bg-gray-600 rounded-[1px]"
                    style={{
                      gridColumn: i === 36 ? "span 4" : "span 1",
                      opacity: Math.random() * 0.3 + 0.3
                    }}
                  />
                ))}
              </div>

              {/* Touchpad */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-12 dark:bg-[hsl(265,85%,12%)] light:bg-gray-300 rounded dark:border dark:border-gray-500 light:border light:border-gray-400" />
            </div>
          </div>

          {/* Glow effect under laptop */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-3xl opacity-40" />
        </div>
      </motion.div>

    </div>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const { toast } = useToast();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { theme } = useTheme();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // EmailJS config with Vite env vars (fallback to current hardcoded values)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_g5zdpzo";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_7kk8zqn";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "o8xwIazZdCrFsnJMb";

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // First save to backend (note: on Vercel static deploy this may be rewritten to index.html)
      const result = await apiRequest('POST', '/api/contact', data);

      // Then send email via EmailJS from client side
      const emailData = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || '',
          message: data.message,
        }
      };

      try {
        const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
          mode: 'cors',
        });

        const bodyText = await emailResponse.text().catch(() => '');

        if (!emailResponse.ok) {
          console.warn(`EmailJS send failed. status=${emailResponse.status}, body=${bodyText}. If status is 403/405, add ${window.location.origin} to EmailJS Allowed Origins and verify your public key/service/template.`);
        }
      } catch (err: any) {
        console.error('EmailJS network/CORS error:', err?.message || err);
      }

      return result;
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      form.reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    },
    onError: (error: any) => {
      toast({
        title: "Chyba při odesílání",
        description: error?.text || error?.message || "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-[hsl(265,85%,25%)] dark:via-background dark:to-[hsl(250,75%,20%)] dark:opacity-30 light:bg-gradient-to-br light:from-blue-50 light:via-white light:to-purple-50 light:opacity-80" />
          <div className="absolute inset-0 light:bg-[var(--light-bg-pattern)] light:opacity-60" />
          <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-[hsl(265,85%,65%)] light:bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-[hsl(250,75%,70%)] light:bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-gradient-to-r dark:from-[hsl(265,85%,65%)] dark:to-[hsl(250,75%,70%)] light:bg-gradient-to-r light:from-blue-100 light:to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute light:block dark:hidden top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute light:block dark:hidden bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-green-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute light:block dark:hidden top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-300 to-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: "2.5s" }} />
          <div className="absolute light:block dark:hidden bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: "3.5s" }} />
          <div className="absolute light:block dark:hidden top-2/3 left-1/6 w-56 h-56 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse" style={{ animationDelay: "4.5s" }} />
          <div className="absolute light:block dark:hidden bottom-2/3 right-1/6 w-60 h-60 bg-gradient-to-br from-violet-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse" style={{ animationDelay: "5.5s" }} />
          <div className="absolute light:block dark:hidden top-1/6 right-1/6 w-48 h-48 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: "6.5s" }} />
          <div className="absolute light:block dark:hidden bottom-1/6 left-1/6 w-52 h-52 bg-gradient-to-br from-lime-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: "7.5s" }} />
          <div className="absolute light:block dark:hidden top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-45 animate-pulse" style={{ animationDelay: "8.5s" }} />
          <div className="absolute light:block dark:hidden top-3/4 right-3/4 w-44 h-44 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full mix-blend-multiply filter blur-lg opacity-45 animate-pulse" style={{ animationDelay: "9.5s" }} />
          <div className="absolute light:block dark:hidden bottom-3/4 left-3/4 w-36 h-36 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" style={{ animationDelay: "10.5s" }} />
          <div className="absolute light:block dark:hidden top-1/8 right-1/8 w-32 h-32 bg-gradient-to-br from-fuchsia-300 to-pink-300 rounded-full mix-blend-multiply filter blur-md opacity-55 animate-pulse" style={{ animationDelay: "11.5s" }} />
        </motion.div>

        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex justify-center"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-[hsl(265,85%,65%)]/20 dark:to-[hsl(250,75%,70%)]/20 light:bg-gradient-to-r light:from-gray-200/30 light:to-gray-300/30 blur-2xl" />
                <img
                  src={theme === 'light' ? logoBlack : logoIcon}
                  alt="Noircode"
                  className="h-20 md:h-24 relative dark:brightness-100"
                  data-testid="img-logo-hero"
                />
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Tvoříme software,
              </span>
              <br />
              <span className="text-foreground">který pracuje za vás</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Profesionální vývoj webových stránek, aplikací a automatizace procesů.
              Moderní technologie, kvalitní kód, důraz na detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 dark:bg-gradient-to-r dark:from-[hsl(265,85%,55%)] dark:to-[hsl(250,75%,60%)] dark:hover:from-[hsl(265,85%,60%)] dark:hover:to-[hsl(250,75%,65%)] dark:shadow-lg dark:shadow-[hsl(265,85%,65%)]/20 light:bg-gradient-to-r light:from-blue-400 light:to-blue-500 light:hover:from-blue-500 light:hover:to-blue-600 light:shadow-lg light:shadow-blue-400/20 transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => scrollToSection("contact")}
                data-testid="button-cta-hero"
              >
                Kontaktujte nás
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                onClick={() => scrollToSection("services")}
                data-testid="button-services-hero"
              >
                Naše služby
              </Button>
              <ThemeToggle />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
          >
            <motion.div className="w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(265,85%,65%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(250,75%,70%)]/5 rounded-full blur-3xl" />
        <div className="absolute light:block dark:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <div className="absolute light:block dark:hidden top-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                O nás
              </h2>
              {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full" />}
            </div>
            
            <Card className="bg-card/50 backdrop-blur-sm border-card-border">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-muted-foreground"
                  >
                    Jsme tým zkušených programátorů se zaměřením na <span className="text-[hsl(265,85%,70%)] font-medium">zakázkový vývoj softwaru</span>.
                    Specializujeme se na vytváření moderních webových řešení, která skutečně fungují, výborně vypadají a šetří čas i náklady.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted-foreground"
                  >
                    Naše práce je založena na třech pilířích: <span className="text-foreground font-medium">moderní technologie</span>,
                    <span className="text-foreground font-medium"> kvalitní kód</span> a
                    <span className="text-foreground font-medium"> osobní přístup</span>.
                    Věříme, že software má být nejen funkční, ale i elegantní a udržovatelný.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-muted-foreground"
                  >
                    Od jednoduchých webových stránek až po komplexní aplikace a automatizační systémy –
                    pomáháme firmám digitalizovat a optimalizovat jejich procesy.
                  </motion.p>
                </div>
                
                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(265,85%,75%)] to-[hsl(250,75%,75%)] bg-clip-text text-transparent mb-2">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">Projektů</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(265,85%,75%)] to-[hsl(250,75%,75%)] bg-clip-text text-transparent mb-2">
                      3
                    </div>
                    <div className="text-sm text-muted-foreground">Roky zkušeností</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(265,85%,75%)] to-[hsl(250,75%,75%)] bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Spokojených klientů</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold mb-6 text-foreground">
              Naše služby
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nabízíme komplexní IT řešení šitá na míru vašim potřebám
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Webové stránky",
                description: "Moderní, responzivní webové stránky, které zaujmou. Od landingových stránek až po komplexní firemní weby s CMS.",
                delay: 0,
                path: "/webove-stranky",
              },
              {
                icon: Code2,
                title: "Webové aplikace",
                description: "Fullstack vývoj webových aplikací na míru. React, Node.js, databáze – vše, co potřebujete pro váš online byznys.",
                delay: 0.1,
                path: "/webove-aplikace",
              },
              {
                icon: Zap,
                title: "Automatizace",
                description: "Automatizace opakujících se úkonů a firemních procesů. Ušetřete čas a snižte náklady pomocí chytrých řešení.",
                delay: 0.2,
                path: "/automatizace",
              },
              {
                icon: FileText,
                title: "Registrační formuláře",
                description: "Profesionální formuláře pro registrace, přihlášky nebo sběr dat. S validací, databázovým propojením a správou.",
                delay: 0.3,
                path: "/formulare",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: service.delay }}
                data-testid={`card-service-${index}`}
              >
                <Card className="h-full bg-card border-card-border hover-elevate group transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(265,85%,65%)]/30 hover:shadow-lg hover:shadow-[hsl(265,85%,65%)]/10">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-3 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-lg group-hover:from-[hsl(265,85%,65%)]/30 group-hover:to-[hsl(250,75%,70%)]/30 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-[hsl(265,85%,65%)]" />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-semibold mb-4 text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button
                      onClick={() => setLocation(service.path)}
                      variant="outline"
                      size="sm"
                      className="rounded-full border-[hsl(265,85%,65%)]/30 hover:border-[hsl(265,85%,65%)]/50 hover:bg-[hsl(265,85%,65%)]/10 text-[hsl(265,85%,65%)] hover:text-[hsl(265,85%,70%)] transition-all duration-300"
                      data-testid={`link-service-${index}`}
                    >
                      Zjistit více
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Laptop Showcase Section */}
      <section className="relative py-32 md:py-40 overflow-visible">
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold mb-6 text-foreground">
              Moderní technologie
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Používáme nejnovější nástroje pro tvorbu výkonných aplikací
            </p>
          </motion.div>

          {/* 3D Laptop */}
          <Laptop3D />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-[hsl(265,85%,8%)] to-background">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold mb-6 text-foreground">
              Reference
            </h2>
            {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ukázky našich nejnovějších projektů
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "REF. 1",
                tech: "React, Node.js, PostgreSQL",
                image: webDesign1,
                delay: 0,
              },
              {
                title: "REF. 2",
                tech: "TypeScript, Express, MongoDB",
                image: webDesign2,
                delay: 0.1,
              },
              {
                title: "REF. 3",
                tech: "Python, FastAPI, Redis",
                image: devWorkspace1,
                delay: 0.2,
              },
              {
                title: "REF. 4",
                tech: "Next.js, Tailwind, Vercel",
                image: mobileApp1,
                delay: 0.3,
              },
              {
                title: "REF. 5",
                tech: "React, Stripe, AWS",
                image: devWorkspace2,
                delay: 0.4,
              },
              {
                title: "REF. 6",
                tech: "React Native, Firebase",
                image: mobileApp2,
                delay: 0.5,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: project.delay }}
                className="group cursor-pointer"
                data-testid={`card-project-${index}`}
              >
                <Card className="overflow-hidden bg-card dark:border-card-border light:border-gray-200 hover-elevate transition-all duration-300 group-hover:-translate-y-2 dark:group-hover:border-[hsl(265,85%,65%)]/30 light:group-hover:border-blue-300 group-hover:shadow-xl dark:group-hover:shadow-[hsl(265,85%,65%)]/20 light:group-hover:shadow-blue-500/20">
                  <div className="relative aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-500" style={{ transformOrigin: 'center' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(265,85%,65%)]/0 to-[hsl(250,75%,70%)]/0 group-hover:from-[hsl(265,85%,65%)]/20 group-hover:to-[hsl(250,75%,70%)]/10 transition-all duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-2 text-card-foreground group-hover:text-[hsl(265,85%,70%)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.tech}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[hsl(265,85%,65%)]/10 to-[hsl(250,75%,70%)]/10 rounded-full blur-3xl" />
        <div className="absolute light:block dark:hidden top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-lime-100 to-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" />
        <div className="absolute light:block dark:hidden bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{ animationDelay: "1.5s" }} />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Kontaktujte nás
              </h2>
              {theme === 'dark' && <div className="w-20 h-1 bg-gradient-to-r from-[hsl(265,85%,65%)] to-[hsl(250,75%,70%)] mx-auto rounded-full mb-6" />}
              <p className="text-lg text-muted-foreground">
                Zanechte nám zprávu, ozveme se do 24 hodin
              </p>
            </div>

            <Card className="bg-card border-card-border relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[hsl(265,85%,65%)]/20 to-[hsl(250,75%,70%)]/20 rounded-full blur-3xl" />
              
              <CardContent className="p-8 relative">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Jméno</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Vaše jméno"
                              className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all"
                              data-testid="input-name"
                              disabled={contactMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">E-mail</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="vas@email.cz"
                              className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all"
                              data-testid="input-email"
                              disabled={contactMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Telefon (volitelné)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+420 123 456 789"
                              className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all"
                              data-testid="input-phone"
                              disabled={contactMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Zpráva</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Popište nám váš projekt nebo dotaz..."
                              rows={5}
                              className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all resize-none"
                              data-testid="input-message"
                              disabled={contactMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-[hsl(265,85%,65%)] bg-[hsl(265,85%,65%)]/10 p-4 rounded-lg border border-[hsl(265,85%,65%)]/30"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="text-sm font-medium">Zpráva byla úspěšně odeslána!</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)] shadow-lg shadow-[hsl(265,85%,65%)]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(265,85%,65%)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Odesílání...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Zanechte nám zprávu
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src={theme === 'light' ? logoBlack : logoIcon}
                alt="Noircode"
                className="h-12 dark:brightness-100"
                data-testid="img-logo-footer"
              />
            </div>

            {/* Links & Contact */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-gray-700 transition-colors"
                  data-testid="link-footer-services"
                >
                  Služby
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted-foreground hover:text-gray-700 transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Reference
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-gray-700 transition-colors"
                  data-testid="link-footer-contact"
                >
                  Kontakt
                </button>
              </div>
              <a 
                href="tel:+420778008346"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gray-700 transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4" />
                +420 778 008 346
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-sm text-muted-foreground">
              © 2025 Noircode. Všechna práva vyhrazena.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
