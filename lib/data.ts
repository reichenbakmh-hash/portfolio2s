export const profile = {
  name: "Stéphie",
  fullName: "Ramangalahy Ainanirina Stéphie",
  age: 20,
  study: "Master Administration",
  personality: "INFP",
  location: "Ankadindravola Ivato, ACO1",
  phone: "+261 038 55 759 96",
  email: "chocobarbubletea@gmail.com",
  about:
    "Je m'appelle Ramangalahy Ainanirina Stéphie, j'ai 20 ans et je souhaiterais apporter mon expertise à la dynamique de votre entreprise. Passionnée et motivée, ce serait avec plaisir que je vous apporterais mon savoir-faire, avec persévérance et professionnalisme."
};

export const typingWords = ["Curieuse.", "Créative.", "À l'écoute.", "En apprentissage."];

export const qualities = [
  { label: "Créative", note: "Je vois les problèmes comme des feuilles blanches." },
  { label: "Persévérante", note: "Je n'abandonne pas au premier brouillon." },
  { label: "Curieuse", note: "J'aime comprendre avant d'agir." },
  { label: "Passionnée", note: "Je m'implique pour de vrai, jamais à moitié." }
];

export const languages = [
  { label: "Français", level: 5 },
  { label: "Anglais", level: 4 },
  { label: "Espagnol", level: 3 }
];

export const skills = [
  { label: "Maîtrise des logiciels bureautiques", icon: "Laptop" },
  { label: "Rédaction web", icon: "PenLine" },
  { label: "Relation clients", icon: "Users" },
  { label: "Négociation commerciale et marketing", icon: "Handshake" },
  { label: "Administration & dactylographie", icon: "FileText" },
  { label: "Aisance relationnelle", icon: "MessageCircle" }
] as const;

export const experiences = [
  {
    role: "Agent polyvalente du tourisme",
    place: "Ramartour Madagascar — Imerinafivoany",
    period: "2023 — 2024",
    text:
      "Accueil, accompagnement et suivi de clientèle touristique au quotidien, dans un secteur où chaque détail compte."
  },
  {
    role: "Téléopératrice — projet Total Énergie",
    place: "Concentrix — Tanashore Andranomena",
    period: "2024 — 2025",
    text:
      "Téléconseillère au sein d'un grand projet énergétique : écoute, réactivité et sens du service au téléphone."
  }
];

export const education = [
  { degree: "Master Administration", school: "IMGAM", period: "En cours", current: true },
  { degree: "Licence Administration", school: "IMGAM", period: "2025" },
  { degree: "DTS Tourisme", school: "INTH", period: "2024" },
  { degree: "Bac STMG", school: "Lycée P'tit Michou", period: "2022" },
  { degree: "Brevet", school: "Collège P'tit Michou", period: "2019" }
];

export const interests = ["Formation continue", "Lecture", "Voyages", "Cuisine"];

export const quotes = [
  "On ne bâtit rien de solide sans un peu de douceur.",
  "Chaque nouveau dossier est une nouvelle page à écrire avec soin.",
  "Apprendre, c'est la seule habitude que je ne veux jamais perdre."
];
