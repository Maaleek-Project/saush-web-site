import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Potions = () => {
  const potions = [
    {
      id: 1,
      icon: "🔮",
      title: "Potion Identité",
      subtitle: "Devenez inoubliable",
      description: "Votre identité de marque est bien plus qu'un logo ou un joli design. C'est la première impression que vous laissez à vos clients.",
      features: [
        "🎨 Création de logo simple, fort et reconnaissable",
        "📖 Charte graphique complète",
        "📝 Naming & storytelling",
        "💻 Webdesign & UX aligné",
      ],
      gradient: "gradient-primary",
    },
    {
      id: 2,
      icon: "🔮",
      title: "Potion Stratégie", 
      subtitle: "Faites rayonner votre marque",
      description: "Sans stratégie claire et percutante, votre message risque de se perdre dans le bruit. Nous construisons une stratégie sur-mesure.",
      features: [
        "📰 Relations presse ciblées",
        "🎯 Campagnes 360° cohérentes",
        "📝 Conception rédactionnelle",
        "📊 Plan de communication structuré",
      ],
      gradient: "gradient-gold",
    },
    {
      id: 3,
      icon: "🔮",
      title: "Potion Digital",
      subtitle: "Exister où vos clients vous cherchent",
      description: "Vos clients vous cherchent sur Google, Instagram, Facebook... Si vous n'y êtes pas, vos concurrents prennent votre place.",
      features: [
        "💻 Sites web & applications",
        "🔍 SEO & référencement",
        "📱 Contenus réseaux sociaux",
        "🎥 Productions vidéo engageantes",
      ],
      gradient: "gradient-potion",
    },
    {
      id: 4,
      icon: "🔮",
      title: "Potion Diagnostic",
      subtitle: "Un regard neuf sur votre communication",
      description: "Beaucoup d'entreprises dépensent en communication sans obtenir les résultats espérés. Nous révélons vos forces cachées.",
      features: [
        "🔍 Audit complet de communication",
        "🌐 Veille de votre marque",
        "📊 Reporting détaillé",
        "🎯 Recommandations concrètes",
      ],
      gradient: "gradient-primary",
    },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            🔮 Nos{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Potions Créatives
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Chaque potion est conçue pour réveiller une facette unique de votre marque. 
            Découvrez l'alchimie parfaite pour transformer votre communication.
          </p>
        </div>
      </section>

      {/* Potions Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {potions.map((potion) => (
              <Card key={potion.id} className="bg-card/50 border-border hover:shadow-magical transition-magical group">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${potion.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-magical`}>
                    <span className="text-4xl">{potion.icon}</span>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold">
                    {potion.title}
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold">
                    ✨ {potion.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {potion.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">🚀 Ce que contient cette potion :</h4>
                    <ul className="space-y-2">
                      {potion.features.map((feature, index) => (
                        <li key={index} className="text-muted-foreground text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">❤️ Pourquoi c'est essentiel ?</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>✅ Une marque claire inspire confiance</p>
                        <p>✅ Un design fort attire naturellement vos clients</p>
                        <p>✅ Votre identité devient votre meilleur vendeur</p>
                      </div>
                    </div>
                    
                    <Button className={`w-full ${potion.gradient} text-primary-foreground hover:shadow-magical transition-magical`}>
                      Commander cette potion ✨
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ⚙️ Comment ça marche ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un processus alchimique simple en 4 étapes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="font-bold mb-2">Choisissez votre potion</h3>
              <p className="text-sm text-muted-foreground">
                Parcourez nos packs et sélectionnez celui qui correspond à vos besoins
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="font-bold mb-2">Passez commande</h3>
              <p className="text-sm text-muted-foreground">
                Un clic suffit ! Vous recevez un mail de bienvenue
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="font-bold mb-2">On vous contacte</h3>
              <p className="text-sm text-muted-foreground">
                Sous 24h, notre équipe comprend vos attentes et collecte vos infos
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="font-bold mb-2">Livraison & suivi</h3>
              <p className="text-sm text-muted-foreground">
                Nous créons, vous validez. Suivi continu selon l'offre choisie
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Quelle potion va{" "}
              <span className="gradient-potion bg-clip-text text-transparent">
                transformer votre marque
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Si vous hésitez encore, commencez par un diagnostic gratuit pour découvrir 
              quelles potions vous conviennent le mieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-12 py-6"
                >
                  Diagnostic gratuit 🔍
                </Button>
              </Link>
              <Link to="/packs">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-magical text-lg px-12 py-6"
                >
                  Voir nos packs ⭐
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Potions;