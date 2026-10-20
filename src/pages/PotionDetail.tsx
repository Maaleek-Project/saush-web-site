import { Link, Navigate } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import DevisModal from "@/components/DevisModal";
import Reveal from "@/components/site/Reveal";
import { CtaBand, SectionHeader } from "@/components/site/blocks";
import { cases, potions, type Potion } from "@/data/site";
import { cn } from "@/lib/utils";

/** Correspondance potion → service présélectionné dans le formulaire de devis */
const serviceFor: Record<string, string> = {
  identite: "Identité visuelle",
  strategie: "Stratégie & plan de com'",
  digital: "Site web / application",
  diagnostic: "Diagnostic / audit",
};

const PotionDetail = ({ slug }: { slug: Potion["slug"] }) => {
  const potion = potions.find((p) => p.slug === slug);
  if (!potion) return <Navigate to="/potions" replace />;

  const index = potions.indexOf(potion);
  const next = potions[(index + 1) % potions.length];
  const preselect = [serviceFor[potion.slug]];
  const featured = cases[index % cases.length];

  return (
    <Layout darkHero title={`Potion ${potion.name}`} description={`${potion.promise} ${potion.intro}`}>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-lime-bright/15 blur-[140px]" />
        <div className="container relative grid gap-12 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-7">
            <Reveal>
              <Link to="/potions" className="eyebrow eyebrow-light hover:text-paper">Potion {potion.number} · {potion.name}</Link>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="display-xl mt-8">
                {potion.promise.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="serif-accent text-lime-bright">{potion.promise.split(" ").slice(-1)}</span>
              </h1>
            </Reveal>
            <Reveal delay={200} className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-paper/70">
              <p>{potion.intro}</p>
              <p className="text-paper">{potion.pitch}</p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <DevisModal defaultServices={preselect}>
                <button className="btn btn-lime">
                  {potion.cta} <ArrowUpRight className="h-4 w-4" />
                </button>
              </DevisModal>
              {potion.slug !== "diagnostic" && (
                <Link to="/potions/diagnostic" className="btn btn-outline-light">Diagnostic gratuit</Link>
              )}
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img src={potion.image} alt="" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ce que contient la potion */}
      <section className="py-24 sm:py-36">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="La composition"
              title={<>Ce que contient <span className="serif-accent">la potion.</span></>}
            />
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:col-span-8">
            {potion.includes.map((inc, i) => (
              <Reveal
                key={inc.title}
                delay={(i % 2) * 100}
                className={cn("bg-paper p-8", i === potion.includes.length - 1 && i % 2 === 0 && "sm:col-span-2")}
              >
                <span className="font-display text-sm font-semibold text-lime-deep">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{inc.title}</h3>
                <p className="mt-2 text-ink-muted">{inc.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="bg-lime-bright py-24 sm:py-32">
        <div className="container">
          <SectionHeader eyebrow="Pourquoi c'est essentiel" title={<>Ce que cela change <span className="serif-accent">pour vous.</span></>} className="[&_.eyebrow]:text-ink" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {potion.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="border-t-2 border-ink pt-6">
                <h3 className="font-display text-2xl font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-ink/75">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processus + livrables */}
      <section className="py-24 sm:py-36">
        <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeader eyebrow="Le processus" title={<>Étape <span className="serif-accent">par étape.</span></>} />
            <ol>
              {potion.process.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 80} className="flex gap-6 border-t border-ink/10 py-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-lime-bright">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-ink-muted">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="h-fit rounded-[2rem] bg-ink p-8 text-paper sm:p-12">
            <span className="eyebrow eyebrow-light">Livrables</span>
            <h2 className="mt-5 font-display text-3xl font-semibold">Ce que vous recevez</h2>
            <ul className="mt-8 space-y-4">
              {potion.deliverables.map((d) => (
                <li key={d} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-lime-bright" />
                  <span className="text-paper/85">{d}</span>
                </li>
              ))}
            </ul>
            <DevisModal defaultServices={preselect}>
              <button className="btn btn-lime mt-10 w-full">
                {potion.cta} <ArrowUpRight className="h-4 w-4" />
              </button>
            </DevisModal>
          </Reveal>
        </div>
      </section>

      {/* Exemple de projet */}
      <section className="bg-paper-deep/60 py-24">
        <div className="container">
          <Reveal className="grid items-center gap-10 lg:grid-cols-2">
            <div className="aspect-[16/11] overflow-hidden rounded-[2rem]">
              <img src={featured.image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Cas client · {featured.sector}</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{featured.title}</h2>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">Le défi</dt>
                  <dd className="mt-1 text-lg text-ink">{featured.challenge}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">Le résultat</dt>
                  <dd className="mt-1 text-lg text-ink">{featured.outcome}</dd>
                </div>
              </dl>
              <Link to="/realisations" className="btn btn-outline mt-8">Toutes nos réalisations</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Potion suivante */}
      <section className="py-20">
        <div className="container">
          <Link to={`/potions/${next.slug}`} className="group flex flex-col gap-4 border-y border-ink/10 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">Potion suivante</p>
              <p className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink transition-colors group-hover:text-lime-deep sm:text-7xl">
                {next.name}
              </p>
            </div>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/15 transition-all group-hover:bg-ink group-hover:text-paper">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand defaultServices={preselect} />
    </Layout>
  );
};

export default PotionDetail;
