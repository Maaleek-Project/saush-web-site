import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Digital = () => {
  const services = [
    {
      icon: "💻",
      title: "Sites web & applications",
      description: "Créations digitales qui convertissent",
      features: ["Sites vitrines optimisés", "E-commerce performants", "Landing pages", "Applications mobiles"]
    },
    {
      icon: "🔍", 
      title: "SEO & référencement",
      description: "Apparaître avant vos concurrents sur Google",
      features: ["Audit SEO complet", "Optimisation technique", "Contenu optimisé", "Netlinking qualifié"]
    },
    {
      icon: "✉️",
      title: "Newsletters & emailings", 
      description: "Fidéliser et convertir par l'email",
      features: ["Templates personnalisés", "Automatisations", "Segmentation avancée", "A/B testing"]
    },
    {
      icon: "📱",
      title: "Contenus réseaux sociaux",
      description: "Visuels et vidéos qui engagent",
      features: ["Visuels sur-mesure", "Stories créatives", "Vidéos courtes", "Calendrier éditorial"]
    },
    {
      icon: "🎥",
      title: "Productions vidéo",
      description: "Storytelling digital qui marque",
      features: ["Capsules produits", "Publicités digitales", "Motion design", "Lives & webinaires"]
    }
  ];

  const platforms = [
    { name: "Google", description: "SEO & Ads", icon: "🔍" },
    { name: "Instagram", description: "Visuels & Stories", icon: "📸" },
    { name: "Facebook", description: "Community & Ads", icon: "👥" },
    { name: "TikTok", description: "Vidéos virales", icon: "🎵" },
    { name: "LinkedIn", description: "B2B & Networking", icon: "💼" },
    { name: "YouTube", description: "Contenus longs", icon: "📺" },
  ];

  const stats = [
    { number: "85%", label: "des achats commencent par Google" },
    { number: "3,8M", label: "de recherches Google par minute" },
    { number: "4,7H", label: "temps moyen sur les réseaux/jour" },
    { number: "73%", label: "des consommateurs suivent des marques" },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-accent">Potion Digital</h2>
                  <p className="text-muted-foreground">Présence alchimique</p>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                ✨ Exister là où vos clients{" "}
                <span className="gradient-potion bg-clip-text text-transparent">
                  vous cherchent
                </span>
              </h1>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-lg font-medium text-destructive mb-2">
                  ⚠️ Vos clients ne vous cherchent plus dans les pages jaunes.
                </p>
                <p className="text-muted-foreground">
                  Ils vous cherchent sur Google, Instagram, Facebook, TikTok, LinkedIn...
                  Si vous n'y êtes pas, vos concurrents prennent votre place.
                </p>
              </div>
              
              <p className="text-lg text-foreground">
                Chez SAUSH, nous transformons votre présence digitale en un levier de visibilité et de ventes.
                Notre mission : faire de vous une référence en ligne, avec une image cohérente et une communication qui attire naturellement vos clients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-potion text-primary-foreground hover:shadow-magical transition-magical text-lg px-8 py-6"
                >
                  Développer ma présence digitale 💻
                </Button>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-magical text-lg px-8 py-6"
                  >
                    Audit digital gratuit 🔍
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Platforms Grid */}
              <Card className="bg-card/50 border-border p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Où vos clients vous cherchent</h3>
                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="text-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-magical">
                      <div className="text-2xl mb-1">{platform.icon}</div>
                      <p className="text-sm font-medium">{platform.name}</p>
                      <p className="text-xs text-muted-foreground">{platform.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Stats */}
              <Card className="bg-gradient-potion text-primary-foreground p-6">
                <h3 className="text-lg font-bold mb-4">📊 Chiffres clés du digital</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <p className="text-xs text-primary-foreground/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🚀 Ce que contient la Potion Digital
            </h2>
            <p className="text-lg text-muted-foreground">
              Tous les outils pour dominer votre marché digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardHeader>
                  <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2 text-sm">
                        <span className="text-accent">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Essential */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ❤️ Pourquoi c'est essentiel ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Vos clients vous googlisent</h3>
              <p className="text-muted-foreground">
                Avant d'acheter, 85% des consommateurs cherchent sur Google. Soyez visible !
              </p>
            </Card>

            <Card className="text-center p-8 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-20 h-20 gradient-gold rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Présence = confiance</h3>
              <p className="text-muted-foreground">
                Une présence digitale forte inspire confiance et crédibilité auprès de vos prospects.
              </p>
            </Card>

            <Card className="text-center p-8 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-20 h-20 gradient-potion rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent">Contenus = ventes</h3>
              <p className="text-muted-foreground">
                Des contenus bien pensés créent engagement, visibilité et génèrent des ventes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Transformation Process */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ⚙️ Processus de transformation digitale
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <Badge className="mb-3 gradient-primary text-primary-foreground">Étape 1</Badge>
              <h3 className="font-bold mb-2">Audit digital</h3>
              <p className="text-sm text-muted-foreground">
                Analyse de votre présence actuelle et de celle de vos concurrents
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <Badge className="mb-3 gradient-gold text-secondary-foreground">Étape 2</Badge>
              <h3 className="font-bold mb-2">Stratégie digitale</h3>
              <p className="text-sm text-muted-foreground">
                Définition des plateformes prioritaires et du plan d'action
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <Badge className="mb-3 gradient-potion text-primary-foreground">Étape 3</Badge>
              <h3 className="font-bold mb-2">Création & déploiement</h3>
              <p className="text-sm text-muted-foreground">
                Développement des outils et lancement des campagnes
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <Badge className="mb-3 gradient-primary text-primary-foreground">Étape 4</Badge>
              <h3 className="font-bold mb-2">Optimisation continue</h3>
              <p className="text-sm text-muted-foreground">
                Suivi des performances et ajustements pour maximiser le ROI
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              📈 Résultats typiques de nos clients
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-gradient-primary text-primary-foreground">
              <div className="text-4xl font-bold mb-2">+250%</div>
              <p className="text-sm">Trafic web moyen</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-gold text-secondary-foreground">
              <div className="text-4xl font-bold mb-2">+400%</div>
              <p className="text-sm">Engagement réseaux sociaux</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-potion text-primary-foreground">
              <div className="text-4xl font-bold mb-2">+180%</div>
              <p className="text-sm">Génération de leads</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-primary text-primary-foreground">
              <div className="text-4xl font-bold mb-2">ROI x3</div>
              <p className="text-sm">Retour sur investissement</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-potion text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Prêt à conquérir le digital ?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Développez votre présence digitale dès maintenant et transformez 
              chaque clic en opportunité de business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-magical text-lg px-12 py-6"
              >
                Développer ma présence digitale 💻
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-magical text-lg px-12 py-6"
                >
                  Audit digital gratuit 🔍
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Digital;