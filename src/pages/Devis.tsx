import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/site/Reveal";
import { PageHero } from "@/components/site/blocks";

const steps = [
  "Vous nous décrivez votre projet",
  "Nous vous rappelons sous 24h",
  "Nous échangeons sur vos besoins",
  "Vous recevez une proposition sur-mesure",
];

const Devis = () => {
  return (
    <Layout title="Devis gratuit" description="Demandez un devis gratuit et sans engagement à SAUSH, agence de communication créative à Abidjan.">
      <PageHero
        eyebrow="Devis gratuit"
        title={<>Votre projet mérite <span className="serif-accent text-lime-deep">une réponse sur-mesure.</span></>}
        intro="Plus vous nous en dites, plus notre proposition sera précise. Comptez deux minutes."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-10 lg:col-span-8">
            <QuoteForm />
          </Reveal>
          <Reveal delay={100} className="h-fit rounded-[2rem] bg-ink p-8 text-paper sm:p-10 lg:col-span-4">
            <h2 className="font-display text-2xl font-semibold">Et ensuite&nbsp;?</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-bright font-display text-sm font-semibold text-ink">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-paper/85">{s}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-10 space-y-2 border-t border-paper/10 pt-8 text-sm text-paper/65">
              {["Devis 100 % gratuit", "Sans engagement", "Réponse sous 24h ouvrées"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-lime-bright" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Devis;
