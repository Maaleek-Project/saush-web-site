import { ArrowUpRight, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/site/Reveal";
import { PageHero, SectionHeader } from "@/components/site/blocks";
import { company, jobs, perks } from "@/data/site";
import atelier from "@/assets/photos/atelier.jpg";

const applyLink = (title: string) =>
  `mailto:${company.email}?subject=${encodeURIComponent(`Candidature — ${title}`)}&body=${encodeURIComponent(
    "Bonjour SAUSH,\n\nJe souhaite postuler. Vous trouverez ci-joint mon CV et mon portfolio.\n\n",
  )}`;

const Carriere = () => {
  return (
    <Layout title="Carrières" description="Rejoignez SAUSH à Abidjan : designers, développeurs, experts digitaux. Découvrez nos offres d'emploi et de stage.">
      <PageHero
        eyebrow="Carrières"
        title={<>Rejoignez <span className="serif-accent text-lime-deep">le labo.</span></>}
        intro="Nous cherchons des esprits curieux, exigeants et généreux, qui aiment créer à plusieurs et voir leurs idées prendre vie."
      >
        <a href="#offres" className="btn btn-ink">Voir les offres</a>
      </PageHero>

      <section className="container">
        <Reveal className="aspect-[16/9] overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
          <img src={atelier} alt="Atelier de création" className="h-full w-full object-cover" />
        </Reveal>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <SectionHeader eyebrow="Pourquoi nous rejoindre" title={<>Grandir en <span className="serif-accent">créant.</span></>} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="border-t-2 border-ink pt-6">
                <h3 className="font-display text-2xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-ink-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="offres" className="scroll-mt-24 bg-paper-deep/60 py-24 sm:py-32">
        <div className="container">
          <SectionHeader eyebrow="Offres ouvertes" title={<>Les postes <span className="serif-accent">à pourvoir.</span></>} />
          <div className="border-t border-ink/10">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={i * 60}>
                <div className="grid gap-6 border-b border-ink/10 py-10 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-5">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                      <span className="rounded-full bg-ink px-3 py-1 text-paper">{job.type}</span>
                      <span className="rounded-full border border-ink/15 px-3 py-1 text-ink/70">{job.team}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-ink">{job.title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-lg text-ink">{job.description}</p>
                    <ul className="mt-4 space-y-1.5 text-ink-muted">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex gap-2"><span className="text-lime-deep">—</span>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2 lg:text-right">
                    <a href={applyLink(job.title)} className="btn btn-outline">
                      Postuler <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink p-8 text-paper sm:p-12 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl font-semibold">Aucun poste ne vous correspond&nbsp;?</h3>
              <p className="mt-2 text-paper/65">Envoyez-nous une candidature spontanée, nous lisons tout.</p>
            </div>
            <a href={applyLink("Candidature spontanée")} className="btn btn-lime">
              Candidature spontanée <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Carriere;
