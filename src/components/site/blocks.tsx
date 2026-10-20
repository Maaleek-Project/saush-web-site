import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import DevisModal from "@/components/DevisModal";
import Reveal from "@/components/site/Reveal";
import { whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

/* En-tête de page standard (fond clair) */
export const PageHero = ({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) => (
  <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
    <div className="pattern-dots pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-60 [mask-image:linear-gradient(to_left,black,transparent)] lg:block" />
    <div className="container relative">
      <Reveal className="max-w-4xl space-y-7">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-xl text-ink">{title}</h1>
        {intro && <p className="max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">{intro}</p>}
        {children}
      </Reveal>
    </div>
  </section>
);

/* Titre de section */
export const SectionHeader = ({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) => (
  <Reveal className={cn("mb-14 max-w-3xl space-y-5", align === "center" && "mx-auto text-center", className)}>
    <span className={cn("eyebrow", light && "eyebrow-light", align === "center" && "justify-center")}>{eyebrow}</span>
    <h2 className={cn("display-md", light ? "text-paper" : "text-ink")}>{title}</h2>
    {intro && <p className={cn("text-lg leading-relaxed", light ? "text-paper/65" : "text-ink-muted")}>{intro}</p>}
  </Reveal>
);

/* Bandeau d'appel à l'action */
export const CtaBand = ({
  title = (
    <>
      Prêt à faire de votre marque <span className="serif-accent text-lime-deep">une évidence</span>&nbsp;?
    </>
  ),
  text = "Chaque grande marque commence par une conversation. Parlons de vos ambitions et trouvons ensemble la bonne formule.",
  defaultServices,
}: {
  title?: ReactNode;
  text?: string;
  defaultServices?: string[];
}) => (
  <section className="py-20 sm:py-28">
    <div className="container">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-lime-bright px-6 py-14 sm:px-14 sm:py-20">
        <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            <h2 className="display-lg text-ink">{title}</h2>
            <p className="max-w-xl text-lg text-ink/75">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <DevisModal defaultServices={defaultServices}>
              <button className="btn btn-ink">
                Demander un devis gratuit <ArrowUpRight className="h-4 w-4" />
              </button>
            </DevisModal>
            <a
              href={whatsappLink("Bonjour SAUSH, j'aimerais parler d'un projet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* Lien fléché */
export const ArrowLink = ({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) => (
  <Link
    to={to}
    className={cn(
      "group inline-flex items-center gap-2 font-semibold",
      light ? "text-paper hover:text-lime-bright" : "text-ink hover:text-lime-deep",
    )}
  >
    <span className="link-underline">{children}</span>
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </Link>
);
