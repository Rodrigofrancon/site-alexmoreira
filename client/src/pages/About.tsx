import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, BookOpen, Gavel } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre o Escritório</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fundado com o propósito de oferecer uma advocacia ética, técnica e, acima de tudo, humana. Acreditamos que cada cliente merece um atendimento personalizado e uma estratégia única.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Image Column */}
            <div className="md:col-span-5 relative">
              <div className="sticky top-24">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4]">
                  <img 
                    src="/hero-office.jpg" 
                    alt="Dr. Alex Moreira" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="font-serif text-2xl font-bold">Dr. Alex Moreira</h3>
                      <p className="opacity-90">OAB/RS 12345</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Card className="bg-primary/5 border-none shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Award className="text-primary mb-2" size={24} />
                      <span className="font-bold text-2xl text-foreground">10+</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Anos de Experiência</span>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/5 border-none shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Gavel className="text-secondary mb-2" size={24} />
                      <span className="font-bold text-2xl text-foreground">500+</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Casos Atuados</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Nossa Trajetória</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O escritório Dr. Alex Moreira Advocacia nasceu da vontade de transformar a relação entre advogado e cliente. Percebemos que o mercado jurídico muitas vezes carecia de clareza e empatia, tratando processos apenas como números.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde o início, nossa missão foi clara: oferecer segurança jurídica através de um trabalho técnico impecável, mas sem esquecer que por trás de cada processo existe uma vida, uma família ou uma empresa que precisa de proteção.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Nossos Valores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Ética Inegociável</h4>
                      <p className="text-sm text-muted-foreground">Transparência total sobre riscos e possibilidades de cada caso.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Atendimento Humanizado</h4>
                      <p className="text-sm text-muted-foreground">Escuta ativa e respeito pela história de cada cliente.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Excelência Técnica</h4>
                      <p className="text-sm text-muted-foreground">Atualização constante e estratégias jurídicas modernas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Agilidade</h4>
                      <p className="text-sm text-muted-foreground">Uso de tecnologia para acelerar procedimentos e comunicação.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Formação Acadêmica</h2>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary border-y-0 border-r-0 shadow-sm bg-muted/20">
                    <CardContent className="p-4 flex items-start gap-4">
                      <BookOpen className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-foreground">Especialização em Direito Processual Civil</h4>
                        <p className="text-sm text-muted-foreground">Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary border-y-0 border-r-0 shadow-sm bg-muted/20">
                    <CardContent className="p-4 flex items-start gap-4">
                      <BookOpen className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-foreground">Bacharelado em Direito</h4>
                        <p className="text-sm text-muted-foreground">Universidade Federal do Rio Grande do Sul (UFRGS)</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/contato">
                  <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Agende uma conversa com o Dr. Alex
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
