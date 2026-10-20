import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logoSaush from "@/assets/logo-saush.png";
import { company, potions, telLink, whatsappLink } from "@/data/site";
import { SocialLinks } from "@/components/site/SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="grain bg-ink text-paper">
      <div className="container pt-20 pb-10">
        {/* Grand appel final */}
        <div className="flex flex-col gap-10 border-b border-paper/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg max-w-3xl">
            Une idée en tête&nbsp;?{" "}
            <span className="serif-accent text-lime-bright">Mettons-la en fusion.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${company.email}`} className="btn btn-lime">
              {company.email} <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={whatsappLink("Bonjour SAUSH, j'aimerais parler d'un projet.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <img src={logoSaush} alt="SAUSH" className="h-12 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">
              Laboratoire de co-créativité basé à {company.city}. Nous créons des marques africaines qui marquent les esprits.
            </p>
            <SocialLinks variant="dark" />
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">Nos potions</h3>
            <ul className="space-y-3">
              {potions.map((p) => (
                <li key={p.slug}>
                  <Link to={`/potions/${p.slug}`} className="link-underline text-paper/80 hover:text-paper">
                    Potion {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/packs" className="link-underline text-paper/80 hover:text-paper">Packs & tarifs</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">L'agence</h3>
            <ul className="space-y-3">
              {[
                { label: "À propos", path: "/about" },
                { label: "Réalisations", path: "/realisations" },
                { label: "Le Labo", path: "/blog" },
                { label: "Carrières", path: "/carriere" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="link-underline text-paper/80 hover:text-paper">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">Nous trouver</h3>
            <address className="space-y-3 not-italic text-paper/80">
              <p>{company.address}</p>
              {company.phones.map((p) => (
                <a key={p} href={telLink(p)} className="link-underline block w-fit hover:text-paper">{p}</a>
              ))}
              <p className="text-sm text-paper/50">{company.hours}</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {company.legalName}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Mentions légales", path: "/mentions-legales" },
              { label: "Confidentialité", path: "/politique-confidentialite" },
              { label: "CGU", path: "/cgu" },
              { label: "CGS", path: "/cgs" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="hover:text-paper">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
