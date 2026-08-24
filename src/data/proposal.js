export const proposalData = {
  comparison: {
    headers: ["Ce dont l'association a besoin", "Réseaux sociaux", "Site web"],
    rows: [
      {
        need: "Adresse stable, jamais suspendue ni limitée par un algorithme",
        social: { text: "Non — compte à la merci d'une suspension", tone: "no" },
        site: { text: "Oui — vous en gardez le contrôle total", tone: "yes" }
      },
      {
        need: "Crédibilité face à des institutions, ambassades, entreprises",
        social: { text: "Partielle — perçu comme informel", tone: "partial" },
        site: { text: "Oui — signal professionnel immédiat", tone: "yes" }
      },
      {
        need: 'Visible sur Google quand on cherche "ACSBEP" ou "Mah Ka Sam ONG"',
        social: { text: "Non — contenu peu indexé", tone: "no" },
        site: { text: "Oui — référencement dédié", tone: "yes" }
      },
      {
        need: "Toutes les preuves d'action réunies au même endroit",
        social: { text: "Dispersées entre 4 plateformes", tone: "partial" },
        site: { text: "Oui — un seul point de vérité", tone: "yes" }
      },
      {
        need: "Un visiteur peut agir immédiatement (don, bénévolat)",
        social: { text: "Il faut écrire en commentaire ou DM", tone: "partial" },
        site: { text: "Oui — formulaire dédié par type d'aide", tone: "yes" }
      },
      {
        need: "Contenu vidéo authentique et viral",
        social: { text: "Oui — c'est leur force", tone: "yes" },
        site: { text: "Relié aux réseaux, pas remplacé", tone: "partial" }
      }
    ]
  },
  features: [
    "Design sur mesure, pas un modèle générique",
    "100 % en français, adapté au contexte malien",
    "Liens vérifiés vers TikTok, YouTube, Facebook, Instagram",
    "Formulaire d'action pour dons en argent, nature, alimentaire, bénévolat",
    "Envoi direct par WhatsApp ou Messenger — sans backend à gérer",
    "Numéro de contact officiel intégré (+223 72 74 94 11)",
    "Parfaitement lisible sur mobile — l'écran le plus utilisé au Mali",
    "Chargement rapide, aucune publicité, aucun tracking"
  ],
  budget: {
    items: [
      { item: "Recherche & identité visuelle", desc: "Palette, typographie, recherche des réseaux sociaux officiels", price: "250 – 350 €" },
      { item: "Développement du site", desc: "Structure React, sections, responsive mobile/desktop", price: "400 – 550 €" },
      { item: "Formulaires d'action", desc: "Modal de don, intégration WhatsApp / Messenger", price: "150 – 220 €" },
      { item: "Rédaction & contenu", desc: "Textes en français, vérification des informations", price: "80 – 120 €" },
      { item: "Mise en ligne & tests", desc: "Déploiement, vérification mobile, corrections", price: "80 – 120 €" }
    ],
    total: "≈ 960 – 1 360 €"
  },
  hosting: [
    {
      tag: "Déjà actif",
      title: "Adresse GitHub Pages",
      price: "0 €",
      period: "/ an",
      desc: "lucman223.github.io/acsbep-demunies-web — hébergement gratuit à vie, aucune carte bancaire, aucun renouvellement à gérer. C'est l'adresse utilisée aujourd'hui.",
      recommended: true
    },
    {
      tag: "Optionnel",
      title: "Nom de domaine propre",
      price: "≈ 12 €",
      period: "/ an",
      desc: "Une adresse comme acsbep-demunies.org — plus professionnelle pour les partenaires institutionnels. Coût de renouvellement annuel uniquement, l'hébergement reste gratuit.",
      recommended: false
    }
  ]
};
