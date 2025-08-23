import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Diagnostic = () => {
  const auditAreas = [
    {
      icon: "🔍",
      title: "Audit complet communication",
      description: "Analyse de votre communication actuelle",
      details: ["Print & supports physiques", "Digital & réseaux sociaux", "Branding & identité visuelle", "Messages & positionnement"]
    },
    {
      icon: "🌐",
      title: "Veille de marque",
      description: "Comment vous êtes perçu en ligne",
      details: ["Réputation digitale", "Avis clients & commentaires", "Mentions sur le web", "Positionnement vs concurrents"]
    },
    {
      icon: "📊",
      title: "Reporting détaillé",
      description: "Chiffres, analyses et insights clairs",
      details: ["Performance actuelle", "Points forts identifiés", "Faiblesses détectées", "Benchmarks sectoriels"]
    },
    {
      icon: "🎯",
      title: "Recommandations concrètes",
      description: "Actions immédiates pour améliorer",
      details: ["Quick wins à implémenter", "Stratégie à moyen terme", "Investissements prioritaires", "Planning de déploiement"]
    }
  ];

  const commonIssues = [
    {
      issue: "Communication incohérente",
      description: "Messages différents selon les supports",
      solution: "Harmonisation de l'identité et des messages",
      impact: "Confusion clients et perte de crédibilité"
    },
    {
      issue: "Présence digital inexistante",
      description: "Pas de site web ou réseaux sociaux",
      solution: "Stratégie digitale adaptée à votre secteur",
      impact: "Clients qui vont chez la concurrence"
    },
    {
      issue: "Budget mal utilisé",
      description: "Investissements sans retour mesurable",
      solution: "Réallocation budget vers canaux performants",
      impact: "ROI communication multiplié par 3"
    },
    {
      issue: "Message pas clair",
      description: "Clients ne comprennent pas votre valeur",
      solution: "Repositionnement et storytelling",
      impact: "Conversion prospects améliorée de +150%"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Collecte d'informations",
      duration: "2-3 jours",
      description: "Nous analysons tous vos supports de communication existants"
    },
    {
      step: "2", 
      title: "Analyse concurrentielle",
      duration: "1-2 jours",
      description: "Étude de votre positionnement face à vos concurrents directs"
    },
    {
      step: "3",
      title: "Audit digital approfondi",
      duration: "2 jours", 
      description: "Analyse de votre présence en ligne et e-réputation"
    },
    {
      step: "4",
      title: "Synthèse & recommandations",
      duration: "1-2 jours",
      description: "Rapport complet avec plan d'action priorisé"
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
                  <h2 className="text-xl font-semibold text-primary">Potion Diagnostic</h2>
                  <p className="text-muted-foreground">Analyse alchimique</p>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                ✨ Un regard{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  neuf
                </span>
                {" "}sur votre communication
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Votre marque communique déjà.
                  Mais la question est : est-ce que vos messages atteignent vraiment vos clients ?
                </p>
                
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-lg font-medium text-destructive mb-2">
                    ⚠️ Le problème que nous observons souvent
                  </p>
                  <p className="text-muted-foreground">
                    Beaucoup d'entreprises dépensent du temps et de l'argent en communication... 
                    sans obtenir les résultats espérés.
                  </p>
                </div>
                
                <p className="text-lg text-foreground">
                  Chez SAUSH, nous vous offrons un regard extérieur, critique mais bienveillant, 
                  pour identifier ce qui fonctionne, ce qui bloque et ce qui doit être transformé.
                </p>
                
                <p className="text-lg text-primary font-medium">
                  C'est notre alchimie : révéler les forces cachées de votre communication 
                  et éliminer les anti-créatifs qui freinent votre croissance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-8 py-6"
                >
                  Faire mon diagnostic 🔍
                </Button>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-magical text-lg px-8 py-6"
                  >
                    C'est gratuit ! Commencer maintenant
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-primary text-primary-foreground p-8 shadow-magical">
                <h3 className="text-2xl font-bold mb-6">🚀 Ce que contient le Diagnostic</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">🔍</span>
                    <div>
                      <p className="font-medium">Audit complet</p>
                      <p className="text-sm text-primary-foreground/80">Print, digital, réseaux sociaux, branding</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">🌐</span>
                    <div>
                      <p className="font-medium">Veille de marque</p>
                      <p className="text-sm text-primary-foreground/80">Comment vous êtes perçu sur le net</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">📊</span>
                    <div>
                      <p className="font-medium">Reporting détaillé</p>
                      <p className="text-sm text-primary-foreground/80">Chiffres, analyses et insights clairs</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xl mt-1">🎯</span>
                    <div>
                      <p className="font-medium">Recommandations concrètes</p>
                      <p className="text-sm text-primary-foreground/80">Actions immédiates pour améliorer</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-primary-foreground/20 text-center">
                  <Badge className="bg-primary-foreground text-primary">
                    ⭐ 100% GRATUIT
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Areas Detail */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🔍 Zones d'analyse de votre diagnostic
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous passons au crible tous les aspects de votre communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {auditAreas.map((area, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 gradient-potion rounded-xl flex items-center justify-center">
                      <span className="text-xl">{area.icon}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">
                        {area.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {area.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center space-x-2 text-sm">
                        <span className="text-primary">•</span>
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

      {/* Common Issues */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ⚠️ Problèmes fréquents que nous détectons
            </h2>
            <p className="text-lg text-muted-foreground">
              Et comment nous les résolvons pour transformer votre communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commonIssues.map((item, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-destructive/20 text-destructive rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-destructive">{item.issue}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground pl-13">
                      {item.description}
                    </p>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary mb-1">💡 Notre solution :</p>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                    
                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-secondary mb-1">📈 Impact typique :</p>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ⚙️ Processus de diagnostic (7-10 jours)
            </h2>
            <p className="text-lg text-muted-foreground">
              Notre méthodologie éprouvée pour un diagnostic complet
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 border-border relative">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                
                <Badge className="mb-3 gradient-gold text-secondary-foreground text-xs">
                  {step.duration}
                </Badge>
                
                <h3 className="font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                
                {/* Connection arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary"></div>
                    <div className="w-0 h-0 border-l-[6px] border-l-primary border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
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
                <span className="text-3xl text-primary-foreground">👁️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Regard extérieur</h3>
              <p className="text-muted-foreground">
                Un regard neuf révèle souvent des failles invisibles de l'intérieur
              </p>
            </Card>

            <Card className="text-center p-8 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-20 h-20 gradient-gold rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-secondary-foreground">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Économies garanties</h3>
              <p className="text-muted-foreground">
                Évitez les erreurs répétées et gagnez du temps et de l'argent
              </p>
            </Card>

            <Card className="text-center p-8 bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-20 h-20 gradient-potion rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-primary-foreground">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent">Stratégie claire</h3>
              <p className="text-muted-foreground">
                Avant de changer, il faut savoir où vous en êtes vraiment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Offrez-vous un regard neuf
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Commandez votre Diagnostic Alchimique GRATUIT et optimisez 
              votre communication pour des résultats mesurables.
            </p>
            
            <div className="bg-primary-foreground/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">🎁 Offre spéciale</h3>
              <p className="text-primary-foreground/90">
                Diagnostic complet GRATUIT + consultation de 30min pour analyser vos résultats
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-magical text-lg px-12 py-6"
              >
                Diagnostic gratuit maintenant 🔍
              </Button>
              <Link to="/potions">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-magical text-lg px-12 py-6"
                >
                  Voir toutes nos potions 🔮
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-primary-foreground/70">
              ⏱️ Diagnostic livré sous 7-10 jours • 🔒 Confidentialité garantie • 💯 Sans engagement
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostic;