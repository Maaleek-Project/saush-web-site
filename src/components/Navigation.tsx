import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Nos Potions", path: "/potions", hasDropdown: true },
    { name: "Nos Packs", path: "/packs" },
    { name: "Réalisations", path: "/realisations" },
    { name: "Blog", path: "/blog" },
    { name: "Carrière", path: "/carriere" },
    { name: "Contact", path: "/contact" },
  ];

  const potionItems = [
    { name: "🔮 Identité", path: "/potions/identite" },
    { name: "🔮 Stratégie", path: "/potions/strategie" },
    { name: "🔮 Digital", path: "/potions/digital" },
    { name: "🔮 Diagnostic", path: "/potions/diagnostic" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold gradient-gold bg-clip-text text-transparent">
              SAUSH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-magical hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-magical opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-magical">
                    <div className="py-2">
                      {potionItems.map((potion) => (
                        <Link
                          key={potion.name}
                          to={potion.path}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-magical"
                        >
                          {potion.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-primary text-primary-foreground hover:shadow-magical transition-magical">
              Demandez votre potion 🔮
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-magical"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4">
                    {potionItems.map((potion) => (
                      <Link
                        key={potion.name}
                        to={potion.path}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-magical"
                        onClick={() => setIsOpen(false)}
                      >
                        {potion.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full gradient-primary text-primary-foreground">
                Demandez votre potion 🔮
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;