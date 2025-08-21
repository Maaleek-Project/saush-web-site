import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const articles = [
    {
      title: "L'alchimie du branding en Afrique : créer une identité qui résonne",
      category: "Branding",
      date: "15 Déc 2024",
      readTime: "5 min",
      excerpt: "Comment les marques africaines peuvent-elles créer une identité visuelle qui honore leurs racines tout en parlant au monde ? Découvrez nos secrets d'alchimiste.",
      image: "🎨",
      featured: true,
    },
    {
      title: "Marketing digital : 7 erreurs qui tuent votre ROI",
      category: "Digital",
      date: "12 Déc 2024",
      readTime: "8 min",
      excerpt: "Les pièges les plus courants que nous observons chez nos clients et comment les éviter pour maximiser vos investissements digitaux.",
      image: "📱",
      featured: false,
    },
    {
      title: "Storytelling : l'art de donner une âme à votre marque",
      category: "Stratégie",
      date: "10 Déc 2024",
      readTime: "6 min",
      excerpt: "Pourquoi certaines marques marquent les esprits quand d'autres sont oubliées ? Tout est dans l'histoire que vous racontez.",
      image: "📖",
      featured: false,
    },
    {
      title: "Réseaux sociaux : de la communication à la conversion",
      category: "Social Media",
      date: "8 Déc 2024",
      readTime: "7 min",
      excerpt: "Comment transformer vos abonnés en clients ? Notre méthode éprouvée pour créer du contenu qui vend.",
      image: "🔗",
      featured: false,
    },
    {
      title: "Tendances créatives 2025 : ce qui va marquer l'année",
      category: "Tendances",
      date: "5 Déc 2024",
      readTime: "10 min",
      excerpt: "Les couleurs, typographies, animations et styles visuels qui vont dominer l'année prochaine. Prenez de l'avance !",
      image: "✨",
      featured: false,
    },
    {
      title: "E-commerce : optimiser son site pour vendre plus",
      category: "E-commerce",
      date: "3 Déc 2024",
      readTime: "9 min",
      excerpt: "UX/UI, tunnel de conversion, psychologie du consommateur... Les clés pour transformer votre site en machine à ventes.",
      image: "🛒",
      featured: false,
    },
  ];

  const categories = [
    { name: "Tous les articles", count: articles.length, active: true },
    { name: "Branding", count: 8, active: false },
    { name: "Digital", count: 12, active: false },
    { name: "Stratégie", count: 6, active: false },
    { name: "Tendances", count: 4, active: false },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            🧬 Le laboratoire des{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              idées créatives
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Nous partageons nos inspirations, analyses et tendances créatives 
            pour que votre marque reste toujours en avance sur son temps.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer transition-magical ${
                  category.active 
                    ? "gradient-primary text-primary-foreground" 
                    : "border-border hover:bg-muted"
                }`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.filter(article => article.featured).map((article, index) => (
        <section key={index} className="pb-20 px-4">
          <div className="container mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-primary-foreground text-primary w-fit mb-4">
                    ⭐ Article vedette
                  </Badge>
                  <CardTitle className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {article.title}
                  </CardTitle>
                  <p className="text-lg text-primary-foreground/90 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge variant="outline" className="border-primary-foreground text-primary-foreground">
                      {article.category}
                    </Badge>
                    <span className="text-sm">{article.date}</span>
                    <span className="text-sm">📖 {article.readTime}</span>
                  </div>
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-fit">
                    Lire l'article complet →
                  </Button>
                </CardContent>
                <div className="flex items-center justify-center p-8 lg:p-12">
                  <div className="w-48 h-48 bg-primary-foreground/20 rounded-3xl flex items-center justify-center">
                    <span className="text-8xl">{article.image}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Articles Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-magical transition-magical group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-magical">
                    <span className="text-3xl">{article.image}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-magical">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">📖 {article.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary hover:text-primary-foreground">
                      Lire →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gradient-gold text-secondary-foreground p-8">
              <h2 className="text-3xl font-bold mb-4">
                📬 Restez dans la boucle créative
              </h2>
              <p className="text-lg mb-6 text-secondary-foreground/90">
                Recevez nos derniers articles, tendances et secrets d'alchimistes 
                directement dans votre boîte mail. 1 mail par semaine, que du contenu premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder-secondary-foreground/60"
                />
                <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                  S'abonner ✨
                </Button>
              </div>
              <p className="text-sm text-secondary-foreground/70 mt-3">
                Pas de spam, désinscription en 1 clic
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Envie d'aller plus loin ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🔮</span>
              </div>
              <h3 className="font-bold mb-2">Découvrir nos potions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explorez nos services créatifs
              </p>
              <Button variant="outline" size="sm">
                Voir les potions
              </Button>
            </Card>

            <Card className="p-6 text-center bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-secondary-foreground">📞</span>
              </div>
              <h3 className="font-bold mb-2">Parlons de votre projet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Consultation créative gratuite
              </p>
              <Button variant="outline" size="sm">
                Nous contacter
              </Button>
            </Card>

            <Card className="p-6 text-center bg-card/50 border-border hover:shadow-magical transition-magical">
              <div className="w-16 h-16 gradient-potion rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🔥</span>
              </div>
              <h3 className="font-bold mb-2">Voir nos réalisations</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Portfolio et success stories
              </p>
              <Button variant="outline" size="sm">
                Portfolio
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;