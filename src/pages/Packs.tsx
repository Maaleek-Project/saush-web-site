import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Packs = () => {
  const packs = [
    {
      id: 1,
      name: "Pack Starter",
      subtitle: "Idéal pour lancement",
      price: "150.000 FCFA",
      popular: false,
      description: "Pour les entrepreneurs, startups et associations qui veulent poser les bases de leur image.",
      features: [
        "Logo + charte graphique simplifiée",
        "Naming & storytelling de base", 
        "Mini-site vitrine (one page)",
        "5 visuels réseaux sociaux",
        "Campagne Facebook 15 jours",
      ],
      gradient: "gradient-gold",
      cta: "Je lance mon image 🚀",
    },
    {
      id: 2,
      name: "Pack Croissance",
      subtitle: "Idéal PME",
      price: "500.000 FCFA", 
      popular: true,
      description: "Pour les entreprises qui veulent se faire remarquer et gagner en visibilité.",
      features: [
        "Identité visuelle complète",
        "Site web professionnel (5 pages) optimisé SEO",
        "Campagne réseaux sociaux (10 visuels + calendrier)",
        "1 vidéo promotionnelle courte",
        "Relations presse locales",
        "Campagne Facebook 20 jours",
      ],
      gradient: "gradient-primary",
      cta: "Je booste ma notoriété ✨",
    },
    {
      id: 3,
      name: "Pack Suprême",
      subtitle: "Idéal grandes marques",
      price: "1.000.000 FCFA",
      popular: false,
      description: "Pour les marques établies qui veulent dominer leur marché avec une stratégie 360°.",
      features: [
        "Rebranding complet (audit + refonte identité)",
        "Site e-commerce ou application mobile",
        "Stratégie digitale complète (SEO + Ads + réseaux)",
        "Campagne d'influence avec ambassadeurs",
        "Vidéo storytelling & motion design",
        "Relations presse nationales & internationales",
        "Campagne Facebook 30 jours",
      ],
      gradient: "gradient-potion",
      cta: "Je passe à la vitesse supérieure 💎",
    },
  ];

  const socialPacks = [
    {
      name: "Pack Starter Social",
      price: "199€/mois",
      description: "Idéal pour se lancer et exister en ligne",
      features: [
        "8 publications/mois (visuels + textes optimisés)",
        "Gestion de 1 réseau social (Instagram ou Facebook)",
        "Réponses aux messages/commentaires basiques",
        "Rapport mensuel simple",
      ],
      result: "Une page active et crédible qui attire vos premiers abonnés",
    },
    {
      name: "Pack Croissance Social", 
      price: "399€/mois",
      description: "Idéal pour augmenter visibilité & engagement",
      popular: true,
      features: [
        "16 publications/mois (visuels + textes + hashtags optimisés)",
        "Gestion de 2 réseaux (Instagram, Facebook, LinkedIn, TikTok)",
        "4 stories/semaine",
        "Animation communauté complète",
        "Rapport analytique détaillé + recommandations",
      ],
      result: "Plus d'abonnés, plus d'interactions, plus de notoriété",
    },
    {
      name: "Pack Premium Social",
      price: "699€/mois", 
      description: "Idéal pour marques ambitieuses & e-commerçants",
      features: [
        "25 publications/mois (contenus variés : visuels, vidéos, carrousels)",
        "Gestion de 3 réseaux sociaux",
        "Stories quotidiennes créatives & interactives",
        "Campagne publicitaire Facebook/Instagram Ads incluse",
        "Animation active de la communauté",
        "Reporting avancé avec plan d'action",
      ],
      result: "Une marque omniprésente, engageante et qui convertit",
    },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            ⭐ Choisissez la potion qui correspond à vos{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              ambitions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Nous savons qu'il n'est pas toujours facile de définir son besoin exact. 
            C'est pourquoi nous avons préparé des packs alchimiques clairs et sur-mesure, 
            adaptés à chaque étape de votre croissance.
          </p>
        </div>
      </section>

      {/* E-Commerce Packs */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🚀 Packs E-Commerce & Identité
            </h2>
            <p className="text-lg text-muted-foreground">
              De la startup à la grande marque, trouvez votre formule magique
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packs.map((pack) => (
              <Card key={pack.id} className={`relative bg-card/50 border-border hover:shadow-magical transition-magical ${pack.popular ? 'ring-2 ring-primary' : ''}`}>
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary text-primary-foreground px-4 py-2">
                      ⭐ Plus populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 ${pack.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">🥂</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {pack.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {pack.subtitle}
                  </p>
                  <div className="text-3xl font-bold text-primary mt-4">
                    à partir de {pack.price}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {pack.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Contenu :</h4>
                    <ul className="space-y-2">
                      {pack.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full ${pack.gradient} text-primary-foreground hover:shadow-magical transition-magical`}>
                    {pack.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Packs */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              📱 Packs Gestion Réseaux Sociaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Arrêtez de poster dans le vide. Confiez vos réseaux sociaux à des experts 
              et transformez vos abonnés en clients.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {socialPacks.map((pack, index) => (
              <Card key={index} className={`bg-card/50 border-border hover:shadow-magical transition-magical ${pack.popular ? 'ring-2 ring-primary' : ''}`}>
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary text-primary-foreground px-4 py-2">
                      🌟 Recommandé
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {pack.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {pack.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {pack.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <ul className="space-y-2">
                      {pack.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">👉 Résultat :</h4>
                    <p className="text-sm text-muted-foreground">{pack.result}</p>
                  </div>

                  <Button className="w-full gradient-primary text-primary-foreground hover:shadow-magical transition-magical">
                    Choisir ce pack 📱
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Option */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground p-8">
              <h2 className="text-3xl font-bold mb-4">
                🔍 Vous hésitez encore ?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Commencez par un Diagnostic Alchimique pour savoir où vous en êtes 
                et quelles potions vous conviennent le mieux.
              </p>
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-magical text-lg px-8 py-4"
              >
                Diagnostic gratuit 🔍
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🧪 Pourquoi ce pack ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="font-bold mb-2">Gain de temps</h3>
              <p className="text-sm text-muted-foreground">
                Vous vous concentrez sur votre business, on gère votre image
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="font-bold mb-2">Contenu créatif</h3>
              <p className="text-sm text-muted-foreground">
                Chaque post pensé pour capter l'attention et refléter votre identité
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-12 h-12 gradient-potion rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="font-bold mb-2">Stratégie & performance</h3>
              <p className="text-sm text-muted-foreground">
                Pas de posts au hasard, chaque contenu sert vos objectifs
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">❤️</span>
              </div>
              <h3 className="font-bold mb-2">Relation client</h3>
              <p className="text-sm text-muted-foreground">
                Une communauté engagée et fidèle
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Packs;