import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - Saush Creative Alchemy</title>
        <meta name="description" content="Mentions légales et informations juridiques de Saush SARL" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Mentions <span className="gradient-text">Légales</span>
            </h1>

            <div className="space-y-8 text-foreground/90">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Éditeur du site</h2>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>SAUSH SARL</strong></p>
                  <p>Société de communication et marketing digital</p>
                  <p><strong>Siège social :</strong> Cocody Riviera Palmeraie – Abidjan, Côte d'Ivoire</p>
                  <p><strong>RCCM :</strong> CI-ABJ-03-2018-B12-00825</p>
                  <p><strong>Capital social :</strong> 1 000 000 FCFA</p>
                  <p><strong>Email :</strong> <a href="mailto:contact@saush.ci" className="text-primary hover:underline">contact@saush.ci</a></p>
                  <p><strong>Téléphone :</strong> +225 05 06 09 96 54 / 07 57 21 79 67</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Directeur de la publication</h2>
                <p>Le directeur de la publication du site www.saush.ci est le représentant légal de SAUSH SARL.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Hébergement</h2>
                <p>Le site www.saush.ci est hébergé par :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                  <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                  <p><strong>Contact :</strong> [Contact de l'hébergeur]</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Propriété intellectuelle</h2>
                <p>
                  L'ensemble des éléments du Site (textes, graphismes, logos, vidéos, sons, structure, base de données, etc.) 
                  sont la propriété exclusive de SAUSH SARL ou de ses partenaires. Toute reproduction, représentation, diffusion 
                  ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite et 
                  constituerait une contrefaçon sanctionnée par la loi.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Protection des données personnelles</h2>
                <p>
                  Conformément à la loi sur la protection des données personnelles (Côte d'Ivoire ARTCI / RGPD), 
                  vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données.
                </p>
                <p>
                  Pour exercer ces droits, écrivez à : <a href="mailto:dpo@saush.ci" className="text-primary hover:underline">dpo@saush.ci</a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
                <p>
                  Le Site peut utiliser des cookies pour améliorer l'expérience utilisateur et collecter des statistiques anonymes. 
                  L'utilisateur peut à tout moment refuser ou supprimer les cookies via les paramètres de son navigateur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Droit applicable</h2>
                <p>
                  Les présentes mentions légales sont régies par le droit ivoirien. Tout litige relatif à leur interprétation 
                  ou à leur exécution relève de la compétence exclusive des tribunaux d'Abidjan.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
                <p>Pour toute question concernant ces mentions légales, vous pouvez contacter :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>Email :</strong> <a href="mailto:contact@saush.ci" className="text-primary hover:underline">contact@saush.ci</a></p>
                  <p><strong>Adresse :</strong> Cocody Riviera Palmeraie, Abidjan, Côte d'Ivoire</p>
                  <p><strong>Téléphone :</strong> +225 05 06 09 96 54 / 07 57 21 79 67</p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;
