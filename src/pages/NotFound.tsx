import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => (
  <Layout title="Page introuvable">
    <section className="flex min-h-[80vh] items-center pt-24">
      <div className="container max-w-3xl text-center">
        <p className="font-display text-[8rem] font-semibold leading-none tracking-tighter text-ink sm:text-[12rem]">
          4<span className="serif-accent text-lime-deep">0</span>4
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Cette formule n'existe pas (encore).</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-muted">
          La page que vous cherchez a peut-être changé d'adresse. Reprenons depuis le début.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-ink">Retour à l'accueil</Link>
          <Link to="/contact" className="btn btn-outline">Nous contacter</Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFound;
