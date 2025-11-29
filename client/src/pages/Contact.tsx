import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-muted/30 py-12 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Fale Conosco</h1>
            <p className="text-muted-foreground text-lg">
              Estamos prontos para ouvir você. Entre em contato para agendar uma consulta ou tirar suas dúvidas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-8">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-background text-primary shadow-sm shrink-0">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                          <p className="text-muted-foreground">
                            Atendimento Presencial e Remoto<br />
                            Porto Alegre - RS
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-background text-primary shadow-sm shrink-0">
                          <Phone size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                          <p className="text-muted-foreground mb-1">
                            <a href="tel:+5551985224953" className="hover:text-primary transition-colors">(51) 98522-4953</a>
                          </p>
                          <p className="text-xs text-muted-foreground">Disponível para chamadas urgentes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-background text-primary shadow-sm shrink-0">
                          <Mail size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                          <p className="text-muted-foreground">
                            <a href="mailto:contato@alexmoreiraadvogado.com.br" className="hover:text-primary transition-colors">contato@alexmoreiraadvogado.com.br</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-background text-primary shadow-sm shrink-0">
                          <Clock size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                          <p className="text-muted-foreground">Segunda a Sexta: 09:00 — 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#25D366] p-6 text-white flex items-center justify-between hover:bg-[#128C7E] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <MessageCircle size={24} />
                      <div>
                        <p className="font-bold text-lg">WhatsApp</p>
                        <p className="text-white/90 text-sm">Resposta rápida em horário comercial</p>
                      </div>
                    </div>
                    <a href="https://wa.me/5551985224953" target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="Conversar no WhatsApp"></a>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-background rounded-2xl p-6 shadow-md border border-border">
                <h4 className="font-serif text-lg font-bold mb-2">Área de Atuação Geográfica</h4>
                <p className="text-muted-foreground text-sm">
                  Embora nossa sede seja em Porto Alegre/RS, atendemos clientes de todo o Brasil através de consultas virtuais e processos eletrônicos.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-10">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Envie uma mensagem</h3>
                <p className="text-muted-foreground mb-8">Preencha o formulário abaixo e retornaremos o mais breve possível.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} className="bg-muted/30 border-border/50 focus:bg-background h-12 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} className="bg-muted/30 border-border/50 focus:bg-background h-12 rounded-lg" />
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
                            <FormLabel>Telefone / WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} className="bg-muted/30 border-border/50 focus:bg-background h-12 rounded-lg" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Como podemos ajudar?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Descreva brevemente o seu caso..." 
                              className="min-h-[150px] bg-muted/30 border-border/50 focus:bg-background rounded-lg resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all">
                      Enviar Mensagem <Send size={18} className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
