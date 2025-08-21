import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Carriere = () => {
  const jobs = [
    {
      title: "Designer Graphique Senior",
      type: "CDI",
      location: "Abidjan",
      department: "Créatif",
      description: "Rejoignez notre équipe créative pour concevoir des identités visuelles qui marquent les esprits.",
      requirements: ["3+ ans d'expérience", "Maîtrise Adobe Creative Suite", "Portfolio solide", "Esprit créatif"],
      skills: ["Photoshop", "Illustrator", "InDesign", "Branding"],
    },
    {
      title: "Développeur Full-Stack",
      type: "CDI",
      location: "Abidjan / Remote",
      department: "Tech",
      description: "Développez des solutions digitales innovantes pour nos clients les plus ambitieux.",
      requirements: ["2+ ans d'expérience", "React/Node.js", "Base de données", "Esprit d'équipe"],
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      title: "Chargé(e) de Communication Digitale",
      type: "CDI",
      location: "Abidjan",
      department: "Digital",
      description: "Orchestrez les stratégies digitales de nos clients et maximisez leur présence en ligne.",
      requirements: ["1-2 ans d'expérience", "Réseaux sociaux", "Content marketing", "Analytique"],
      skills: ["Facebook Ads", "Google Analytics", "SEO", "Community Management"],
    },
    {
      title: "Stagiaire Créatif",
      type: "Stage",
      location: "Abidjan",
      department: "Créatif",
      description: "Intégrez notre labo créatif et participez à des projets inspirants dès votre premier jour.",
      requirements: ["Étudiant en design/marketing", "Motivation", "Curiosité", "Portfolio personnel"],
      skills: ["Adobe", "Créativité", "Apprentissage rapide"],
    },
  ];

  const benefits = [
    {
      icon: "🌱",
      title: "Croissance personnelle",
      description: "Formation continue et mentoring pour développer vos compétences",
    },
    {
      icon: "🎨",
      title: "Projets inspirants",
      description: "Travaillez sur des campagnes créatives pour des marques ambitieuses",
    },
    {
      icon: "⚡",
      title: "Environnement dynamique",
      description: "Une équipe jeune, passionnée et toujours en mouvement",
    },
    {
      icon: "📱",
      title: "Équipements modernes",
      description: "Les derniers outils et technologies pour exprimer votre talent",
    },
    {
      icon: "🏝️",
      title: "Équilibre vie/travail",
      description: "Horaires flexibles et congés pour recharger votre créativité",
    },
    {
      icon: "💰",
      title: "Rémunération attractive",
      description: "Salaires compétitifs et primes de performance",
    },
  ];

  const values = [
    {
      title: "🔮 Créativité sans limites",
      description: "Nous encourageons l'innovation et les idées audacieuses"
    },
    {
      title: "🤝 Collaboration alchimique", 
      description: "L'excellence naît de la synergie entre tous les talents"
    },
    {
      title: "🚀 Ambition partagée",
      description: "Nous visons l'excellence pour nos clients et notre équipe"
    },
    {
      title: "📚 Apprentissage continu",
      description: "Chaque jour est une opportunité de grandir et d'apprendre"
    },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            👩‍🚀 Pourquoi ne pas devenir{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Shaushiloï
            </span>
            ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Chez SAUSH, le travail est une aventure créative. Nous offrons un environnement 
            où la curiosité, l'innovation et la passion sont valorisées au quotidien.
          </p>
          <Button className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical text-lg px-8 py-4">
            Rejoindre l'aventure 🌍
          </Button>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              💼 Opportunités alchimiques
            </h2>
            <p className="text-lg text-muted-foreground">
              Rejoignez notre équipe de talents créatifs et digitaux
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={job.type === 'CDI' ? 'gradient-primary text-primary-foreground' : 'gradient-gold text-secondary-foreground'}>
                          {job.type}
                        </Badge>
                        <Badge variant="outline">
                          {job.department}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">📍 {job.location}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Profil recherché :</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-sm">
                          <span className="text-primary">•</span>
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Compétences clés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-potion text-primary-foreground hover:shadow-magical transition-magical">
                    Postuler maintenant ✨
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🧬 Notre culture d'entreprise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les valeurs qui nous animent et font de SAUSH un lieu unique pour s'épanouir
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
                <h3 className="font-bold mb-3 text-lg">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ✨ Pourquoi nous rejoindre ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Les avantages qui font la différence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 border-border hover:shadow-magical transition-magical">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="bg-gradient-gold text-secondary-foreground p-8">
              <h2 className="text-3xl font-bold mb-4">
                💡 Candidature spontanée
              </h2>
              <p className="text-lg mb-6 text-secondary-foreground/90">
                Vous ne trouvez pas le poste qui vous correspond mais vous êtes 
                convaincu que SAUSH est fait pour vous ? Envoyez-nous votre candidature !
              </p>
              <p className="mb-6 text-secondary-foreground/80">
                Nous sommes toujours à la recherche de talents passionnés : 
                développeurs, designers, marketeurs, commerciaux, gestionnaires de projet...
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                  Envoyer ma candidature 📧
                </Button>
                <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Voir tous nos postes 👀
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Des questions sur nos opportunités ?
            </h2>
            <Card className="bg-card/50 border-border p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary-foreground">👩‍💼</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold">Équipe RH SAUSH</h3>
                  <p className="text-sm text-muted-foreground">Nous sommes là pour vous accompagner</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                N'hésitez pas à nous contacter pour toute question concernant nos processus 
                de recrutement, nos postes ou notre culture d'entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical">
                  rh@saush.africa 📧
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-magical">
                  WhatsApp RH 💬
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carriere;