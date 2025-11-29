import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scale, Users, HeartHandshake, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-office.jpg" 
            alt="Escritório de advocacia acolhedor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-in slide-in-from-left-10 fade-in duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Atendimento Online e Presencial
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Soluções jurídicas com <span className="text-primary italic">empatia</span> e segurança.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Entendemos que por trás de cada processo existe uma história de vida. Oferecemos suporte jurídico especializado em Direito Civil, Trabalhista e de Família com foco em resultados e acolhimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <Button size="lg" className="rounded-full text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="/areas">
                <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80">
                  Conheça nossas áreas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / About Preview */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] rotate-3 blur-sm" />
              <img 
                src="/civil-law.jpg" 
                alt="Detalhes do escritório" 
                className="relative rounded-[1.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-xl border border-border max-w-xs hidden md:block">
                <p className="font-serif text-lg italic text-primary mb-2">"A justiça é o refúgio seguro para aqueles que buscam paz."</p>
                <p className="text-sm text-muted-foreground font-medium">— Dr. Alex Moreira</p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mais que advogados, somos seus parceiros estratégicos.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nosso escritório nasceu da convicção de que a advocacia deve ser exercida com excelência técnica, mas sem perder a essência humana.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Cada caso é tratado com um plano estratégico único, visando não apenas a vitória jurídica, mas a melhor solução para a sua vida e seus negócios.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ética e Sigilo</h4>
                    <p className="text-sm text-muted-foreground">Confidencialidade absoluta em todos os atendimentos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Atendimento Humano</h4>
                    <p className="text-sm text-muted-foreground">Escuta ativa e acolhimento em momentos delicados.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/sobre">
                <Button variant="link" className="p-0 h-auto text-primary font-semibold group">
                  Saiba mais sobre o escritório <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">Áreas de Atuação</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como podemos ajudar você hoje?
            </h2>
            <p className="text-muted-foreground text-lg">
              Atuamos com foco e especialização para garantir a melhor defesa dos seus direitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group bg-background">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                <img src="/civil-law.jpg" alt="Direito Civil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-8">
                <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary w-fit">
                  <Scale size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Direito Civil</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Soluções para contratos, responsabilidade civil, indenizações e defesa do consumidor com foco em reparação justa.
                </p>
                <Link href="/areas">
                  <span className="text-primary font-semibold text-sm flex items-center cursor-pointer group-hover:underline">
                    Ver detalhes <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group bg-background">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10" />
                <img src="/hero-office.jpg" alt="Direito Trabalhista" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-8">
                <div className="mb-4 p-3 rounded-xl bg-secondary/10 text-secondary w-fit">
                  <Users size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Direito Trabalhista</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Consultoria preventiva e contenciosa para empresas e empregados, garantindo o equilíbrio nas relações de trabalho.
                </p>
                <Link href="/areas">
                  <span className="text-secondary font-semibold text-sm flex items-center cursor-pointer group-hover:underline">
                    Ver detalhes <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group bg-background">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                <img src="/family-law.jpg" alt="Direito de Família" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-8">
                <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary w-fit">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Direito de Família</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Divórcios, guarda e inventários tratados com a sensibilidade necessária, priorizando soluções consensuais.
                </p>
                <Link href="/areas">
                  <span className="text-primary font-semibold text-sm flex items-center cursor-pointer group-hover:underline">
                    Ver detalhes <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute inset-0 opacity-10 bg-[url('/texture-bg.jpg')] bg-cover bg-center mix-blend-multiply" />
        
        <div className="container relative z-10">
          <div className="bg-background rounded-[2rem] p-8 md:p-16 shadow-2xl border border-border/50 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Precisa de orientação jurídica?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Agende uma consulta inicial com tarifa promocional. Atendemos presencialmente em Porto Alegre ou via videochamada para todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5551985224953" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto rounded-full gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                    <MessageCircle size={20} />
                    Conversar no WhatsApp
                  </Button>
                </a>
                <Link href="/contato">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full gap-2 border-primary/20 hover:bg-primary/5">
                    <Clock size={20} />
                    Ver Horários
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative shrink-0">
              <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-background p-6 rounded-2xl shadow-lg border border-border text-center min-w-[200px]">
                <p className="text-sm text-muted-foreground mb-1">Atendimento</p>
                <p className="font-serif text-2xl font-bold text-primary">Seg — Sex</p>
                <p className="text-lg font-medium text-foreground">09:00 — 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
