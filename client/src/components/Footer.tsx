import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const [location] = useLocation();

  const navigationLinks = [
    { href: "/", label: "Domů", title: "Hlavní stránka Noircode" },
    { href: "/webove-stranky", label: "Webové stránky", title: "Profesionální webové stránky a prezentace" },
    { href: "/webove-aplikace", label: "Webové aplikace", title: "Vývoj webových aplikací na míru" },
    { href: "/automatizace", label: "Automatizace", title: "Automatizace firemních procesů" },
    { href: "/formulare", label: "Formuláře", title: "Registrační a kontaktní formuláře" },
    { href: "/o-nas", label: "O nás", title: "Více o naší firmě a hodnotách" },
    { href: "/reference", label: "Reference", title: "Naše realizované projekty" },
    { href: "/kontakt", label: "Kontakt", title: "Kontaktujte nás" },
  ];

  const seoLinks = [
    { href: "/web-development-prague", label: "Webový vývoj Praha", title: "Webové stránky a aplikace v Praze" },
    { href: "/ecommerce-development", label: "E-commerce vývoj", title: "Internetové obchody a e-shop řešení" },
    { href: "/automation-solutions", label: "Automatizace procesů", title: "Chytrá automatizace firemních úkonů" },
    { href: "/contact-forms-crm", label: "Formuláře a CRM", title: "Kontaktní formuláře a CRM systémy" },
    { href: "/faq", label: "FAQ", title: "Často kladené otázky" },
    { href: "/cenik", label: "Ceník", title: "Ceny našich služeb" },
  ];

  const legalLinks = [
    { href: "/gdpr", label: "GDPR", title: "Ochrana osobních údajů" },
    { href: "/podminky-uziti", label: "Podmínky užití", title: "Obchodní podmínky a pravidla" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">Noircode</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Profesionální vývoj webových stránek, aplikací a automatizace procesů.
                
                Moderní technologie, kvalitní kód, důraz na detail.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+420778008346" 
                  className="hover:text-foreground transition-colors"
                  aria-label="Zavolat na telefon +420 778 008 346"
                >
                  +420 778 008 346
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:info@noircode.cz" 
                  className="hover:text-foreground transition-colors"
                  aria-label="Poslat email na info@noircode.cz"
                >
                  info@noircode.cz
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Praha, Česká republika</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigace</h3>
            <nav className="space-y-2" role="navigation" aria-label="Hlavní navigace">
              {navigationLinks.map((link) => (
                <div key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-sm transition-colors hover:text-primary ${
                      location === link.href 
                        ? 'text-primary font-medium' 
                        : 'text-muted-foreground'
                    }`}
                    title={link.title}
                  >
                    {link.label}
                  </Link>
                  {location === link.href && (
                    <span className="sr-only">(aktuální stránka)</span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Služby</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Webové stránky</div>
              <div>E-commerce řešení</div>
              <div>Webové aplikace</div>
              <div>Mobilní aplikace</div>
              <div>Automatizace procesů</div>
              <div>API integrace</div>
              <div>SEO optimalizace</div>
              <div>Technická podpora</div>
            </div>
          </div>

          {/* Technologies & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Technologie</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>React & TypeScript</div>
              <div>Node.js & Express</div>
              <div>Python & FastAPI</div>
              <div>PostgreSQL & MongoDB</div>
              <div>Docker & Cloud</div>
              <div>AWS & Vercel</div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium text-sm text-foreground mb-2">Sledujte nás</h4>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a 
                    href="https://github.com/noircode" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Navštívit GitHub profil"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a 
                    href="https://linkedin.com/company/noircode" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Navštívit LinkedIn profil"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a 
                    href="https://noircode.cz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Navštívit webové stránky"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Links Section */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-semibold text-foreground mb-4">Užitečné odkazy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Hlavní stránka</Link>
            <Link href="/webove-stranky" className="text-muted-foreground hover:text-primary transition-colors">Webové stránky Praha</Link>
            <Link href="/webove-aplikace" className="text-muted-foreground hover:text-primary transition-colors">Webové aplikace</Link>
            <Link href="/automatizace" className="text-muted-foreground hover:text-primary transition-colors">Automatizace procesů</Link>
            <Link href="/formulare" className="text-muted-foreground hover:text-primary transition-colors">Registrační formuláře</Link>
            <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} Noircode. Všechna práva vyhrazena.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="/gdpr" className="hover:text-foreground transition-colors">
                Ochrana osobních údajů
              </Link>
              <Link href="/podminky-uziti" className="hover:text-foreground transition-colors">
                Podmínky užití
              </Link>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="nofollow"
                className="hover:text-foreground transition-colors"
              >
                robots.txt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}