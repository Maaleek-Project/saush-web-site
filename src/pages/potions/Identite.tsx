import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Identite = () => {
  const processSteps = [
    {
      step: "1",
      title: "Audit & Immersion",
      description: "Nous analysons votre secteur, vos concurrents et définissons votre positionnement unique",
      icon: "🔍"
    },
    {
      step: "2", 
      title: "Concept Créatif",
      description: "Brainstorming créatif et développement de pistes visuelles alignées avec votre ADN",
      icon: "💡"
    },
    {
      step: "3",
      title: "Design & Déclinaisons",
      description: "Création du logo, charte graphique et déclinaisons sur tous vos supports",
      icon: "🎨"
    },
    {
      step: "4",
      title: "Validation & Livraison",
      description: "Présentation, ajustements et livraison de tous les fichiers dans tous les formats",
      icon: "✨"
    }
  ];

  const deliverables = [
    { item: "Logo principal + variantes", description: "Versions couleur, monochrome, simplifiée" },
    { item: "Charte graphique complète", description: "Couleurs, typographies, règles d'usage" },
    { item: "Identité appliquée", description: "Carte de visite, en-tête, signature mail" },
    { item: "Guidelines brand book", description: "Manuel d'utilisation de votre identité" },
    { item: "Fichiers sources", description: "Tous formats (AI, PNG, PDF, SVG, etc.)" },
  ];

  const examples = [
    {
      company: "TechStart Africa",
      sector: "Technologie",
      challenge: "Créer une identité moderne pour une startup tech africaine",
      solution: "Logo dynamique, couleurs tech, typo futuriste",
      result: "Levée de fonds réussie, +300% de visibilité"
    },
    {
      company: "Cacao d'Or",
      sector: "Agroalimentaire", 
      challenge: "Valoriser l'origine africaine tout en visant l'export",
      solution: "Identité premium, codes couleurs chaleureux, storytelling",
      result: "Contrats export signés, reconnaissance marché local"
    }
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
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-primary">Potion Identité</h2>
                  <p className="text-muted-foreground">Transformation alchimique</p>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                ✨ Devenez{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  inoubliable
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Votre identité de marque est bien plus qu'un logo ou un joli design. 
                C'est la première impression que vous laissez à vos clients.
                Et on le sait : une première impression ne se vit qu'une seule fois.
              </p>
              
              <p className="text-lg text-foreground">
                Chez SAUSH, nous transformons vos idées en une identité unique, cohérente et mémorable.
                Notre mission : faire en sorte que vos clients vous reconnaissent, vous préfèrent et ne vous oublient jamais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-8 py-6"
                >
                  Créer mon identité ✨
                </Button>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-magical text-lg px-8 py-6"
                  >
                    Diagnostic gratuit 🔍
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-primary text-primary-foreground p-8 shadow-magical">
                <h3 className="text-2xl font-bold mb-6">🚀 Ce que contient la Potion Identité</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">🎨</span>
                    <div>
                      <p className="font-medium">Création de logo</p>
                      <p className="text-sm text-primary-foreground/80">Simple, fort et reconnaissable</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">📖</span>
                    <div>
                      <p className="font-medium">Charte graphique</p>
                      <p className="text-sm text-primary-foreground/80">Couleurs, typographies et univers visuel</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">📝</span>
                    <div>
                      <p className="font-medium">Naming</p>
                      <p className="text-sm text-primary-foreground/80">Un nom qui résonne et colle à votre ADN</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">📚</span>
                    <div>
                      <p className="font-medium">Storytelling</p>
                      <p className="text-sm text-primary-foreground/80">L'art de donner une âme à votre marque</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">💻</span>
                    <div>
                      <p className="font-medium">Webdesign & UX</p>
                      <p className="text-sm text-primary-foreground/80">Vitrine digitale alignée avec votre image</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Essential Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ❤️ Pourquoi c'est{" "}
              <span className="gradient-gold bg-clip-text text-transparent">
                essentiel
              </span>
              ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✅</span>
              </div>
              <h3 className="font-bold mb-2">Marque claire</h3>
              <p className="text-sm text-muted-foreground">
                Une identité claire inspire confiance et crédibilité
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-secondary-foreground">✅</span>
              </div>
              <h3 className="font-bold mb-2">Design attractif</h3>
              <p className="text-sm text-muted-foreground">
                Un design fort attire naturellement vos clients
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✅</span>
              </div>
              <h3 className="font-bold mb-2">Cohérence mémorable</h3>
              <p className="text-sm text-muted-foreground">
                Un langage cohérent vous rend mémorable
              </p>
            </Card>

            <Card className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✅</span>
              </div>
              <h3 className="font-bold mb-2">Meilleur vendeur</h3>
              <p className="text-sm text-muted-foreground">
                Votre identité devient votre meilleur vendeur
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ⚙️ Comment ça marche ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre processus alchimique en 4 étapes pour créer votre identité parfaite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-secondary-foreground">{step.step}</span>
                </div>
                <h3 className="font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              📦 Ce que vous recevez
            </h2>
            <p className="text-lg text-muted-foreground">
              Livrables complets pour déployer votre nouvelle identité partout
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{deliverable.item}</h4>
                        <p className="text-sm text-muted-foreground">{deliverable.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              💼 Exemples de transformations
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez comment nos clients ont révolutionné leur image
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 gradient-potion rounded-xl flex items-center justify-center">
                      <span className="text-xl">🏢</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{example.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{example.sector}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">🎯 Défi :</h4>
                    <p className="text-sm text-muted-foreground">{example.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">⚗️ Solution :</h4>
                    <p className="text-sm text-muted-foreground">{example.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-1">🚀 Résultat :</h4>
                    <p className="text-sm text-foreground font-medium">{example.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              👉 Prêt à devenir inoubliable ?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Commandez votre Potion Identité dès maintenant et transformez 
              votre marque en véritable aimant à clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-magical text-lg px-12 py-6"
              >
                Commander ma potion ✨
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-magical text-lg px-12 py-6"
                >
                  Diagnostic gratuit 🔍
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Identite;