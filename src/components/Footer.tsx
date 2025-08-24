import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import DevisModal from "@/components/DevisModal";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                SAUSH
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Le laboratoire de la co-créativité. Nous transformons vos idées en émotions qui marquent.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <span className="text-lg">📧</span>
              </Button>
              <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <span className="text-lg">📱</span>
              </Button>
              <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <span className="text-lg">🌐</span>
              </Button>
            </div>
          </div>

          {/* Nos Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Nos Potions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/potions/identite" className="text-muted-foreground hover:text-primary transition-colors">
                  🔮 Potion Identité
                </Link>
              </li>
              <li>
                <Link to="/potions/strategie" className="text-muted-foreground hover:text-primary transition-colors">
                  🔮 Potion Stratégie
                </Link>
              </li>
              <li>
                <Link to="/potions/digital" className="text-muted-foreground hover:text-primary transition-colors">
                  🔮 Potion Digital
                </Link>
              </li>
              <li>
                <Link to="/potions/diagnostic" className="text-muted-foreground hover:text-primary transition-colors">
                  🔮 Diagnostic Alchimique
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/packs" className="text-muted-foreground hover:text-secondary transition-colors">
                  Nos Packs
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-muted-foreground hover:text-secondary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-secondary transition-colors">
                  Blog / Labo créatif
                </Link> 
              </li>
              <li>
               { /* <Link to="/carriere" className="text-muted-foreground hover:text-secondary transition-colors">
                  Carrière
                </Link> */ }
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                { /* <DevisModal>
                  <button className="text-muted-foreground hover:text-secondary transition-colors text-left">
                    Devis gratuit
                  </button>
                </DevisModal>  */}
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Commencer l'alchimie</h4>
            <Card className="bg-gradient-primary border-none">
               <CardContent className="p-6 text-center space-y-4">
                 <p className="text-primary-foreground font-medium">
                   Prêt à transformer votre communication ?
                 </p>
                 <DevisModal>
                   <Button 
                     className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-magical"
                   >
                     Devis gratuit 🔮
                   </Button>
                 </DevisModal>
               </CardContent>
            </Card>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground text-sm">
                © 2025 SAUSH. Tous droits réservés.
              </p>
            </div>

            {/* Magical Elements */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Créé avec</span>
              <span className="text-accent animate-pulse">✨</span>
              <span className="text-xs text-muted-foreground">alchimie créative</span>
            </div>

            {/* Links */}
            <div className="flex space-x-6 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 right-10 w-8 h-8 gradient-gold rounded-full opacity-20 float-animation"></div>
      <div className="absolute bottom-32 left-10 w-6 h-6 gradient-primary rounded-full opacity-30 float-animation" style={{animationDelay: '2s'}}></div>
    </footer>
  );
};

export default Footer;
