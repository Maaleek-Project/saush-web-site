import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  /** La page commence par une section sombre : la navigation passe en clair. */
  darkHero?: boolean;
};

const Layout = ({ children, title, description, darkHero = false }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  const fullTitle = title ? `${title} — SAUSH` : "SAUSH — Laboratoire de co-créativité · Agence de communication à Abidjan";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <div className="flex min-h-screen flex-col bg-paper">
        <Navigation darkHero={darkHero} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
