import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Layout from "@/components/Layout";
import DevisModal from "@/components/DevisModal";
import Reveal from "@/components/site/Reveal";
import { ArrowLink, CtaBand, SectionHeader } from "@/components/site/blocks";
import { brandPacks, cases, company, expertises, images, method, potions, stats } from "@/data/site";
import abidjan from "@/assets/photos/abidjan.jpg";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <Layout darkHero description="SAUSH, laboratoire de co-créativité à Abidjan : identité de marque, stratégie de communication, digital et diagnostic pour les marques africaines ambitieuses.">
      {/* ───────── Hero ───────── */}
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-lime-bright/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-clay/20 blur-[140px]" />

        <div className="container relative grid gap-14 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:gap-10 lg:pb-28">
          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <span className="eyebrow eyebrow-light">Agence créative · {company.city}</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="display-xl mt-8">
                Des marques africaines qui{" "}
                <span className="serif-accent text-lime-bright">marquent</span> les esprits.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl">
                SAUSH est un laboratoire de co-créativité. Nous mêlons stratégie, design et digital pour faire de votre
                marque une évidence — auprès de vos clients, ici et ailleurs.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <DevisModal>
                <button className="btn btn-lime">
                  Demander un devis gratuit <ArrowUpRight className="h-4 w-4" />
                </button>
              </DevisModal>
              <Link to="/potions" className="btn btn-outline-light">
                Découvrir nos potions
              </Link>
            </Reveal>
          </div>

          <Reveal delay={250} className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src={images.cocreation}
                alt="Séance de co-création autour d'un ordinateur portable"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-paper p-5 text-ink shadow-2xl sm:-left-8 sm:right-auto sm:w-72">
              <p className="font-display text-4xl font-semibold tracking-tight">
                Depuis {company.founded}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                aux côtés des entrepreneurs, PME et grandes marques de Côte d'Ivoire.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="container relative hidden pb-10 lg:block">
          <a href="#manifeste" className="inline-flex items-center gap-2 text-sm text-paper/50 hover:text-paper">
            <ArrowDown className="h-4 w-4" /> Défiler
          </a>
        </div>

        {/* Bandeau d'expertises */}
        <div className="relative border-t border-paper/10 py-6">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...expertises, ...expertises].map((e, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-2xl font-medium text-paper/80 sm:text-3xl">
                {e}
                <span className="h-2 w-2 rounded-full bg-lime-bright" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Manifeste ───────── */}
      <section id="manifeste" className="py-24 sm:py-36">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <span className="eyebrow">Notre manifeste</span>
            </Reveal>
            <div className="lg:col-span-9">
              <Reveal>
                <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
                  Nous ne faisons pas de la communication.{" "}
                  <span className="text-ink/35">
                    Nous créons des <span className="serif-accent text-clay">émotions</span> qui marquent, et des marques qui durent.
                  </span>
                </p>
              </Reveal>
              <Reveal delay={150} className="mt-12 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2">
                <p className="text-lg leading-relaxed text-ink-muted">
                  Une marque africaine forte ne se contente pas d'exister : elle doit marquer les esprits. Pour y
                  parvenir, notre formule est simple — la créativité, sublimée par la technologie.
                </p>
                <p className="text-lg leading-relaxed text-ink-muted">
                  Chaque projet réunit une équipe dédiée de stratèges, designers, rédacteurs et experts digitaux. Et
                  vous. Car les meilleures idées naissent toujours à plusieurs.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Potions ───────── */}
      <section className="pb-24 sm:pb-36">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              className="mb-0"
              eyebrow="Nos potions"
              title={<>Quatre expertises, <span className="serif-accent">une seule alchimie.</span></>}
              intro="Chaque potion réveille une facette de votre marque. Prises seules ou combinées, elles forment une communication cohérente de bout en bout."
            />
            <Reveal><ArrowLink to="/potions">Toutes nos potions</ArrowLink></Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {potions.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 120}>
                <Link
                  to={`/potions/${p.slug}`}
                  className="img-zoom group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink p-7 text-paper sm:p-9"
                >
                  <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
                  <div className="absolute inset-x-7 top-7 flex items-center justify-between sm:inset-x-9 sm:top-9">
                    <span className="font-display text-sm font-semibold text-lime-bright">Potion {p.number}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 transition-all group-hover:border-lime-bright group-hover:bg-lime-bright group-hover:text-ink">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-4xl font-semibold sm:text-5xl">{p.name}</h3>
                    <p className="mt-2 font-serif text-2xl italic text-paper/90">{p.promise}</p>
                    <p className="mt-4 max-w-md text-paper/65">{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Méthode + ADN ───────── */}
      <section className="grain bg-ink py-24 text-paper sm:py-36">
        <div className="container">
          <SectionHeader
            light
            eyebrow="Notre formule"
            title={<>La co-créativité, <span className="serif-accent text-lime-bright">en quatre temps.</span></>}
            intro="Pas de recette toute faite. Une méthode éprouvée qui vous place au centre, de la première écoute aux premiers résultats."
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

          {/* ADN 50/50 */}
          <Reveal className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow eyebrow-light">Notre ADN</span>
              <h3 className="display-md mt-5">
                Moitié <span className="serif-accent text-lime-bright">créativité</span>, moitié{" "}
                <span className="serif-accent text-clay">technique</span>.
              </h3>
              <p className="mt-5 max-w-lg text-lg text-paper/60">
                L'imagination sans méthode s'évapore. La technique sans émotion laisse indifférent. Nos projets réunissent
                toujours les deux.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1.5rem] bg-lime-bright p-7 text-ink">
                <p className="font-display text-6xl font-semibold">50%</p>
                <p className="mt-6 font-display text-xl font-semibold">Créativité</p>
                <p className="mt-1 text-sm text-ink/70">Imagination, design, récit, émotion.</p>
              </div>
              <div className="rounded-[1.5rem] bg-clay p-7 text-white">
                <p className="font-display text-6xl font-semibold">50%</p>
                <p className="mt-6 font-display text-xl font-semibold">Technique</p>
                <p className="mt-1 text-sm text-white/80">Stratégie, digital, data, performance.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── Chiffres ───────── */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className={cn("px-2 sm:px-6", i > 0 && "lg:border-l lg:border-ink/10")}>
                <p className="font-display text-6xl font-semibold tracking-tight text-ink sm:text-7xl">
                  {s.value}
                  <span className="text-lime-deep">{s.suffix}</span>
                </p>
                <p className="mt-3 text-ink-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Réalisations ───────── */}
      <section className="bg-paper-deep/60 py-24 sm:py-36">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              className="mb-0"
              eyebrow="Réalisations"
              title={<>La preuve par <span className="serif-accent">la créativité.</span></>}
              intro="Quelques transformations récentes, menées main dans la main avec nos clients."
            />
            <Reveal><ArrowLink to="/realisations">Voir toutes les réalisations</ArrowLink></Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {cases.slice(0, 3).map((c, i) => (
              <Reveal key={c.slug} delay={i * 120}>
                <article className="group">
                  <div className="img-zoom aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <img src={c.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-lime-deep">{c.sector}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink">{c.title}</h3>
                  <p className="mt-3 text-ink-muted">{c.outcome}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Packs ───────── */}
      <section className="py-24 sm:py-36">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Packs"
              title={<>Des formules claires, <span className="serif-accent">pour chaque étape.</span></>}
              intro="Du lancement à la conquête de nouveaux marchés, nos packs regroupent l'essentiel à un prix lisible. Et tout reste ajustable."
            />
            <Reveal><ArrowLink to="/packs">Comparer les packs</ArrowLink></Reveal>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {brandPacks.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Link
                  to="/packs"
                  className={cn(
                    "group flex flex-col gap-4 rounded-[1.5rem] border p-7 transition-all sm:flex-row sm:items-center sm:justify-between",
                    p.highlight ? "border-ink bg-ink text-paper" : "border-ink/10 bg-white hover:border-ink/40",
                  )}
                >
                  <div>
                    <p className={cn("text-sm", p.highlight ? "text-lime-bright" : "text-lime-deep")}>{p.target}</p>
                    <h3 className="mt-1 font-display text-3xl font-semibold">Pack {p.name}</h3>
                  </div>
                  <div className="flex items-center gap-5">
                    <p className="font-display text-2xl font-semibold">
                      {p.price} <span className={cn("text-sm font-normal", p.highlight ? "text-paper/60" : "text-ink-muted")}>FCFA</span>
                    </p>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Ancrage ───────── */}
      <section className="relative h-[70vh] min-h-[520px] max-h-[780px] overflow-hidden">
        <img src={abidjan} alt="Vue aérienne d'Abidjan" className="absolute inset-0 h-full w-full object-cover object-[50%_65%]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/40 sm:bg-gradient-to-r sm:from-ink/85 sm:via-ink/50 sm:to-transparent" />
        <div className="container relative flex h-full items-center">
          <Reveal className="max-w-xl text-paper">
            <span className="eyebrow eyebrow-light">Made in Abidjan</span>
            <h2 className="display-lg mt-6">
              Ancrés en Côte d'Ivoire, <span className="serif-accent text-lime-bright">ouverts sur le monde.</span>
            </h2>
            <p className="mt-6 text-lg text-paper/75">
              Nous connaissons intimement nos marchés, nos codes et nos publics. C'est ce qui nous permet de créer des
              marques fières de leurs racines et prêtes à voyager.
            </p>
            <div className="mt-8">
              <ArrowLink to="/about" light>Découvrir l'agence</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default Index;
