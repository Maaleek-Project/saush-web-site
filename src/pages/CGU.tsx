import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const CGU = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales d'Utilisation - Saush Creative Alchemy</title>
        <meta name="description" content="Conditions générales d'utilisation du site Saush" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Conditions Générales <span className="gradient-text">d'Utilisation</span>
            </h1>

            <div className="space-y-8 text-foreground/90">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Objet</h2>
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès 
                  et d'utilisation du site www.saush.ci (ci-après « le Site »), édité par SAUSH SARL, société de communication 
                  et marketing digital basée à Abidjan. En accédant au Site, tout utilisateur reconnaît avoir pris connaissance 
                  des présentes conditions et s'engage à les respecter sans réserve.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Éditeur du site</h2>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>SAUSH SARL</strong></p>
                  <p><strong>Siège social :</strong> Cocody Riviera Palmeraie – Abidjan, Côte d'Ivoire</p>
                  <p><strong>RCCM :</strong> CI-ABJ-03-2018-B12-00825</p>
                  <p><strong>Capital social :</strong> 1 000 000 FCFA</p>
                  <p><strong>Email :</strong> <a href="mailto:contact@saush.ci" className="text-primary hover:underline">contact@saush.ci</a></p>
                  <p><strong>Téléphone :</strong> +225 05 06 09 96 54 / 07 57 21 79 67</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Accès au site</h2>
                <p>
                  Le Site est accessible gratuitement à tout utilisateur disposant d'un accès Internet. SAUSH s'efforce 
                  d'assurer un accès continu, mais ne saurait être tenue responsable en cas :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>D'interruption, de panne ou de maintenance du serveur</li>
                  <li>De problème technique indépendant de sa volonté</li>
                  <li>De force majeure (panne réseau, cyberattaque, catastrophe naturelle, etc.)</li>
                </ul>
                <p>L'accès au Site peut être suspendu ou limité à tout moment pour maintenance ou mise à jour.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Services proposés</h2>
                <p>Le Site www.saush.ci a pour objet de présenter :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Les services et expertises de l'agence SAUSH (communication, digital, branding, stratégie, etc.)</li>
                  <li>Les réalisations et références clients</li>
                  <li>Des contenus informatifs (articles, actualités, études) destinés à promouvoir la créativité africaine et les solutions digitales locales</li>
                  <li>Un formulaire de contact permettant aux visiteurs d'échanger avec nos équipes</li>
                </ul>
                <p className="mt-4">
                  Les informations diffusées sur le Site sont fournies à titre indicatif et peuvent être modifiées à tout moment sans préavis.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Propriété intellectuelle</h2>
                <p>
                  L'ensemble des éléments du Site (textes, graphismes, logos, vidéos, sons, structure, base de données, etc.) 
                  sont la propriété exclusive de SAUSH SARL ou de ses partenaires. Toute reproduction, représentation, diffusion 
                  ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite et 
                  constituerait une contrefaçon sanctionnée par la loi.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Données personnelles & Confidentialité</h2>
                <p>
                  Dans le cadre de votre navigation ou de vos échanges avec SAUSH, certaines données personnelles peuvent être 
                  collectées (nom, email, téléphone, message, et bien d'autres). Ces informations sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes</li>
                  <li>Établir un contact professionnel</li>
                  <li>Et, le cas échéant, vous envoyer des informations relatives à nos services</li>
                </ul>
                <p className="mt-4">
                  Conformément à la loi sur la protection des données personnelles (Côte d'Ivoire ARTCI / RGPD). 
                  Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données en écrivant à : 
                  <a href="mailto:dpo@saush.ci" className="text-primary hover:underline ml-2">dpo@saush.ci</a>
                </p>
                <p>Les données sont stockées sur des serveurs sécurisés et ne sont jamais transmises à des tiers sans consentement.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Liens hypertextes</h2>
                <p>
                  Le Site peut contenir des liens vers d'autres sites. SAUSH décline toute responsabilité quant au contenu 
                  ou aux pratiques de confidentialité de ces sites tiers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Responsabilité de l'utilisateur</h2>
                <p>L'utilisateur s'engage à :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ne pas perturber le bon fonctionnement du Site</li>
                  <li>Ne pas utiliser le Site à des fins frauduleuses ou illégales</li>
                  <li>Ne pas tenter d'accéder à des données protégées ou à des zones restreintes sans autorisation</li>
                </ul>
                <p className="mt-4">
                  Toute utilisation abusive du Site peut entraîner la suspension de l'accès ou des poursuites conformément 
                  à la législation ivoirienne.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Cookies</h2>
                <p>
                  Le Site peut utiliser des cookies pour améliorer l'expérience utilisateur et collecter des statistiques anonymes. 
                  L'utilisateur peut à tout moment refuser ou supprimer les cookies via les paramètres de son navigateur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">10. Modification des CGU</h2>
                <p>
                  SAUSH se réserve le droit de modifier ou d'actualiser à tout moment les présentes CGU. Les utilisateurs sont 
                  invités à les consulter régulièrement pour rester informés de toute évolution.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">11. Droit applicable et juridiction compétente</h2>
                <p>
                  Les présentes conditions sont régies par le droit ivoirien. Tout litige relatif à leur interprétation ou à 
                  leur exécution relève de la compétence exclusive des tribunaux d'Abidjan.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">12. Contact</h2>
                <p>Pour toute question concernant ces CGU, vous pouvez contacter :</p>
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

export default CGU;
