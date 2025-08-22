import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Devis = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            💎 Demandez votre{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              devis gratuit
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Obtenez une estimation personnalisée pour votre projet. 
            Nos experts analysent vos besoins et vous proposent la solution parfaite.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/80 border-border shadow-magical">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    ✨ Formulaire de devis personnalisé
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
                    Plus vous nous en dites, plus nous pouvons vous aider précisément
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-8">
                    {/* Personal Info */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        👤 Vos informations
                      </h3>
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
                      
                      <div className="grid md:grid-cols-2 gap-4">
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
                          <Label htmlFor="phone">Téléphone *</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            placeholder="+225 XX XX XX XX XX"
                            className="bg-input border-border focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise / Organisation</Label>
                        <Input 
                          id="company"
                          placeholder="Nom de votre entreprise"
                          className="bg-input border-border focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        🎯 Votre projet
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Type de projet *</Label>
                        <Select>
                          <SelectTrigger className="bg-input border-border">
                            <SelectValue placeholder="Sélectionnez le type de projet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup / Lancement</SelectItem>
                            <SelectItem value="rebrand">Refonte / Rebranding</SelectItem>
                            <SelectItem value="growth">Croissance / Expansion</SelectItem>
                            <SelectItem value="digital">Présence digitale</SelectItem>
                            <SelectItem value="campaign">Campagne marketing</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget approximatif *</Label>
                        <Select>
                          <SelectTrigger className="bg-input border-border">
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">50.000 - 200.000 FCFA</SelectItem>
                            <SelectItem value="medium">200.000 - 500.000 FCFA</SelectItem>
                            <SelectItem value="large">500.000 - 1.000.000 FCFA</SelectItem>
                            <SelectItem value="enterprise">+ de 1.000.000 FCFA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Délai souhaité *</Label>
                        <Select>
                          <SelectTrigger className="bg-input border-border">
                            <SelectValue placeholder="Dans combien de temps ?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (moins de 2 semaines)</SelectItem>
                            <SelectItem value="month">Dans le mois</SelectItem>
                            <SelectItem value="quarter">Dans les 3 mois</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description détaillée du projet *</Label>
                        <Textarea 
                          id="description"
                          placeholder="Décrivez votre projet, vos objectifs, votre cible, vos attentes..."
                          rows={6}
                          className="bg-input border-border focus:ring-primary resize-none"
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        🔮 Services souhaités
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="identite" />
                            <Label htmlFor="identite" className="text-sm font-medium">
                              🎨 Identité visuelle (logo, charte graphique)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="website" />
                            <Label htmlFor="website" className="text-sm font-medium">
                              💻 Site web / Application
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="social" />
                            <Label htmlFor="social" className="text-sm font-medium">
                              📱 Gestion réseaux sociaux
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="seo" />
                            <Label htmlFor="seo" className="text-sm font-medium">
                              🔍 SEO / Référencement
                            </Label>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="strategy" />
                            <Label htmlFor="strategy" className="text-sm font-medium">
                              📊 Stratégie marketing
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="video" />
                            <Label htmlFor="video" className="text-sm font-medium">
                              🎥 Production vidéo
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="ads" />
                            <Label htmlFor="ads" className="text-sm font-medium">
                              🎯 Publicité digitale
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="print" />
                            <Label htmlFor="print" className="text-sm font-medium">
                              📰 Communication print
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        💡 Informations complémentaires
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="inspiration">Avez-vous des références ou inspirations ?</Label>
                        <Textarea 
                          id="inspiration"
                          placeholder="Sites web, marques, styles qui vous plaisent..."
                          rows={3}
                          className="bg-input border-border focus:ring-primary resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="competitors">Qui sont vos principaux concurrents ?</Label>
                        <Input 
                          id="competitors"
                          placeholder="Noms des entreprises concurrentes"
                          className="bg-input border-border focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground">
                        J'accepte d'être recontacté(e) par l'équipe SAUSH pour discuter de mon projet *
                      </Label>
                    </div>
                    
                    <Button className="w-full gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg py-6">
                      Envoyer ma demande de devis 🚀
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      * Champs obligatoires. Devis gratuit et sans engagement. Réponse sous 24h.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Process */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">⚡ Votre devis en 3 étapes</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <p className="text-sm">Vous remplissez ce formulaire</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <p className="text-sm">Nous analysons votre projet sous 24h</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <p className="text-sm">Vous recevez votre devis personnalisé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-card/80 border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-accent">🎯 Pourquoi demander un devis ?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-sm text-muted-foreground">Estimation précise et transparente</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-sm text-muted-foreground">Solutions adaptées à votre budget</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-sm text-muted-foreground">Conseils gratuits d'experts</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-sm text-muted-foreground">Aucun engagement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-card/80 border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-secondary">📞 Besoin d'aide ?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Notre équipe est là pour vous accompagner dans votre démarche.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium">Email:</span> infos@saush.africa</p>
                    <p className="text-sm"><span className="font-medium">Tél:</span> +225 XX XX XX XX XX</p>
                  </div>
                  <Button className="w-full mt-4 gradient-gold text-secondary-foreground hover:shadow-gold">
                    WhatsApp direct 💬
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Devis;