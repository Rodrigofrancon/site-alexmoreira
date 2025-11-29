import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/areas" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <h1 className="font-serif text-2xl font-bold text-primary tracking-tight group-hover:text-primary/90 transition-colors">
                Dr. Alex Moreira
              </h1>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Advocacia • Ética • Segurança
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-sm font-medium cursor-pointer transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                    location === link.href
                      ? "text-primary after:w-full"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contato">
              <Button variant="default" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Agendar Consulta
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10 fade-in duration-300">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-xl font-serif font-medium cursor-pointer block py-2",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contato">
              <Button className="w-full rounded-full mt-4 text-lg py-6">
                Agendar Consulta
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/40 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                Dr. Alex Moreira
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Com foco na excelência técnica e atendimento humano, nosso escritório presta serviços jurídicos com ética e confidencialidade.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-foreground mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-foreground mb-6">Áreas de Atuação</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/areas">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Direito Civil</span>
                  </Link>
                </li>
                <li>
                  <Link href="/areas">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Direito Trabalhista</span>
                  </Link>
                </li>
                <li>
                  <Link href="/areas">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Direito de Família</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-foreground mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Atendimento Presencial e Remoto<br />
                    Porto Alegre - RS
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:+5551985224953" className="text-muted-foreground hover:text-primary transition-colors">
                    (51) 98522-4953
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:contato@alexmoreiraadvogado.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                    contato@alexmoreiraadvogado.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Dr. Alex Moreira Advocacia. Todos os direitos reservados.</p>
            <p>OAB/RS 12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
