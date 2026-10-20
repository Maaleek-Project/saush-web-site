import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/blocks";
import { articles, formatDate, getArticle } from "@/data/site";

const BlogArticle = () => {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/blog" replace />;

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <Layout title={article.title} description={article.excerpt}>
      <article>
        <header className="pt-36 pb-12 sm:pt-44">
          <div className="container max-w-4xl">
            <Reveal>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink">
                <ArrowLeft className="h-4 w-4" /> Le Labo
              </Link>
              <p className="mt-8 text-sm text-ink-muted">
                <span className="font-semibold text-lime-deep">{article.category}</span> · {formatDate(article.date)} · {article.readTime} de lecture
              </p>
              <h1 className="display-lg mt-5 text-ink">{article.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-ink-muted">{article.excerpt}</p>
            </Reveal>
          </div>
        </header>

        <div className="container max-w-6xl">
          <Reveal className="aspect-[21/10] overflow-hidden rounded-[2rem]">
            <img src={article.image} alt="" className="h-full w-full object-cover" />
          </Reveal>
        </div>

        <div className="container max-w-3xl py-16 sm:py-24">
          <div className="space-y-8">
            {article.body.map((block, i) => (
              <section key={i}>
                {block.heading && <h2 className="mb-3 font-display text-2xl font-semibold text-ink sm:text-3xl">{block.heading}</h2>}
                <p className={i === 0 ? "text-xl leading-relaxed text-ink" : "text-lg leading-relaxed text-ink/80"}>{block.text}</p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-ink/10 py-20">
        <div className="container">
          <h2 className="mb-10 font-display text-3xl font-semibold text-ink">À lire aussi</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {others.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="group grid grid-cols-[120px_1fr] items-center gap-5 sm:grid-cols-[180px_1fr]">
                <div className="img-zoom aspect-square overflow-hidden rounded-2xl">
                  <img src={a.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-lime-deep">{a.category}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-ink group-hover:text-lime-deep">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default BlogArticle;
