import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Realisations = () => {
  const testimonials = [
    {
      company: "TechStart Africa",
      sector: "Technologie",
      testimonial: "Grâce à SAUSH, nous avons doublé notre visibilité digitale en 3 mois.",
      author: "Marie Kouassi, DG",
      results: ["Visibilité +200%", "Ventes +150%", "Engagement +300%"],
      services: ["Identité complète", "Stratégie digitale", "Site web"],
    },
    {
      company: "Cacao d'Or",
      sector: "Agroalimentaire", 
      testimonial: "L'équipe SAUSH a transformé notre image de marque. Nous sommes maintenant reconnus comme leaders sur notre marché.",
      author: "Ibrahim Diallo, Fondateur",
      results: ["Notoriété +400%", "Export +250%", "Partenaires +180%"],
      services: ["Rebranding", "Relations presse", "Campagne 360°"],
    },
    {
      company: "École Digitale",
      sector: "Éducation",
      testimonial: "Une communication créative qui nous a permis d'attirer 3x plus d'étudiants cette année.",
      author: "Fatou Bamba, Directrice",
      results: ["Inscriptions +300%", "Trafic web +500%", "Réseaux +600%"],
      services: ["Digital complet", "Réseaux sociaux", "Campagnes Ads"],
    },
  ];

  const portfolio = [
    {
      title: "Identité visuelle TechStart",
      category: "Branding",
      description: "Création d'une identité moderne pour une startup tech",
      image: "🎨",
    },
    {
      title: "Campagne Cacao d'Or",
      category: "Stratégie 360°",
      description: "Stratégie complète pour conquérir l'export",
      image: "📱",
    },
    {
      title: "Site École Digitale",
      category: "Digital",
      description: "Plateforme web interactive et moderne",
      image: "💻",
    },
    {
      title: "App Mobile Commerce",
      category: "Développement",
      description: "Application e-commerce native",
      image: "📲",
    },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            🔥 La preuve par la{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              créativité
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Nous avons accompagné plusieurs entreprises dans leur transformation créative. 
            Voici quelques-unes de nos réactions chimiques les plus réussies.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              💬 Ce que disent nos clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Des résultats concrets, des transformations mesurables
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-xl text-primary-foreground">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.company}</h3>
                      <p className="text-sm text-muted-foreground">{item.sector}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{item.testimonial}"
                  </blockquote>
                  
                  <p className="font-medium text-sm mb-4">- {item.author}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Résultats obtenus :</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.results.map((result, rIndex) => (
                        <div key={rIndex} className="flex items-center space-x-2">
                          <span className="text-secondary">📈</span>
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-3">
                      <p className="text-xs text-muted-foreground">Services utilisés :</p>
                      <p className="text-sm text-accent">{item.services.join(" • ")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🎨 Portfolio sélectionné
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez quelques-uns de nos projets les plus créatifs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-magical">
                    <span className="text-3xl">{project.image}</span>
                  </div>
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary mb-2">{project.category}</p>
                  <p className="text-xs text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical">
              Voir tout notre portfolio 👀
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              📊 Nos résultats en chiffres
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gradient-primary text-primary-foreground">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-sm">Projets réalisés</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-gold text-secondary-foreground">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-sm">Clients satisfaits</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-potion text-primary-foreground">
              <div className="text-4xl font-bold mb-2">+300%</div>
              <p className="text-sm">Visibilité moyenne</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-primary text-primary-foreground">
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-sm">Années d'expérience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Prêt à rejoindre nos{" "}
              <span className="gradient-potion bg-clip-text text-transparent">
                success stories
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Votre projet mérite le même niveau d'excellence. 
              Découvrons ensemble quelle potion transformera votre marque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-12 py-6"
                >
                  Commencer mon projet 🚀
                </Button>
              </Link>
              <Link to="/potions">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-magical text-lg px-12 py-6"
                >
                  Découvrir nos potions 🔮
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;