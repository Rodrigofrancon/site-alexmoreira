import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, Users, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Areas() {
  return (
    <Layout>
      <div className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Áreas de Atuação</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa expertise jurídica abrange as principais áreas do direito para oferecer uma proteção completa aos seus interesses pessoais e empresariais.
            </p>
          </div>

          <Tabs defaultValue="civil" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1 bg-muted/50 rounded-full">
                <TabsTrigger value="civil" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">Direito Civil</TabsTrigger>
                <TabsTrigger value="trabalhista" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">Trabalhista</TabsTrigger>
                <TabsTrigger value="familia" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">Família</TabsTrigger>
              </TabsList>
            </div>

            {/* Direito Civil */}
            <TabsContent value="civil" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Scale size={16} />
                    <span>Proteção Patrimonial e Contratual</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Direito Civil</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    O Direito Civil é a base das relações privadas. Atuamos para garantir que seus contratos sejam seguros, seus direitos de consumidor respeitados e que qualquer dano sofrido seja devidamente reparado.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Contratos</h4>
                        <p className="text-sm text-muted-foreground">Elaboração, revisão e análise de riscos em contratos diversos.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Responsabilidade Civil</h4>
                        <p className="text-sm text-muted-foreground">Ações indenizatórias por danos materiais e morais.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Direito do Consumidor</h4>
                        <p className="text-sm text-muted-foreground">Defesa contra práticas abusivas, negativação indevida e vícios de produtos.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contato">
                    <Button className="rounded-full px-8">
                      Falar com especialista em Civil
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-2" />
                  <img src="/civil-law.jpg" alt="Direito Civil" className="relative rounded-2xl shadow-xl w-full object-cover aspect-square" />
                </div>
              </div>
            </TabsContent>

            {/* Direito Trabalhista */}
            <TabsContent value="trabalhista" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                    <Users size={16} />
                    <span>Relações de Trabalho</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Direito Trabalhista</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Buscamos o equilíbrio nas relações de trabalho, defendendo direitos de empregados e oferecendo segurança jurídica para empresas através de consultoria preventiva.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Reclamatórias Trabalhistas</h4>
                        <p className="text-sm text-muted-foreground">Busca por verbas rescisórias, horas extras e reconhecimento de vínculo.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Defesa Empresarial</h4>
                        <p className="text-sm text-muted-foreground">Contestação de ações e estratégias para redução de passivo trabalhista.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Acidentes de Trabalho</h4>
                        <p className="text-sm text-muted-foreground">Indenizações e estabilidade decorrentes de doenças ou acidentes laborais.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contato">
                    <Button className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Falar com especialista em Trabalhista
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] rotate-2" />
                  <img src="/hero-office.jpg" alt="Direito Trabalhista" className="relative rounded-2xl shadow-xl w-full object-cover aspect-square" />
                </div>
              </div>
            </TabsContent>

            {/* Direito de Família */}
            <TabsContent value="familia" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <HeartHandshake size={16} />
                    <span>Proteção Familiar e Sucessória</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Direito de Família e Sucessões</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Tratamos questões familiares com a delicadeza e a firmeza necessárias. Nosso foco é minimizar conflitos emocionais e garantir a segurança jurídica do patrimônio e dos filhos.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Divórcio e Dissolução de União</h4>
                        <p className="text-sm text-muted-foreground">Procedimentos judiciais e extrajudiciais (em cartório), partilha de bens.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Guarda e Pensão</h4>
                        <p className="text-sm text-muted-foreground">Regulamentação de visitas, guarda compartilhada e revisão de alimentos.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">Inventários</h4>
                        <p className="text-sm text-muted-foreground">Organização da sucessão patrimonial de forma ágil e menos onerosa.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contato">
                    <Button className="rounded-full px-8">
                      Falar com especialista em Família
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-1" />
                  <img src="/family-law.jpg" alt="Direito de Família" className="relative rounded-2xl shadow-xl w-full object-cover aspect-square" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="grid gap-6">
            {[
              {
                q: "Como funciona a primeira consulta?",
                a: "A primeira consulta serve para entendermos o seu caso em detalhes e analisarmos a viabilidade jurídica. Oferecemos uma tarifa promocional para este atendimento inicial, que pode ser presencial ou online."
              },
              {
                q: "Vocês atendem apenas em Porto Alegre?",
                a: "Nossa sede física é em Porto Alegre, mas com o processo eletrônico, atuamos em todo o território nacional. Realizamos atendimentos por videochamada com a mesma qualidade do presencial."
              },
              {
                q: "Quanto tempo demora um processo?",
                a: "O tempo varia muito conforme a complexidade do caso e a comarca. No entanto, sempre buscamos, quando possível, soluções extrajudiciais (acordos) que são muito mais rápidas que a via judicial tradicional."
              },
              {
                q: "Quais documentos devo levar na consulta?",
                a: "Depende da área. Para trabalhista: carteira de trabalho e rescisão. Para família: certidões de nascimento/casamento. Para civil: contratos e comprovantes. Mas não se preocupe, orientaremos você antes do agendamento."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-foreground">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
