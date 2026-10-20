import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import DevisModal from "@/components/DevisModal";
import Reveal from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeader } from "@/components/site/blocks";
import { brandPacks, faq, socialPacks, type Pack } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const PackCard = ({ pack, services, delay }: { pack: Pack; services: string[]; delay: number }) => (
  <Reveal delay={delay} className="h-full">
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[1.75rem] border p-8 sm:p-10",
        pack.highlight ? "border-ink bg-ink text-paper" : "border-ink/10 bg-white text-ink",
      )}
    >
      {pack.highlight && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-lime-bright px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          Le plus choisi
        </span>
      )}
      <p className={cn("text-sm font-medium", pack.highlight ? "text-lime-bright" : "text-lime-deep")}>{pack.target}</p>
      <h3 className="mt-2 font-display text-3xl font-semibold">{pack.name}</h3>
      <p className={cn("mt-3", pack.highlight ? "text-paper/65" : "text-ink-muted")}>{pack.description}</p>

      <div className={cn("my-8 border-y py-6", pack.highlight ? "border-paper/10" : "border-ink/10")}>
        <p className="font-display text-5xl font-semibold tracking-tight">{pack.price}</p>
        <p className={cn("mt-1 text-sm", pack.highlight ? "text-paper/55" : "text-ink-muted")}>{pack.priceNote}</p>
      </div>

      <ul className="flex-1 space-y-3.5">
        {pack.features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check className={cn("mt-0.5 h-5 w-5 shrink-0", pack.highlight ? "text-lime-bright" : "text-lime-deep")} />
            <span className={pack.highlight ? "text-paper/85" : "text-ink/85"}>{f}</span>
          </li>
        ))}
      </ul>

      <DevisModal defaultServices={services}>
        <button className={cn("btn mt-10 w-full", pack.highlight ? "btn-lime" : "btn-ink")}>
          Choisir {pack.name} <ArrowUpRight className="h-4 w-4" />
        </button>
      </DevisModal>
    </article>
  </Reveal>
);

const Packs = () => {
  return (
    <Layout title="Packs & tarifs" description="Les packs SAUSH : identité, site web, réseaux sociaux. Des formules claires en FCFA pour chaque étape de votre croissance.">
      <PageHero
        eyebrow="Packs & tarifs"
        title={<>La bonne formule, <span className="serif-accent text-lime-deep">à chaque étape.</span></>}
        intro="Des packs clairs pour démarrer vite, et toujours la possibilité d'ajuster. Chaque projet commence par un échange gratuit pour valider vos besoins."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container">
          <SectionHeader
            eyebrow="Identité & présence"
            title={<>Packs <span className="serif-accent">marque.</span></>}
            intro="Identité, site web et premières campagnes : tout pour lancer ou relancer votre marque."
          />
          <div className="grid gap-6 pt-4 lg:grid-cols-3">
            {brandPacks.map((p, i) => (
              <PackCard key={p.name} pack={p} delay={i * 100} services={["Identité visuelle", "Site web / application"]} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-deep/60 py-24 sm:py-32">
        <div className="container">
          <SectionHeader
            eyebrow="Community management"
            title={<>Packs <span className="serif-accent">réseaux sociaux.</span></>}
            intro="Arrêtez de publier dans le vide. Confiez vos réseaux à des experts et transformez vos abonnés en clients — sans engagement de longue durée."
          />
          <div className="grid gap-6 pt-4 lg:grid-cols-3">
            {socialPacks.map((p, i) => (
              <PackCard key={p.name} pack={p} delay={i * 100} services={["Réseaux sociaux"]} />
            ))}
          </div>
        </div>
      </section>

      {/* Sur-mesure */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal className="grain grid items-center gap-10 overflow-hidden rounded-[2rem] bg-ink p-8 text-paper sm:p-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="eyebrow eyebrow-light">Sur-mesure</span>
              <h2 className="display-md mt-5">
                Aucun pack ne vous ressemble&nbsp;? <span className="serif-accent text-lime-bright">Composons le vôtre.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-paper/65">
                Chaque marque est unique. Nous assemblons les ingrédients dont vous avez réellement besoin, ni plus ni moins.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <DevisModal>
                <button className="btn btn-lime">Demander un devis sur-mesure <ArrowUpRight className="h-4 w-4" /></button>
              </DevisModal>
              <Link to="/potions/diagnostic" className="btn btn-outline-light">Commencer par un diagnostic</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Questions fréquentes" title={<>Bon à <span className="serif-accent">savoir.</span></>} />
          </div>
          <Reveal className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-ink/10">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`f-${i}`} className="border-ink/10">
                  <AccordionTrigger className="py-6 text-left font-display text-xl font-semibold text-ink hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-ink-muted">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-6 text-sm text-ink-muted">
              Prix indicatifs, donnés à titre « à partir de ». Le tarif final dépend du périmètre validé ensemble.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default Packs;
