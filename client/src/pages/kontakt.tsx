import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";

export default function Kontakt() {
  const { toast } = useToast();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+420 778 008 346",
      link: "tel:+420778008346",
      description: "Volejte Po-Pá 9:00-18:00"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "info@noircode.cz",
      link: "mailto:info@noircode.cz",
      description: "Odpovíme do 24 hodin"
    },
    {
      icon: MapPin,
      title: "Adresa",
      content: "Praha, Česká republika",
      link: null,
      description: "Osobní setkání po domluvě"
    },
    {
      icon: Clock,
      title: "Pracovní doba",
      content: "Po-Pá 9:00-18:00",
      link: null,
      description: "Víkendy a svátky dle domluvy"
    }
  ];

  const faqItems = [
    {
      question: "Jak dlouho trvá vývoj webové stránky?",
      answer: "Doba vývoje závisí na složitosti projektu. Jednoduchá prezentace 1-2 týdny, komplexnější řešení 1-3 měsíce."
    },
    {
      question: "Poskytujete technickou podporu?",
      answer: "Ano, nabízíme různé typy technické podpory od jednorázových oprav až po pravidelné monitorování."
    },
    {
      question: "Můžu získat cenovou kalkulaci?",
      answer: "Samozřejmě! Každý projekt je jedinečný, proto vám rád připravím individuální cenovou nabídku."
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[hsl(265,85%,75%)] via-[hsl(250,75%,75%)] to-[hsl(265,85%,75%)] bg-clip-text text-transparent">
                Kontaktujte nás
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Máte projekt nebo dotaz? Rádi si s vámi promluvíme a najdeme nejlepší řešení pro váš byznys.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Napište nám
                </CardTitle>
                <p className="text-muted-foreground">
                  Vyplňte formulář a ozveme se vám do 24 hodin
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Jméno *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Vaše jméno"
                                className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all"
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
                            <FormLabel>E-mail *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="vas@email.cz"
                                className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all"
                                disabled={contactMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+420 123 456 789"
                              className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all"
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
                          <FormLabel>Zpráva *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Popište nám váš projekt nebo dotaz..."
                              rows={6}
                              className="bg-background border-border focus:border-[hsl(265,85%,65%)]/50 focus:ring-[hsl(265,85%,65%)]/20 transition-all resize-none"
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
                        className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="text-sm font-medium">Zpráva byla úspěšně odeslána! Ozveme se vám do 24 hodin.</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-[hsl(265,85%,55%)] to-[hsl(250,75%,60%)] hover:from-[hsl(265,85%,60%)] hover:to-[hsl(250,75%,65%)] shadow-lg shadow-[hsl(265,85%,65%)]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(265,85%,65%)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Odesílání...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Odeslat zprávu
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle>Kontaktní informace</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-[hsl(265,85%,65%)]/10 rounded-lg">
                      <item.icon className="h-4 w-4 text-[hsl(265,85%,65%)]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-foreground">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-sm text-muted-foreground hover:text-[hsl(265,85%,65%)] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle>Často kladené otázky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">{item.question}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}