import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-laboratory.jpg";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                ✨ Nous ne faisons pas de{" "}
                <span className="gradient-gold bg-clip-text text-transparent">
                  communication
                </span>
                . Nous créons des{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  émotions qui marquent
                </span>
                .
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chez SAUSH, chaque projet devient une expérience alchimique unique. 
                Nous mélangeons créativité, stratégie et digital pour transformer 
                vos idées en résultats concrets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-8 py-6"
                >
                  <Link to="/devis" className="text-inherit">
                    Demandez votre potion créative 🔮
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-magical text-lg px-8 py-6"
                >
                  Découvrir nos potions
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Laboratoire créatif SAUSH" 
                className="rounded-2xl shadow-magical float-animation"
              />
              <div className="absolute -top-6 -right-6 w-20 h-20 gradient-gold rounded-full pulse-glow opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 gradient-primary rounded-full pulse-glow opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              L'alchimie qui transforme votre marque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trois ingrédients magiques pour une communication qui fait la différence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Plus de visibilité</h3>
                <p className="text-muted-foreground">
                  Faites-vous remarquer là où vos clients vous cherchent vraiment
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Messages qui convertissent</h3>
                <p className="text-muted-foreground">
                  Transformez chaque interaction en opportunité de vente
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Une marque mémorable</h3>
                <p className="text-muted-foreground">
                  Créez une identité unique que vos clients n'oublieront jamais
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                🧪 Le laboratoire de la{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  co-créativité
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez SAUSH, nous croyons qu'une marque africaine forte ne se contente pas d'exister : 
                elle doit marquer les esprits. Et pour y parvenir, une seule formule : la créativité, 
                sublimée par la technologie.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-sm text-primary-foreground">✅</span>
                  </div>
                  <p className="text-foreground">Une équipe créative & digitale 100% dédiée</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-sm text-primary-foreground">✅</span>
                  </div>
                  <p className="text-foreground">+5 ans d'expérience en communication créative</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-sm text-primary-foreground">✅</span>
                  </div>
                  <p className="text-foreground">Des résultats mesurables et un suivi personnalisé</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/about">
                  <Button className="gradient-gold text-secondary-foreground hover:shadow-gold transition-magical">
                    Découvrir notre ADN ⚗️
                  </Button>
                </Link>
                <Link to="/potions">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-magical">
                    Voir nos potions 🔮
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-primary text-primary-foreground p-6">
                <h3 className="text-2xl font-bold mb-4">Notre ADN</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">⚗️ Créativité Chimique</span>
                    <span className="text-xl font-bold">50%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                    <div className="gradient-gold h-2 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">⚙️ Techniques Réactives</span>
                    <span className="text-xl font-bold">50%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                    <div className="gradient-gold h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Prêt à transformer votre{" "}
              <span className="gradient-potion bg-clip-text text-transparent">
                communication
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Chaque grande marque commence par une première conversation. 
              Parlons de votre projet et trouvons la potion parfaite.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/devis">
                  <Button 
                    size="lg" 
                    className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-12 py-6"
                  >
                    Commencer l'alchimie 🔮
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

export default Index;
