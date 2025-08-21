import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            🧪 Le laboratoire de la{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              co-créativité
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Chez SAUSH, nous croyons qu'une marque africaine forte ne se contente pas d'exister : 
            elle doit marquer les esprits. Et pour y parvenir, une seule formule : la créativité, 
            sublimée par la technologie.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Nous ne sommes pas une{" "}
                <span className="gradient-gold bg-clip-text text-transparent">
                  agence classique
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous sommes un labo créatif, où chaque idée se mélange à une touche d'alchimie 
                pour donner naissance à des campagnes uniques.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">🔮 Un projet = Une équipe dédiée</h3>
                <p className="text-muted-foreground">
                  Nous réunissons une famille de talents : stratèges, designers, storytellers, 
                  digital experts pour transformer vos ambitions en résultats concrets.
                </p>
              </div>
            </div>
            <Card className="bg-gradient-primary text-primary-foreground p-8">
              <h3 className="text-2xl font-bold mb-6">Notre ADN Alchimique</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">⚗️ Créativité Chimique</span>
                    <span className="text-xl font-bold">50%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-3">
                    <div className="gradient-gold h-3 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-sm mt-2 text-primary-foreground/80">
                    Imagination, design, émotions
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">⚙️ Techniques Réactives</span>
                    <span className="text-xl font-bold">50%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-3">
                    <div className="gradient-gold h-3 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-sm mt-2 text-primary-foreground/80">
                    Digital, stratégie, performance
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🔮 Pourquoi choisir notre{" "}
              <span className="gradient-potion bg-clip-text text-transparent">
                alchimie créative
              </span>
              ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2 text-primary">Communiquer autrement</h3>
                <p className="text-sm text-muted-foreground">
                  Grâce à nos potions créatives uniques
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2 text-secondary">Expérience sur-mesure</h3>
                <p className="text-sm text-muted-foreground">
                  Une approche unique pour chaque projet
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 gradient-potion rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2 text-accent">Équipe dédiée</h3>
                <p className="text-sm text-muted-foreground">
                  100% passionnée et attentionnée
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-magical transition-magical">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2 text-primary">+5 ans d'expérience</h3>
                <p className="text-sm text-muted-foreground">
                  En communication créative
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Prêt à découvrir nos{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                potions créatives
              </span>
              ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/potions">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-12 py-6"
                >
                  Découvrez nos potions 🔮
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-magical text-lg px-12 py-6"
                >
                  Parlons de votre projet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;