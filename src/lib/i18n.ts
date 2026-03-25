export type Lang = 'fr' | 'en';

export const translations = {
  hero: {
    title: {
      fr: "L'Expertise & Le Leadership pour Vos Systèmes Embarqués",
      en: "Expertise & Leadership for Your Embedded Systems",
    },
    subtitle: {
      fr: "Bâtir, Optimiser, Transmettre. MaenSkill accompagne vos projets R&D critiques.",
      en: "Build, Optimize, Transfer. MaenSkill empowers your critical R&D projects.",
    },
  },
  services: {
    title: { fr: "Services", en: "Services" },
    items: [
      {
        title: { fr: "Architecture & Bâtisseur d'Équipes", en: "Architecture & Team Building" },
        description: {
          fr: "Conception d'architectures logicielles et matérielles solides pour l'embarqué. Structuration, recrutement et process R&D pour la performance.",
          en: "Robust embedded software and hardware architecture design. R&D team structuring, recruitment, and processes for performance.",
        },
      },
      {
        title: { fr: "Technical Leadership & Mentorat", en: "Technical Leadership & Mentoring" },
        description: {
          fr: "Coacher vos Lead Techs et managers techniques. Définir une vision stratégique et aligner les équipes. Révéler les compétences internes.",
          en: "Coaching your Lead Techs and technical managers. Defining strategic vision and aligning teams. Unlocking internal skills.",
        },
      },
      {
        title: { fr: "Optimisation", en: "Optimization" },
        description: {
          fr: "Identifier et lever les goulots d'étranglement technologiques et humains pour garantir la performance et la qualité de vos développements.",
          en: "Identifying and overcoming technical and human bottlenecks to ensure development performance and quality.",
        },
      },
    ],
  },
  about: {
    title: { fr: "Bâtir sur l'Expérience", en: "Building on Experience" },
    text: {
      fr: "Je suis un expert en systèmes embarqués et robotique mobile, avec un parcours marqué par le leadership technique et la résolution de situations complexes. MaenSkill est né de la conviction que la technologie a besoin d'une structure et d'une vision fortes pour réussir.",
      en: "I am an embedded systems and mobile robotics expert, with a career defined by technical leadership and resolving complex situations. MaenSkill was born from the conviction that technology requires strong structure and vision to succeed.",
    },
  },
  contact: {
    title: { fr: "Discutons de vos Défis", en: "Let's Discuss Your Challenges" },
    text: {
      fr: "Une situation complexe ou un projet stratégique ? Contactez-moi pour un échange.",
      en: "Facing a complex situation or a strategic project? Let's connect.",
    },
    button: { fr: "Me Contacter", en: "Contact Me" },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Email", en: "Email" },
    message: { fr: "Message", en: "Message" },
    sending: { fr: "Envoi...", en: "Sending..." },
    sent: { fr: "Message envoyé !", en: "Message sent!" },
  },
} as const;

export function t(obj: { fr: string; en: string }, lang: Lang): string {
  return obj[lang];
}
