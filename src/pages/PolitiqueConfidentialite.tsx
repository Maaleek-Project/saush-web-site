import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Saush Creative Alchemy</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles - Saush" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Politique de <span className="gradient-text">Confidentialité</span>
            </h1>

            <div className="space-y-8 text-foreground/90">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                <p>
                  SAUSH SARL accorde une grande importance à la protection de vos données personnelles. Cette politique de 
                  confidentialité a pour objectif de vous informer sur les modalités de collecte, d'utilisation et de protection 
                  de vos données personnelles dans le cadre de votre utilisation du site www.saush.ci et de nos services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Responsable du traitement</h2>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>SAUSH SARL</strong></p>
                  <p><strong>Siège social :</strong> Cocody Riviera Palmeraie – Abidjan, Côte d'Ivoire</p>
                  <p><strong>RCCM :</strong> CI-ABJ-03-2018-B12-00825</p>
                  <p><strong>Email :</strong> <a href="mailto:dpo@saush.ci" className="text-primary hover:underline">dpo@saush.ci</a></p>
                  <p><strong>Téléphone :</strong> +225 05 06 09 96 54 / 07 57 21 79 67</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Données collectées</h2>
                <p>Dans le cadre de votre navigation sur notre site et de l'utilisation de nos services, nous sommes susceptibles de collecter :</p>
                
                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Données d'identification</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de l'entreprise</li>
                      <li>Fonction dans l'entreprise</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Données de navigation</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées</li>
                      <li>Durée de visite</li>
                      <li>Données de cookies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Données relatives aux projets</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Informations sur votre projet</li>
                      <li>Brief et cahier des charges</li>
                      <li>Échanges et communications</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Finalités du traitement</h2>
                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact et d'information</li>
                  <li>Établir et gérer la relation commerciale</li>
                  <li>Exécuter les prestations de services commandées</li>
                  <li>Gérer la facturation et les paiements</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Base légale du traitement</h2>
                <p>Le traitement de vos données personnelles repose sur :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>L'exécution d'un contrat :</strong> pour la gestion de la relation commerciale et l'exécution des prestations</li>
                  <li><strong>Votre consentement :</strong> pour l'envoi de communications marketing</li>
                  <li><strong>Notre intérêt légitime :</strong> pour l'amélioration de nos services</li>
                  <li><strong>Le respect d'obligations légales :</strong> pour la comptabilité et la fiscalité</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Durée de conservation</h2>
                <p>Vos données personnelles sont conservées pour une durée qui n'excède pas celle nécessaire aux finalités pour lesquelles elles sont traitées :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Données clients :</strong> pendant la durée de la relation commerciale et 5 ans après la fin de celle-ci</li>
                  <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Documents comptables :</strong> 10 ans conformément aux obligations légales</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Sécurité des données</h2>
                <p>
                  SAUSH SARL met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité 
                  et la confidentialité de vos données personnelles, notamment pour empêcher qu'elles soient déformées, endommagées 
                  ou que des tiers non autorisés y aient accès.
                </p>
                <p>Les données sont stockées sur des serveurs sécurisés et protégés par des pare-feu et des systèmes de chiffrement.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Partage des données</h2>
                <p>
                  Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nos prestataires techniques (hébergement, outils marketing) dans le cadre strict de l'exécution de leurs prestations</li>
                  <li>Les autorités compétentes en cas d'obligation légale</li>
                </ul>
                <p className="mt-4">Tous nos prestataires sont soumis à des obligations contractuelles strictes en matière de protection des données.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Vos droits</h2>
                <p>Conformément à la réglementation applicable (loi ivoirienne ARTCI / RGPD), vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
                  <li><strong>Droit d'effacement :</strong> demander la suppression de vos données dans certaines conditions</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes</li>
                  <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible</li>
                  <li><strong>Droit de retirer votre consentement :</strong> pour les traitements basés sur le consentement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer vos droits, vous pouvez nous écrire à : 
                  <a href="mailto:dpo@saush.ci" className="text-primary hover:underline ml-2">dpo@saush.ci</a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Cookies</h2>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site. 
                  Vous pouvez à tout moment gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">10. Modifications</h2>
                <p>
                  SAUSH SARL se réserve le droit de modifier la présente politique de confidentialité à tout moment. 
                  Toute modification sera publiée sur cette page avec indication de la date de mise à jour.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">11. Contact</h2>
                <p>Pour toute question relative à cette politique de confidentialité ou à la protection de vos données, contactez-nous :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>Email DPO :</strong> <a href="mailto:dpo@saush.ci" className="text-primary hover:underline">dpo@saush.ci</a></p>
                  <p><strong>Email général :</strong> <a href="mailto:contact@saush.ci" className="text-primary hover:underline">contact@saush.ci</a></p>
                  <p><strong>Adresse :</strong> Cocody Riviera Palmeraie, Abidjan, Côte d'Ivoire</p>
                  <p><strong>Téléphone :</strong> +225 05 06 09 96 54 / 07 57 21 79 67</p>
                </div>
              </section>

              <p className="text-sm text-muted-foreground mt-8">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
