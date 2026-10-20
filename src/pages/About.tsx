import Layout from "@/components/Layout";
import Reveal from "@/components/site/Reveal";
import { ArrowLink, CtaBand, PageHero, SectionHeader } from "@/components/site/blocks";
import { company, images, method, stats, values } from "@/data/site";
import collectif from "@/assets/photos/collectif.jpg";
import portrait from "@/assets/photos/portrait.jpg";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <Layout title="L'agence" description="Découvrez SAUSH, laboratoire de co-créativité basé à Abidjan depuis 2018 : notre vision, notre méthode et nos valeurs.">
      <PageHero
        eyebrow="L'agence"
        title={<>Le laboratoire de la <span className="serif-accent text-lime-deep">co-créativité.</span></>}
        intro="Nous croyons qu'une marque africaine forte ne se contente pas d'exister : elle doit marquer les esprits. Notre formule&nbsp;? La créativité, sublimée par la technologie."
      />

      {/* Image large */}
      <section className="container">
        <Reveal className="aspect-[16/9] overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
          <img src={collectif} alt="Une équipe de créatifs réunie" className="h-full w-full object-cover object-[50%_30%]" />
        </Reveal>
      </section>

      {/* Vision */}
      <section className="py-24 sm:py-36">
        <div className="container grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Notre vision</span>
            <h2 className="display-md mt-5 text-ink">
              Nous ne sommes pas une <span className="serif-accent">agence classique.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-7">
            <p>
              Fondée à {company.city} en {company.founded}, SAUSH est née d'une conviction : les entreprises africaines
              méritent une communication à la hauteur de leurs ambitions. Créative, exigeante et pensée pour leurs publics.
            </p>
            <p>
              Nous travaillons comme un laboratoire. Chaque idée y est testée, mélangée, affinée jusqu'à trouver la
              formule juste. Et chaque projet réunit une équipe dédiée — stratèges, designers, storytellers, experts
              digitaux — autour d'un seul objectif : transformer vos ambitions en résultats concrets.
            </p>
            <p className="font-display text-2xl font-medium leading-snug text-ink">
              Un projet, une équipe dédiée. Et vous au centre de la table.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="grain bg-ink py-24 text-paper sm:py-36">
        <div className="container">
          <SectionHeader
            light
            eyebrow="Nos valeurs"
            title={<>Ce qui guide <span className="serif-accent text-lime-bright">chacune de nos créations.</span></>}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 120} className="rounded-[1.5rem] border border-paper/10 p-8 sm:p-10">
                <span className="font-display text-sm font-semibold text-lime-bright">0{i + 1}</span>
                <h3 className="mt-6 font-display text-3xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-paper/60">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-24 sm:py-36">
        <div className="container grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img src={portrait} alt="Portrait d'une professionnelle tenant un ordinateur portable" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-56 overflow-hidden rounded-2xl border-4 border-paper sm:block lg:-right-10">
              <img src={images.nuancier} alt="" className="aspect-square w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Notre méthode"
              title={<>Comment nous <span className="serif-accent">travaillons.</span></>}
              intro="Une démarche claire, qui laisse toute sa place à l'imagination sans jamais perdre de vue vos objectifs."
            />
            <ol className="space-y-0">
              {method.map((m, i) => (
                <Reveal as="li" key={m.title} delay={i * 80} className="flex gap-6 border-t border-ink/10 py-6">
                  <span className="font-display text-lg font-semibold text-lime-deep">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{m.title}</h3>
                    <p className="mt-1 text-ink-muted">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="bg-paper-deep/60 py-20">
        <div className="container grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={cn("px-2 sm:px-6", i > 0 && "lg:border-l lg:border-ink/10")}>
              <p className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                {s.value}
                <span className="text-lime-deep">{s.suffix}</span>
              </p>
              <p className="mt-2 text-ink-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rejoindre */}
      <section className="py-24">
        <div className="container flex flex-col items-start justify-between gap-6 border-b border-ink/10 pb-16 md:flex-row md:items-end">
          <Reveal>
            <h2 className="display-md text-ink">
              Envie de rejoindre <span className="serif-accent">le labo</span>&nbsp;?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-ink-muted">
              Nous cherchons en permanence des talents curieux, exigeants et passionnés.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ArrowLink to="/carriere">Voir les offres</ArrowLink>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default About;
