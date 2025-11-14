import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const CGS = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Services - Saush Creative Alchemy</title>
        <meta name="description" content="Conditions générales de services de l'agence Saush" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Conditions Générales de <span className="gradient-text">Services</span>
            </h1>

            <div className="space-y-8 text-foreground/90">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 1 : Objet et champ d'application</h2>
                <p>
                  Les présentes Conditions Générales de Services (CGS) régissent les relations contractuelles entre SAUSH SARL, 
                  société de communication, marketing et conseil digital, immatriculée au RCCM sous le n° CI-ABJ-03-2018-B12-00825, 
                  et ses clients professionnels ou institutionnels.
                </p>
                <p>
                  Toute commande passée par le Client implique son adhésion pleine et entière aux présentes CGS, à l'exclusion 
                  de toute autre condition générale d'achat ou de vente. Toute dérogation aux présentes CGS ne sera opposable 
                  à SAUSH SARL que si elle a fait l'objet d'un avenant écrit expressément accepté par les deux parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 2 : Prestations de services</h2>
                <p>SAUSH SARL propose un ensemble de services digitaux incluant, de manière non exhaustive :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Stratégie de communication et marketing digital</li>
                  <li>Création de contenus (design, vidéo, rédaction, branding)</li>
                  <li>Gestion de campagnes publicitaires (Meta Ads, Google Ads, etc.)</li>
                  <li>Community management et animation de réseaux sociaux</li>
                  <li>Développement web et solutions digitales sur mesure</li>
                  <li>Audit digital et études de marché</li>
                  <li>Conseil, formation et accompagnement stratégique</li>
                </ul>
                <p className="mt-4">
                  Le détail précis et le périmètre exact de chaque prestation feront l'objet d'une proposition commerciale 
                  ou d'un devis spécifique.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 3 : Commande et démarrage</h2>
                <p>
                  La commande devient ferme et définitive après la signature par le Client du devis ou de la proposition commerciale, 
                  accompagnée du versement de l'acompte prévu. Tout démarrage de prestation sans signature formelle vaut acceptation 
                  tacite des conditions financières et techniques.
                </p>
                <p>
                  En cas d'annulation de la commande par le Client après signature, SAUSH SARL se réserve le droit de facturer 
                  intégralement les frais déjà engagés (études, conception, réservations médias, etc.).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 4 : Conditions financières</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">4.1. Tarifs</h3>
                    <p>
                      Les prix sont indiqués en Francs CFA (FCFA) et sont fermes pour la durée convenue dans la proposition commerciale. 
                      Tout changement de périmètre ou demande supplémentaire fera l'objet d'un avenant financier.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">4.2. Modalités de paiement</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>40% à la commande (acompte)</li>
                      <li>30% à mi-parcours ou à la présentation des livrables intermédiaires</li>
                      <li>30% à la livraison finale et validation des prestations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">4.3. Retard de paiement</h3>
                    <p>Tout retard de paiement supérieur à 10 jours calendaires à partir de la date d'échéance entraînera de plein droit :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>L'application d'intérêts de retard au taux légal ivoirien</li>
                      <li>La facturation d'une indemnité forfaitaire de 40 000 FCFA pour frais de recouvrement</li>
                      <li>La suspension immédiate de toutes les prestations en cours</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 5 : Obligations du client</h2>
                <p>Le Client s'engage à :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fournir à SAUSH SARL tous les éléments et documents nécessaires à la bonne exécution de la prestation</li>
                  <li>Désigner un interlocuteur unique chargé du suivi et des validations</li>
                  <li>Respecter les délais de validation prévus dans le planning</li>
                  <li>S'assurer de la conformité légale et réglementaire des contenus fournis</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 6 : Propriété intellectuelle</h2>
                <p>
                  Sauf stipulation contraire dans la proposition commerciale, les droits d'exploitation des créations réalisées 
                  par SAUSH SARL sont transférés au Client uniquement après paiement intégral du solde. SAUSH SARL conserve un 
                  droit d'usage des réalisations à des fins de communication et de présentation dans son portfolio.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 7 : Confidentialité</h2>
                <p>
                  Chaque partie s'engage à garder strictement confidentielles toutes les informations échangées dans le cadre 
                  de la prestation et à ne les utiliser qu'aux fins de l'exécution du contrat.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 8 : Responsabilité</h2>
                <p>
                  SAUSH SARL met en œuvre tous les moyens nécessaires pour garantir la qualité de ses prestations. Toutefois, 
                  sa responsabilité est limitée au montant des honoraires effectivement perçus pour la prestation concernée.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Article 9 : Droit applicable et litiges</h2>
                <p>
                  Les présentes CGS sont régies par le droit ivoirien. En cas de litige, les parties s'engagent à rechercher 
                  une solution amiable. À défaut d'accord, le litige sera porté devant les tribunaux compétents d'Abidjan.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
                <p>Pour toute question concernant ces CGS, vous pouvez contacter :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p><strong>SAUSH SARL</strong></p>
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

export default CGS;
