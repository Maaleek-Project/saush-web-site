import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import DevisModal from "@/components/DevisModal";
import logoSaush from "@/assets/logo-saush.png";
import { potions } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Agence", path: "/about" },
  { name: "Potions", path: "/potions", dropdown: true },
  { name: "Packs", path: "/packs" },
  { name: "Réalisations", path: "/realisations" },
  { name: "Le Labo", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navigation = ({ darkHero = false }: { darkHero?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Texte clair tant qu'on est en haut d'une page à hero sombre
  const light = darkHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-paper/90 backdrop-blur-xl border-b border-ink/10" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="SAUSH — Accueil">
          <img src={logoSaush} alt="SAUSH" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <div key={item.path} className="group relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors",
                    light ? "text-paper/80 hover:text-paper" : "text-ink/70 hover:text-ink",
                    isActive && (light ? "text-paper" : "text-ink"),
                  )
                }
              >
                {item.name}
                {item.dropdown && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
              </NavLink>

              {item.dropdown && (
                <div className="invisible absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-ink/10 bg-paper p-2 shadow-[0_24px_60px_-20px_hsl(var(--ink)/0.35)]">
                    {potions.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/potions/${p.slug}`}
                        className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-paper-deep"
                      >
                        <span className="mt-0.5 font-display text-sm font-semibold text-lime-deep">{p.number}</span>
                        <span>
                          <span className="block font-display font-semibold text-ink">Potion {p.name}</span>
                          <span className="block text-sm text-ink-muted">{p.short}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DevisModal>
            <button className={cn("btn btn-sm", light ? "btn-lime" : "btn-ink")}>
              Devis gratuit <ArrowUpRight className="h-4 w-4" />
            </button>
          </DevisModal>
        </div>

        <button
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            light ? "text-paper" : "text-ink",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-ink/10 bg-paper lg:hidden">
          <div className="container flex flex-col gap-1 py-6">
            <Link to="/" className="py-3 font-display text-3xl font-semibold text-ink">Accueil</Link>
            {navItems.map((item) => (
              <div key={item.path}>
                <Link to={item.path} className="block py-3 font-display text-3xl font-semibold text-ink">
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="mb-2 grid grid-cols-2 gap-2">
                    {potions.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/potions/${p.slug}`}
                        className="rounded-xl bg-paper-deep px-4 py-3 text-sm font-medium text-ink"
                      >
                        <span className="mr-2 text-lime-deep">{p.number}</span>
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <DevisModal>
                <button className="btn btn-ink w-full">
                  Demander un devis gratuit <ArrowUpRight className="h-4 w-4" />
                </button>
              </DevisModal>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
