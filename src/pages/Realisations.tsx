import Layout from "@/components/Layout";
import Reveal from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { cases, stats } from "@/data/site";
import { cn } from "@/lib/utils";

const Realisations = () => {
  return (
    <Layout title="Réalisations" description="Identités, campagnes, sites web : découvrez quelques projets menés par SAUSH avec des marques ivoiriennes et africaines.">
      <PageHero
        eyebrow="Réalisations"
        title={<>La preuve par <span className="serif-accent text-lime-deep">la créativité.</span></>}
        intro="Chaque projet est une collaboration. Voici quelques transformations menées main dans la main avec nos clients."
      />

      <section className="pb-12">
        <div className="container grid grid-cols-2 gap-y-10 border-y border-ink/10 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={cn("px-2 sm:px-6", i > 0 && "lg:border-l lg:border-ink/10")}>
              <p className="font-display text-5xl font-semibold tracking-tight text-ink">
                {s.value}
                <span className="text-lime-deep">{s.suffix}</span>
              </p>
              <p className="mt-2 text-ink-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container space-y-24 sm:space-y-32">
          {cases.map((c, i) => (
            <Reveal key={c.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={cn("img-zoom overflow-hidden rounded-[2rem] lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
                <img src={c.image} alt="" className="aspect-[4/3] w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-display font-semibold text-lime-deep">0{i + 1}</span>
                  <span className="h-px w-8 bg-ink/20" />
                  <span className="font-semibold uppercase tracking-[0.14em] text-ink-muted">{c.sector}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{c.title}</h2>
                <p className="mt-2 font-serif text-xl italic text-ink/70">{c.client}</p>

                <dl className="mt-8 space-y-6 border-t border-ink/10 pt-8">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">Le défi</dt>
                    <dd className="mt-1.5 text-ink">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">Notre approche</dt>
                    <dd className="mt-1.5 text-ink">{c.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">Le résultat</dt>
                    <dd className="mt-1.5 font-display text-xl font-medium text-ink">{c.outcome}</dd>
                  </div>
                </dl>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <li key={s} className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/80">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={<>Votre marque sera <span className="serif-accent text-lime-deep">la prochaine histoire.</span></>}
        text="Votre projet mérite le même niveau d'exigence. Découvrons ensemble la formule qui fera la différence."
      />
    </Layout>
  );
};

export default Realisations;
