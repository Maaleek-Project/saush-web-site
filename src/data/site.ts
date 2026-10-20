/**
 * Contenu centralisé du site SAUSH.
 * Modifier les textes, prix, coordonnées et projets ici : toutes les pages se mettent à jour.
 */
import cocreation from "@/assets/photos/cocreation.jpg";
import wax from "@/assets/photos/wax.jpg";
import strategieImg from "@/assets/photos/strategie.jpg";
import digitalImg from "@/assets/photos/digital.jpg";
import analyse from "@/assets/photos/analyse.jpg";
import nuancier from "@/assets/photos/nuancier.jpg";
import outilsDesign from "@/assets/photos/outils-design.jpg";
import entrepreneure from "@/assets/photos/entrepreneure.jpg";
import atelier from "@/assets/photos/atelier.jpg";
import creative from "@/assets/photos/creative.jpg";
import equipeProjet from "@/assets/photos/equipe-projet.jpg";

/* ───────────────────────── Coordonnées ───────────────────────── */

export const company = {
  name: "SAUSH",
  legalName: "SAUSH SARL",
  tagline: "Laboratoire de co-créativité",
  founded: 2018,
  city: "Abidjan",
  address: "Cocody Riviera Palmeraie, Abidjan — Côte d'Ivoire",
  email: "contact@saush.ci",
  phones: ["+225 05 06 09 96 54", "+225 07 57 21 79 67"],
  whatsapp: "2250506099654",
  hours: "Lun. – Ven. · 8h30 – 18h00",
  socials: {
    instagram: "https://www.instagram.com/saush_ci/",
    facebook: "https://www.facebook.com/saushsarl",
    linkedin: "https://ci.linkedin.com/showcase/saush-cr%C3%A9ativit%C3%A9",
  },
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${company.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

/* Chiffres clés — à ajuster selon vos données réelles */
export const stats = [
  { value: `${new Date().getFullYear() - company.founded}`, suffix: " ans", label: "d'expérience depuis 2018" },
  { value: "50", suffix: "+", label: "marques accompagnées" },
  { value: "100", suffix: "+", label: "projets livrés" },
  { value: "24", suffix: "h", label: "pour une première réponse" },
];

export const expertises = [
  "Identité visuelle",
  "Stratégie de marque",
  "Sites web",
  "Réseaux sociaux",
  "Production vidéo",
  "Relations presse",
  "Référencement SEO",
  "Campagnes 360°",
  "Storytelling",
  "Audit de communication",
];

/* ───────────────────────── Potions (services) ───────────────────────── */

export type Potion = {
  slug: string;
  number: string;
  name: string;
  short: string;
  promise: string;
  intro: string;
  pitch: string;
  image: string;
  includes: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  deliverables: string[];
  cta: string;
};

export const potions: Potion[] = [
  {
    slug: "identite",
    number: "01",
    name: "Identité",
    short: "Logo, charte graphique, naming et storytelling.",
    promise: "Devenez inoubliable.",
    intro:
      "Votre identité est bien plus qu'un logo : c'est la première impression que vous laissez. Et une première impression ne se vit qu'une seule fois.",
    pitch:
      "Nous traduisons ce que vous êtes en un univers visuel et verbal cohérent, pour que vos clients vous reconnaissent, vous préfèrent et ne vous oublient plus.",
    image: wax,
    includes: [
      { title: "Logo & déclinaisons", text: "Un signe simple, fort et reconnaissable, pensé pour tous les supports." },
      { title: "Charte graphique", text: "Couleurs, typographies, iconographie et règles d'usage." },
      { title: "Naming", text: "Un nom qui sonne juste et colle à votre ADN." },
      { title: "Storytelling", text: "Le récit qui donne une âme à votre marque." },
      { title: "Webdesign & UX", text: "Une vitrine digitale alignée avec votre image." },
    ],
    benefits: [
      { title: "Confiance", text: "Une marque claire inspire crédibilité dès le premier regard." },
      { title: "Attraction", text: "Un design fort attire naturellement les bons clients." },
      { title: "Mémorisation", text: "Un langage cohérent vous rend reconnaissable partout." },
      { title: "Valeur", text: "Votre identité devient votre meilleur commercial." },
    ],
    process: [
      { title: "Immersion", text: "Analyse de votre secteur, de vos concurrents et de votre positionnement." },
      { title: "Concept", text: "Ateliers de co-création et pistes créatives alignées avec votre ADN." },
      { title: "Création", text: "Logo, charte et déclinaisons sur l'ensemble de vos supports." },
      { title: "Livraison", text: "Ajustements, brand book et fichiers sources dans tous les formats." },
    ],
    deliverables: [
      "Logo principal et variantes (couleur, monochrome, simplifiée)",
      "Charte graphique complète",
      "Papeterie : carte de visite, en-tête, signature e-mail",
      "Brand book — guide d'utilisation de la marque",
      "Fichiers sources (AI, SVG, PDF, PNG)",
    ],
    cta: "Créer mon identité",
  },
  {
    slug: "strategie",
    number: "02",
    name: "Stratégie",
    short: "Plan de communication, campagnes 360°, relations presse.",
    promise: "Faites rayonner votre marque.",
    intro:
      "Avoir une identité, c'est bien. Sans stratégie claire, votre message risque pourtant de se perdre dans le bruit.",
    pitch:
      "Nous construisons une stratégie sur-mesure qui place le bon message, au bon endroit, au bon moment — pour que votre marque soit vue, entendue et choisie.",
    image: strategieImg,
    includes: [
      { title: "Plan de communication", text: "Objectifs, cibles, messages clés et calendrier d'actions." },
      { title: "Campagnes 360°", text: "Une présence cohérente sur tous vos canaux, en ligne et hors ligne." },
      { title: "Relations presse", text: "Faire parler de vous dans les médias qui comptent." },
      { title: "Conception-rédaction", text: "Des messages qui marquent les esprits." },
      { title: "Achat média", text: "Un investissement maîtrisé pour un impact maximal." },
    ],
    benefits: [
      { title: "Visibilité", text: "Votre marque est présente là où vos clients regardent." },
      { title: "Notoriété", text: "Un message répété et cohérent s'ancre durablement." },
      { title: "Croissance", text: "Plus de visibilité, plus de demandes, plus de ventes." },
      { title: "Maîtrise", text: "Chaque franc investi sert un objectif mesurable." },
    ],
    process: [
      { title: "Analyse", text: "Étude de marché, de la concurrence et de vos publics." },
      { title: "Plan", text: "Définition des messages clés et des canaux prioritaires." },
      { title: "Déploiement", text: "Lancement de campagnes coordonnées sur tous les canaux." },
      { title: "Pilotage", text: "Suivi des performances et ajustements en continu." },
    ],
    deliverables: [
      "Audit de positionnement et cartographie concurrentielle",
      "Plateforme de marque et messages clés",
      "Plan de communication annuel ou de lancement",
      "Plan média et recommandations budgétaires",
      "Tableau de bord de suivi des performances",
    ],
    cta: "Booster ma visibilité",
  },
  {
    slug: "digital",
    number: "03",
    name: "Digital",
    short: "Sites web, réseaux sociaux, SEO, vidéo et e-mailing.",
    promise: "Existez là où vos clients vous cherchent.",
    intro:
      "Vos clients vous cherchent sur Google, Instagram, Facebook, TikTok ou LinkedIn. Si vous n'y êtes pas, vos concurrents prennent votre place.",
    pitch:
      "Nous faisons de votre présence digitale un véritable levier de visibilité et de ventes, avec une image cohérente et des contenus qui attirent.",
    image: digitalImg,
    includes: [
      { title: "Sites web & applications", text: "Des plateformes rapides, élégantes et pensées pour convertir." },
      { title: "Référencement SEO", text: "Apparaître avant vos concurrents sur Google." },
      { title: "Réseaux sociaux", text: "Contenus, visuels et animation de communauté." },
      { title: "Production vidéo", text: "Du motion design au film de marque." },
      { title: "Newsletters & e-mailing", text: "Fidéliser et convertir par l'e-mail." },
    ],
    benefits: [
      { title: "Être trouvé", text: "La majorité des achats commencent par une recherche en ligne." },
      { title: "Être crédible", text: "Une présence soignée rassure vos prospects." },
      { title: "Engager", text: "Des contenus pensés pour créer la conversation." },
      { title: "Convertir", text: "Chaque point de contact mène vers une action." },
    ],
    process: [
      { title: "Audit", text: "Analyse de votre présence en ligne et de celle de vos concurrents." },
      { title: "Stratégie", text: "Choix des plateformes prioritaires et plan d'action." },
      { title: "Production", text: "Développement des outils et lancement des campagnes." },
      { title: "Optimisation", text: "Suivi des résultats et ajustements pour maximiser le retour." },
    ],
    deliverables: [
      "Site web responsive, optimisé SEO et administrable",
      "Ligne éditoriale et calendrier de publication",
      "Kits de visuels et templates réseaux sociaux",
      "Campagnes sponsorisées (Meta, Google, TikTok)",
      "Rapports mensuels de performance",
    ],
    cta: "Développer ma présence digitale",
  },
  {
    slug: "diagnostic",
    number: "04",
    name: "Diagnostic",
    short: "Audit de communication, veille de marque, recommandations.",
    promise: "Un regard neuf sur votre communication.",
    intro:
      "Votre marque communique déjà. Mais vos messages atteignent-ils vraiment vos clients ? Beaucoup d'entreprises investissent sans obtenir les résultats espérés.",
    pitch:
      "Nous vous offrons un regard extérieur, exigeant mais bienveillant, pour révéler les forces cachées de votre communication et corriger ce qui freine votre croissance.",
    image: analyse,
    includes: [
      { title: "Audit de communication", text: "Analyse de l'ensemble de vos supports et prises de parole." },
      { title: "Veille de marque", text: "Comment vous êtes réellement perçu, en ligne et hors ligne." },
      { title: "Analyse concurrentielle", text: "Votre position face à vos concurrents directs." },
      { title: "Recommandations", text: "Un plan d'action priorisé et immédiatement applicable." },
    ],
    benefits: [
      { title: "Lucidité", text: "Un regard neuf révèle des failles invisibles de l'intérieur." },
      { title: "Économies", text: "Arrêtez d'investir dans ce qui ne fonctionne pas." },
      { title: "Priorités", text: "Sachez exactement par où commencer." },
      { title: "Cohérence", text: "Alignez vos messages sur tous vos supports." },
    ],
    process: [
      { title: "Collecte", text: "Nous rassemblons et analysons tous vos supports existants." },
      { title: "Benchmark", text: "Étude de votre positionnement face à la concurrence." },
      { title: "Audit digital", text: "Analyse de votre présence en ligne et de votre e-réputation." },
      { title: "Restitution", text: "Rapport complet et échange de 30 minutes pour en discuter." },
    ],
    deliverables: [
      "Rapport d'audit complet",
      "Grille de forces, faiblesses et opportunités",
      "Analyse de votre e-réputation",
      "Plan d'action priorisé",
      "Séance de restitution de 30 minutes",
    ],
    cta: "Demander mon diagnostic",
  },
];

export const getPotion = (slug?: string) => potions.find((p) => p.slug === slug);

/* ───────────────────────── Méthode ───────────────────────── */

export const method = [
  { title: "Écouter", text: "Nous partons de vous : votre histoire, vos ambitions, vos clients, vos contraintes." },
  { title: "Diagnostiquer", text: "Nous analysons votre marché et votre communication pour trouver le bon angle." },
  { title: "Co-créer", text: "Nous imaginons les solutions avec vous, en ateliers, jamais à votre place." },
  { title: "Faire rayonner", text: "Nous déployons, mesurons et ajustons jusqu'à ce que les résultats soient là." },
];

export const values = [
  { title: "Co-créativité", text: "Les meilleures idées naissent à plusieurs. Vous faites partie de l'équipe projet." },
  { title: "Exigence", text: "Chaque détail compte : un livrable SAUSH doit être aussi juste que beau." },
  { title: "Ancrage africain", text: "Nous créons des marques fières de leurs racines, prêtes à parler au monde." },
  { title: "Résultats", text: "La créativité n'a de valeur que si elle fait avancer votre activité." },
];

/* ───────────────────────── Packs ───────────────────────── */

export type Pack = {
  name: string;
  target: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  outcome?: string;
};

export const brandPacks: Pack[] = [
  {
    name: "Starter",
    target: "Lancement · Startups & associations",
    price: "150 000",
    priceNote: "FCFA · à partir de",
    description: "Posez les bases d'une image professionnelle et lancez-vous avec assurance.",
    features: [
      "Logo et charte graphique simplifiée",
      "Naming et storytelling de base",
      "Site vitrine une page",
      "5 visuels pour les réseaux sociaux",
      "Campagne Facebook de 15 jours",
    ],
  },
  {
    name: "Croissance",
    target: "PME en développement",
    price: "500 000",
    priceNote: "FCFA · à partir de",
    description: "Faites-vous remarquer et gagnez durablement en visibilité.",
    highlight: true,
    features: [
      "Identité visuelle complète",
      "Site web 5 pages optimisé SEO",
      "10 visuels + calendrier éditorial",
      "1 vidéo promotionnelle courte",
      "Relations presse locales",
      "Campagne Facebook de 20 jours",
    ],
  },
  {
    name: "Suprême",
    target: "Marques établies",
    price: "1 000 000",
    priceNote: "FCFA · à partir de",
    description: "Une stratégie 360° pour dominer votre marché.",
    features: [
      "Rebranding complet (audit + refonte)",
      "Site e-commerce ou application mobile",
      "Stratégie digitale : SEO, Ads, réseaux",
      "Campagne d'influence avec ambassadeurs",
      "Vidéo storytelling et motion design",
      "Relations presse nationales et internationales",
      "Campagne Facebook de 30 jours",
    ],
  },
];

export const socialPacks: Pack[] = [
  {
    name: "Social Essentiel",
    target: "Exister en ligne",
    price: "130 000",
    priceNote: "FCFA / mois",
    description: "Une page active et crédible qui attire vos premiers abonnés.",
    features: [
      "8 publications par mois",
      "1 réseau social (Instagram ou Facebook)",
      "Réponses aux messages et commentaires",
      "Rapport mensuel simple",
    ],
  },
  {
    name: "Social Croissance",
    target: "Visibilité & engagement",
    price: "260 000",
    priceNote: "FCFA / mois",
    description: "Plus d'abonnés, plus d'interactions, plus de notoriété.",
    highlight: true,
    features: [
      "16 publications par mois",
      "2 réseaux au choix (Instagram, Facebook, LinkedIn, TikTok)",
      "4 stories par semaine",
      "Animation complète de la communauté",
      "Rapport analytique et recommandations",
    ],
  },
  {
    name: "Social Premium",
    target: "Marques ambitieuses & e-commerce",
    price: "460 000",
    priceNote: "FCFA / mois",
    description: "Une marque omniprésente, engageante et qui convertit.",
    features: [
      "25 publications par mois (visuels, vidéos, carrousels)",
      "3 réseaux sociaux",
      "Stories quotidiennes créatives",
      "Campagne Meta Ads incluse",
      "Animation active de la communauté",
      "Reporting avancé et plan d'action",
    ],
  },
];

/* ───────────────────────── Réalisations ─────────────────────────
   Projets présentés de façon anonyme. Remplacez-les par vos vrais
   projets (nom du client, visuels, résultats chiffrés) dès que possible. */

export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  client: string;
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
  image: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "marque-agroalimentaire",
    sector: "Agroalimentaire",
    client: "Marque de cacao transformé",
    title: "Une origine ivoirienne devenue signature premium",
    challenge: "Valoriser l'origine locale du produit tout en visant les marchés export.",
    approach: "Refonte de l'identité, packaging premium, storytelling autour du terroir et campagne presse.",
    outcome: "Une marque reconnue localement et des premiers contrats signés à l'export.",
    services: ["Rebranding", "Packaging", "Relations presse"],
    image: atelier,
  },
  {
    slug: "startup-tech",
    sector: "Technologie",
    client: "Startup fintech",
    title: "Une identité qui inspire confiance aux investisseurs",
    challenge: "Rendre une offre technique lisible et rassurante pour le grand public.",
    approach: "Plateforme de marque, identité visuelle, site web et kit de présentation investisseurs.",
    outcome: "Un lancement réussi et une levée de fonds bouclée dans la foulée.",
    services: ["Identité", "Site web", "Pitch deck"],
    image: equipeProjet,
  },
  {
    slug: "etablissement-formation",
    sector: "Éducation",
    client: "École de formation supérieure",
    title: "Une campagne de rentrée qui remplit les promotions",
    challenge: "Se démarquer d'une concurrence nombreuse pendant la période d'inscriptions.",
    approach: "Campagne digitale multicanale, contenus vidéo étudiants et publicité ciblée.",
    outcome: "Des inscriptions en forte hausse et une communauté en ligne multipliée.",
    services: ["Réseaux sociaux", "Vidéo", "Publicité digitale"],
    image: entrepreneure,
  },
  {
    slug: "marque-mode",
    sector: "Mode",
    client: "Créatrice de mode africaine",
    title: "D'un atelier d'Abidjan à la scène internationale",
    challenge: "Faire connaître une jeune marque de mode au-delà du marché local.",
    approach: "Stratégie d'influence, shooting éditorial, relations presse et boutique en ligne.",
    outcome: "Des parutions dans la presse spécialisée et des commandes à l'international.",
    services: ["Stratégie", "Influence", "E-commerce"],
    image: creative,
  },
];

/* ───────────────────────── Blog ───────────────────────── */

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: { heading?: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "branding-africain-identite-qui-resonne",
    title: "Branding africain : créer une identité qui résonne ici et ailleurs",
    category: "Branding",
    date: "2026-09-18",
    readTime: "5 min",
    excerpt:
      "Comment une marque peut-elle honorer ses racines tout en parlant au monde ? Les principes que nous appliquons à chaque création d'identité.",
    image: wax,
    body: [
      {
        text: "Une marque africaine forte n'a pas à choisir entre authenticité et ambition internationale. Les marques qui réussissent le mieux sont celles qui transforment leur origine en avantage, au lieu de la gommer.",
      },
      {
        heading: "Partir d'une vérité, pas d'un cliché",
        text: "Le piège le plus courant est de puiser dans un répertoire de symboles « africains » génériques. Une identité qui résonne part d'une vérité propre à la marque : un savoir-faire, un lieu, une histoire de fondateur. C'est cette singularité qui rend la marque mémorable.",
      },
      {
        heading: "Un système, pas seulement un logo",
        text: "Le logo n'est qu'un élément. Ce qui crée la reconnaissance, c'est la cohérence d'un système : une palette, une typographie, un ton de voix, une manière de photographier. Un système bien défini permet à la marque de rester identifiable sur un emballage comme sur TikTok.",
      },
      {
        heading: "Tester avant de déployer",
        text: "Nous confrontons toujours les pistes créatives à de vrais clients et à des contextes réels : vitrine, écran de téléphone, impression bon marché. Une identité qui ne survit qu'en présentation n'est pas une identité terminée.",
      },
    ],
  },
  {
    slug: "erreurs-marketing-digital",
    title: "Marketing digital : 5 erreurs qui coûtent cher aux PME",
    category: "Digital",
    date: "2026-08-27",
    readTime: "6 min",
    excerpt:
      "Publier sans stratégie, booster au hasard, ignorer les statistiques… Les pièges que nous observons le plus souvent et comment les éviter.",
    image: digitalImg,
    body: [
      { text: "Le digital offre aux PME une visibilité autrefois réservée aux grandes marques. Encore faut-il éviter quelques erreurs qui transforment le budget communication en dépense sans retour." },
      { heading: "1. Publier sans objectif", text: "Chaque publication doit servir un but : faire connaître, rassurer, faire agir. Sans objectif, il est impossible de juger si un contenu a fonctionné." },
      { heading: "2. Être partout à moitié", text: "Mieux vaut deux réseaux bien tenus que cinq comptes abandonnés. Choisissez les plateformes où se trouvent réellement vos clients." },
      { heading: "3. Booster au hasard", text: "Le bouton « booster » est pratique mais rarement optimal. Un ciblage réfléchi et un message adapté peuvent diviser le coût par client par deux ou trois." },
      { heading: "4. Négliger le site web", text: "Les réseaux sociaux attirent, le site convainc. Un site lent ou daté fait fuir les prospects que vous avez payé pour attirer." },
      { heading: "5. Ne pas mesurer", text: "Quelques indicateurs suivis chaque mois suffisent pour savoir quoi arrêter, quoi garder et où investir davantage." },
    ],
  },
  {
    slug: "storytelling-ame-de-marque",
    title: "Storytelling : l'art de donner une âme à votre marque",
    category: "Stratégie",
    date: "2026-07-10",
    readTime: "4 min",
    excerpt:
      "Pourquoi certaines marques marquent les esprits quand d'autres sont oubliées ? Tout est dans l'histoire que vous racontez.",
    image: cocreation,
    body: [
      { text: "Les gens n'achètent pas seulement un produit : ils adhèrent à une histoire. Le storytelling donne à votre marque une raison d'être que vos clients peuvent comprendre, retenir et transmettre." },
      { heading: "Votre client est le héros", text: "La meilleure histoire de marque ne parle pas de vous, mais de la transformation que vous rendez possible pour votre client. Votre marque est le guide, pas le héros." },
      { heading: "Une tension, une résolution", text: "Toute bonne histoire repose sur un problème réel et une résolution crédible. Nommez clairement le problème que vous résolvez : c'est lui qui crée l'intérêt." },
      { heading: "Raconter partout la même histoire", text: "Site, réseaux, discours commercial, accueil client : la force d'un récit vient de sa répétition cohérente sur tous les points de contact." },
    ],
  },
  {
    slug: "reseaux-sociaux-conversion",
    title: "Réseaux sociaux : passer de la visibilité à la conversion",
    category: "Social media",
    date: "2026-06-04",
    readTime: "5 min",
    excerpt:
      "Des abonnés, c'est bien. Des clients, c'est mieux. Notre méthode pour créer des contenus qui font agir.",
    image: outilsDesign,
    body: [
      { text: "Une communauté engagée est un atout, mais l'objectif final reste le même : transformer l'attention en action. Voici comment structurer vos contenus pour y parvenir." },
      { heading: "La règle des trois piliers", text: "Alternez contenus d'inspiration (attirer), de preuve (rassurer) et d'offre (faire agir). Trop d'offres lassent, trop d'inspiration ne vend pas." },
      { heading: "Un appel à l'action clair", text: "Chaque contenu d'offre doit indiquer une seule action simple : écrire sur WhatsApp, réserver, commander. La facilité du parcours fait la conversion." },
      { heading: "Répondre vite", text: "Sur les réseaux, la rapidité de réponse est un argument de vente. Un message traité en quelques minutes convertit bien mieux qu'un message traité le lendemain." },
    ],
  },
];

export const getArticle = (slug?: string) => articles.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/* ───────────────────────── Carrières ───────────────────────── */

export const jobs = [
  {
    title: "Designer graphique senior",
    type: "CDI",
    location: "Abidjan",
    team: "Création",
    description: "Concevoir des identités visuelles et des campagnes qui marquent les esprits.",
    requirements: ["3 ans d'expérience minimum", "Maîtrise de la suite Adobe", "Portfolio solide en branding"],
  },
  {
    title: "Développeur full-stack",
    type: "CDI",
    location: "Abidjan / Télétravail",
    team: "Tech",
    description: "Développer des sites et applications performants pour nos clients.",
    requirements: ["2 ans d'expérience minimum", "React, Node.js, TypeScript", "Sens du détail et de l'UX"],
  },
  {
    title: "Chargé(e) de communication digitale",
    type: "CDI",
    location: "Abidjan",
    team: "Digital",
    description: "Piloter les stratégies social media et les campagnes de nos clients.",
    requirements: ["1 à 2 ans d'expérience", "Meta Ads, Google Analytics", "Excellente plume"],
  },
  {
    title: "Stagiaire créatif",
    type: "Stage",
    location: "Abidjan",
    team: "Création",
    description: "Participer à des projets inspirants aux côtés de l'équipe créative.",
    requirements: ["Étudiant(e) en design, communication ou marketing", "Curiosité et motivation", "Portfolio personnel"],
  },
];

export const perks = [
  { title: "Projets stimulants", text: "Des marques ambitieuses, des défis créatifs variés." },
  { title: "Apprentissage continu", text: "Formations, mentorat et partage de connaissances." },
  { title: "Équipe soudée", text: "Une équipe jeune, passionnée et bienveillante." },
  { title: "Équilibre", text: "Horaires flexibles et télétravail possible selon les postes." },
];

/* ───────────────────────── FAQ ───────────────────────── */

export const faq = [
  { q: "Le devis est-il vraiment gratuit ?", a: "Oui. Le devis est gratuit et sans engagement. Nous échangeons d'abord sur votre projet pour vous proposer une offre adaptée." },
  { q: "En combien de temps répondez-vous ?", a: "Nous répondons à toute demande sous 24 heures ouvrées, souvent dans la journée." },
  { q: "Travaillez-vous avec les petites entreprises ?", a: "Absolument. Nous accompagnons aussi bien des entrepreneurs et des startups que des PME et des grandes marques. Nos packs sont pensés pour chaque étape." },
  { q: "Travaillez-vous en dehors d'Abidjan ?", a: "Oui. Nous sommes basés à Abidjan et accompagnons des clients partout en Côte d'Ivoire, en Afrique de l'Ouest et dans la diaspora, à distance ou sur place." },
  { q: "Combien de temps dure un projet ?", a: "Une identité visuelle prend en général 3 à 5 semaines, un site web 4 à 8 semaines. Nous fixons un calendrier précis dès le lancement." },
];

/* Images partagées par plusieurs pages */
export const images = { cocreation, nuancier, outilsDesign, equipeProjet };
