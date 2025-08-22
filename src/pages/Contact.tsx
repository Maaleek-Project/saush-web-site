import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            📞 Un projet ? Une idée ?{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Parlons-en
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Chaque grande collaboration commence par une conversation. 
            Dites-nous ce que vous voulez accomplir et nous trouverons la potion adaptée.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 border-border shadow-magical">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  ✨ Formulaire magique
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input 
                        id="firstName"
                        placeholder="Votre prénom"
                        className="bg-input border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input 
                        id="lastName"
                        placeholder="Votre nom"
                        className="bg-input border-border focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone / WhatsApp</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+225 XX XX XX XX XX"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project">Votre projet en quelques lignes *</Label>
                    <Textarea 
                      id="project"
                      placeholder="Décrivez-nous votre projet, vos objectifs, vos besoins..."
                      rows={5}
                      className="bg-input border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Quelle potion vous intéresse ?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm">🔮 Identité</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm">🔮 Stratégie</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm">🔮 Digital</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm">🔮 Diagnostic</span>
                      </label>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg py-6">
                    Envoyer ma demande 🔮
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Nous vous répondrons sous 24h maximum.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">📲 Contact direct</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-sm text-primary-foreground">📧</span>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">infos@saush.africa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                        <span className="text-sm text-secondary-foreground">📞</span>
                      </div>
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-sm text-muted-foreground">+225 XX XX XX XX XX</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full gradient-gold text-secondary-foreground hover:shadow-gold transition-magical">
                        WhatsApp (clic direct) 💬
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">⚡ Notre processus express</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <p className="text-sm">Vous envoyez votre demande</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <p className="text-sm">Nous vous recontactons sous 24h</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <p className="text-sm">Échange pour comprendre vos besoins</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <p className="text-sm">Proposition personnalisée</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent">❓ Questions fréquentes</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm mb-1">Combien de temps pour une réponse ?</p>
                      <p className="text-xs text-muted-foreground">Maximum 24h, souvent dans la journée.</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Le devis est-il gratuit ?</p>
                      <p className="text-xs text-muted-foreground">Oui, totalement gratuit et sans engagement.</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Vous travaillez avec toutes les entreprises ?</p>
                      <p className="text-xs text-muted-foreground">Startups, PME, grandes marques... Nous nous adaptons à tous les projets.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à commencer l'{" "}
              <span className="gradient-potion bg-clip-text text-transparent">
                alchimie créative
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Que ce soit pour une question, un projet ou juste pour dire bonjour, 
              nous sommes là pour vous écouter et vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-8 py-6"
              >
                Diagnostic gratuit 🔍
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-magical text-lg px-8 py-6"
              >
                Voir nos réalisations 🔥
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;