import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { articles, formatDate } from "@/data/site";
import { cn } from "@/lib/utils";

const Blog = () => {
  const categories = ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [active, setActive] = useState("Tous");

  const list = active === "Tous" ? articles : articles.filter((a) => a.category === active);
  const [featured, ...rest] = list;

  return (
    <Layout title="Le Labo" description="Le Labo SAUSH : nos réflexions sur le branding, la stratégie et le marketing digital en Afrique.">
      <PageHero
        eyebrow="Le Labo"
        title={<>Idées, méthodes <span className="serif-accent text-lime-deep">& inspirations.</span></>}
        intro="Ce que nous apprenons en créant des marques, partagé pour que la vôtre garde toujours une longueur d'avance."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container">
          <div className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                  active === c ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink/75 hover:border-ink/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <Reveal key={featured.slug}>
              <Link to={`/blog/${featured.slug}`} className="img-zoom group grid overflow-hidden rounded-[2rem] bg-ink text-paper lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                  <img src={featured.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-between gap-8 p-8 sm:p-12">
                  <div>
                    <p className="text-sm text-lime-bright">
                      {featured.category} · {formatDate(featured.date)} · {featured.readTime}
                    </p>
                    <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">{featured.title}</h2>
                    <p className="mt-5 text-lg text-paper/65">{featured.excerpt}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-semibold group-hover:text-lime-bright">
                    Lire l'article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 100}>
                <Link to={`/blog/${a.slug}`} className="group block">
                  <div className="img-zoom aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <img src={a.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <p className="mt-5 text-sm text-ink-muted">
                    <span className="font-semibold text-lime-deep">{a.category}</span> · {formatDate(a.date)}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink group-hover:text-lime-deep">{a.title}</h3>
                  <p className="mt-3 text-ink-muted">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default Blog;
