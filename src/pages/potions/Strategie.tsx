import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Strategie = () => {
  const services = [
    {
      title: "Relations presse",
      description: "Faites parler de vous dans les médias qui comptent",
      details: ["Communiqués de presse", "Relations journalistes", "Interviews & reportages", "Veille médiatique"]
    },
    {
      title: "Campagnes 360°",
      description: "Présence cohérente sur tous les canaux",
      details: ["TV, radio, print", "Réseaux sociaux", "Affichage urbain", "Événementiel"]
    },
    {
      title: "Conception rédactionnelle",
      description: "Messages qui marquent les esprits",
      details: ["Slogans percutants", "Scripts publicitaires", "Contenus web", "Newsletters"]
    },
    {
      title: "Plan de communication",
      description: "Stratégie claire et structurée",
      details: ["Audit concurrentiel", "Calendrier éditorial", "Budget optimisé", "KPI mesurables"]
    },
    {
      title: "Achat média intelligent",
      description: "Investissement maîtrisé pour plus d'impact",
      details: ["Négociation espaces", "Ciblage précis", "Optimisation budgets", "Reporting ROI"]
    }
  ];

  const benefits = [
    {
      icon: "👀",
      title: "Plus de visibilité",
      description: "Votre marque sera vue partout où vos clients regardent"
    },
    {
      icon: "🧠",
      title: "Notoriété renforcée",
      description: "Vos clients entendront votre message plusieurs fois pour mieux mémoriser"
    },
    {
      icon: "📈",
      title: "Ventes augmentées", 
      description: "Une bonne stratégie = plus de visibilité = plus de ventes"
    }
  ];

  const caseStudy = {
    company: "Afri-Mode",
    sector: "Mode & Textile",
    challenge: "Faire connaître une nouvelle marque de mode africaine sur le marché international",
    strategy: "Stratégie 360° : défilés, influenceurs, médias spécialisés, réseaux sociaux",
    results: [
      "Présence dans 5 pays africains",
      "Collaboration avec 20+ influenceurs",
      "Coverage médiatique internationale",
      "Ventes x10 en 6 mois"
    ]
  };

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-secondary">Potion Stratégie</h2>
                  <p className="text-muted-foreground">Rayonnement alchimique</p>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                ✨ Faites{" "}
                <span className="gradient-gold bg-clip-text text-transparent">
                  rayonner
                </span>
                {" "}votre marque
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Avoir une identité, c'est bien.
                Mais sans stratégie claire et percutante, votre message risque de se perdre dans le bruit.
              </p>
              
              <p className="text-lg text-foreground">
                Chez SAUSH, nous construisons pour vous une stratégie de communication sur-mesure, 
                pensée pour que votre marque brille là où vos clients vous cherchent.
                Notre alchimie : créativité + méthode = un impact mesurable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-gold text-secondary-foreground hover:shadow-gold transition-magical text-lg px-8 py-6"
                >
                  Booster ma visibilité 🚀
                </Button>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-magical text-lg px-8 py-6"
                  >
                    Diagnostic gratuit 🔍
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-gold text-secondary-foreground p-8 shadow-gold">
                <h3 className="text-2xl font-bold mb-6">🚀 Ce que contient la Potion Stratégie</h3>
                <ul className="space-y-4">
                  {services.slice(0, 3).map((service, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-xl mt-1">📡</span>
                      <div>
                        <p className="font-medium">{service.title}</p>
                        <p className="text-sm text-secondary-foreground/80">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-secondary-foreground/20">
                  <p className="text-sm text-secondary-foreground/80">+ Plan média intelligent & reporting performance</p>
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
              📊 Services inclus dans cette potion
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center space-x-2">
                    <span className="text-2xl">📡</span>
                    <span>{service.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <span className="text-secondary">•</span>
                        <span className="text-muted-foreground">{detail}</span>
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
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 bg-card/50 border-border hover:shadow-magical transition-magical">
                <div className="w-20 h-20 gradient-potion rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              💼 Cas d'étude : Afri-Mode
            </h2>
            <p className="text-lg text-muted-foreground">
              Comment nous avons propulsé une marque de mode africaine sur la scène internationale
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-foreground text-primary rounded-xl flex items-center justify-center">
                      <span className="text-xl">👗</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-primary-foreground/80">{caseStudy.sector}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">🎯 Défi initial :</h4>
                      <p className="text-primary-foreground/90 text-sm">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">⚗️ Notre stratégie :</h4>
                      <p className="text-primary-foreground/90 text-sm">{caseStudy.strategy}</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">🚀 Résultats obtenus :</h4>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-primary-foreground/10 rounded-lg">
                        <div className="w-8 h-8 bg-primary-foreground text-primary rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ⚙️ Notre processus stratégique
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2">Audit & Analyse</h3>
              <p className="text-sm text-muted-foreground">
                Étude marché, concurrents et positionnement
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold mb-2">Stratégie créative</h3>
              <p className="text-sm text-muted-foreground">
                Définition messages clés et canaux prioritaires
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold mb-2">Déploiement</h3>
              <p className="text-sm text-muted-foreground">
                Lancement campagnes coordonnées sur tous canaux
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold mb-2">Optimisation</h3>
              <p className="text-sm text-muted-foreground">
                Suivi performance et ajustements en temps réel
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-gold text-secondary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Prêt à faire rayonner votre marque ?
            </h2>
            <p className="text-xl text-secondary-foreground/90">
              Commandez votre Potion Stratégie dès aujourd'hui et transformez 
              votre communication en véritable machine à visibilité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 transition-magical text-lg px-12 py-6"
              >
                Je lance ma potion 🔮
              </Button>
              <Link to="/packs">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-magical text-lg px-12 py-6"
                >
                  Voir nos packs ⭐
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategie;