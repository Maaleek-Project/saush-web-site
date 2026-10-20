import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeader } from "@/components/site/blocks";
import { method, potions } from "@/data/site";
import { cn } from "@/lib/utils";

const Potions = () => {
  return (
    <Layout title="Nos potions" description="Identité, Stratégie, Digital, Diagnostic : les quatre expertises de SAUSH pour faire rayonner votre marque.">
      <PageHero
        eyebrow="Nos potions"
        title={<>Quatre expertises, <span className="serif-accent text-lime-deep">une seule alchimie.</span></>}
        intro="Chaque potion est conçue pour réveiller une facette unique de votre marque. Combinez-les librement pour une communication cohérente de bout en bout."
      />

      <section className="pb-24 sm:pb-36">
        <div className="container space-y-6">
          {potions.map((p, i) => (
            <Reveal key={p.slug}>
              <Link
                to={`/potions/${p.slug}`}
                className="img-zoom group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white transition-colors hover:border-ink/30 lg:grid-cols-2"
              >
                <div className={cn("relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[440px]", i % 2 === 1 && "lg:order-2")}>
                  <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
                </div>
                <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-lime-deep">Potion {p.number}</span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">{p.name}</h2>
                    <p className="mt-2 font-serif text-2xl italic text-ink/80 sm:text-3xl">{p.promise}</p>
                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">{p.intro}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {p.includes.map((inc) => (
                      <li key={inc.title} className="rounded-full bg-paper-deep px-4 py-2 text-sm font-medium text-ink">
                        {inc.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain bg-ink py-24 text-paper sm:py-32">
        <div className="container">
          <SectionHeader
            light
            eyebrow="Comment ça marche"
            title={<>Un processus simple, <span className="serif-accent text-lime-bright">des résultats concrets.</span></>}
          />
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((m, i) => (
              <Reveal key={m.title} delay={i * 100} className="bg-ink p-8 sm:p-10">
                <span className="font-display text-6xl font-semibold text-lime-bright/90">0{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/60">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Vous hésitez&nbsp;? <span className="serif-accent text-lime-deep">Commencez par un diagnostic.</span></>}
        text="Un regard extérieur sur votre communication pour savoir exactement quelles potions vous seront les plus utiles."
        defaultServices={["Diagnostic / audit"]}
      />
    </Layout>
  );
};

export default Potions;
