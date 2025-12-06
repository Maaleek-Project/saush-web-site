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
              <a href="https://www.instagram.com/saush_ci/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Button>
              </a>
              <a href="https://www.facebook.com/saushsarl" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Button>
              </a>
              <a href="https://ci.linkedin.com/showcase/saush-cr%C3%A9ativit%C3%A9" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Button>
              </a>
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
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link to="/politique-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgu" className="text-muted-foreground hover:text-primary transition-colors">
                CGU
              </Link>
              <Link to="/cgs" className="text-muted-foreground hover:text-primary transition-colors">
                CGS
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
