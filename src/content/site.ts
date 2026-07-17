export type Lang = "pt" | "en";

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
  };
  languageLabel: string;
  hero: {
    name1: string;
    name2: string;
    subtitle: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    paragraphs: string[];
  };
  projectsPreview: {
    eyebrow: string;
    names: string[];
  };
  experience: {
    eyebrow: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    items: EducationItem[];
  };
  contact: {
    eyebrow: string;
    blurb: string;
    email: string;
    website: string;
    location: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    ufrj: string;
  };
  sobrePage: {
    eyebrow: string;
    title: string;
  };
  projetosPage: {
    eyebrow: string;
    subtitle: string;
  };
  projectDetail: {
    area: string;
    client: string;
    role: string;
    date: string;
    otherProjects: string;
    viewAll: string;
    prototypeLink: string;
  };
}

export const social = {
  linkedin: "https://www.linkedin.com/in/gabriel-bitencourte/",
  instagram: "https://www.instagram.com/bitencourte_/",
  ufrj: "https://ppgd.eba.ufrj.br/discente/gabriel-de-lima-bitencourte/",
};

export const site: Record<Lang, SiteContent> = {
  pt: {
    meta: {
      title: "Gabriel Bitencourte",
      description:
        "Product designer com experiência em interfaces e produtos digitais.",
    },
    nav: {
      home: "HOME",
      about: "SOBRE",
      projects: "PROJETOS",
    },
    languageLabel: "Português",
    hero: {
      name1: "GABRIEL",
      name2: "BITENCOURTE",
      subtitle:
        "Oi! Eu sou Gabriel e venho ajudando a construir interfaces e produtos digitais há mais de 5 anos.",
      cta: "VEJA MAIS",
    },
    about: {
      eyebrow: "SOBRE MIM",
      paragraphs: [
        "Com quase 10 anos de experiência enquanto designer e quase 5 focados em produtos digitais, desenvolvi e aperfeiçoei competências ao projetar produtos e soluções digitais. Possuo sólida vivência nas áreas de logística e e-commerce, com ênfase na tomada de decisões estratégicas e no desenvolvimento de projetos de ponta a ponta, abrangendo todas as etapas do processo. Também participei da criação de um design system, colaborando diretamente com engenheiros de software para a construção de produtos robustos e escaláveis.",
        "À parte da atuação profissional, sou bacharel em Design pelo IFSul (Pelotas) e mestrando em Design pela Universidade Federal do Rio de Janeiro (UFRJ), onde desenvolvo pesquisas teóricas e críticas sobre o campo do design, trazendo contribuições acerca do campo em relação com o seu modo de produção. Além disso, gosto muito de experimentar coisas novas e me aventurar em softwares ou expertises diferentes das quais utilizo com frequência no dia a dia.",
      ],
    },
    projectsPreview: {
      eyebrow: "PROJETOS",
      names: ["Design System", "Timeline de Rastreio", "Eager"],
    },
    experience: {
      eyebrow: "EXPERIÊNCIA PROFISSIONAL",
      items: [
        {
          company: "Melhor Envio",
          period: "dez/2021 — jan/2025",
          role: "product designer (junior/pleno/senior)",
        },
        {
          company: "Laboratório Experimental de Design do IFSul",
          period: "out/2017 — jan/2018",
          role: "designer visual",
        },
        {
          company: "Melhor Envio",
          period: "jun/2019 — set/2020",
          role: "customer care analyst",
        },
        {
          company: "Bio Sustent",
          period: "dez/2015 — set/2017",
          role: "estagiário em design",
        },
      ],
    },
    education: {
      eyebrow: "EDUCAÇÃO",
      items: [
        {
          degree: "Mestrado em Design",
          institution: "UFRJ",
          period: "2024 — em andamento",
        },
        {
          degree: "Técnico em Comunicação Visual",
          institution: "IFSul",
          period: "2018",
        },
        {
          degree: "Bacharel em Design",
          institution: "IFSul",
          period: "2024",
        },
      ],
    },
    contact: {
      eyebrow: "ENTRE EM CONTATO",
      blurb:
        "Precisa de ajuda com algum projeto ou quer trocar uma ideia? É só chamar em algum dos contatos abaixo!",
      email: "gabriel@bitencourte.com",
      website: "bitencourte.com",
      location: "Rio de Janeiro, RJ, Brasil",
    },
    social,
    sobrePage: {
      eyebrow: "SOBRE MIM",
      title: "Sobre mim",
    },
    projetosPage: {
      eyebrow: "PROJETOS",
      subtitle: "Novos projetos surgindo a cada dia",
    },
    projectDetail: {
      area: "Área",
      client: "Cliente",
      role: "Papel",
      date: "Data",
      otherProjects: "OUTROS PROJETOS",
      viewAll: "VER TODOS",
      prototypeLink: "clicando aqui",
    },
  },
  en: {
    meta: {
      title: "Gabriel Bitencourte",
      description:
        "Product designer with experience in interfaces and digital products.",
    },
    nav: {
      home: "HOME",
      about: "ABOUT",
      projects: "PORTFOLIO",
    },
    languageLabel: "English",
    hero: {
      name1: "GABRIEL",
      name2: "BITENCOURTE",
      subtitle:
        "Hi! I'm Gabriel and I have been helping to build interfaces and digital products for over 5 years.",
      cta: "SEE MORE",
    },
    about: {
      eyebrow: "ABOUT ME",
      paragraphs: [
        "With almost 10 years of experience as a designer and nearly 5 focused on digital products, I have developed and refined skills in designing digital products and solutions. I have solid experience in logistics and e-commerce, emphasizing strategic decision-making and the development of end-to-end projects, covering all stages of the process. I also participated in the creation of a design system, collaborating directly with software engineers to build robust and scalable products.",
        "Apart from my professional work, I hold a Bachelor's degree in Design from IFSul (Pelotas) and I am a Master's student in Design at the Federal University of Rio de Janeiro (UFRJ), where I conduct theoretical and critical research on the design field, contributing insights regarding the field in relation to its mode of production. Additionally, I enjoy experimenting with new things and venturing into different software or expertise than those I frequently use in my daily life.",
      ],
    },
    projectsPreview: {
      eyebrow: "PROJECTS",
      names: ["Design System", "Tracking Timeline", "Eager"],
    },
    experience: {
      eyebrow: "EXPERIENCE",
      items: [
        {
          company: "Melhor Envio",
          period: "Dec 2021 — Jan 2025",
          role: "product designer (junior/mid-level/senior)",
        },
        {
          company: "Experimental Design Laboratory of IFSul",
          period: "Oct 2017 — Jan 2018",
          role: "visual designer",
        },
        {
          company: "Melhor Envio",
          period: "Jun 2019 — Sep 2020",
          role: "customer care analyst",
        },
        {
          company: "Bio Sustent",
          period: "Dec 2015 — Sep 2017",
          role: "design intern",
        },
      ],
    },
    education: {
      eyebrow: "EDUCATION",
      items: [
        {
          degree: "Master's in Design",
          institution: "UFRJ",
          period: "2024 — in progress",
        },
        {
          degree: "Visual Communication Technician",
          institution: "IFSul",
          period: "2018",
        },
        {
          degree: "Bachelor's in Design",
          institution: "IFSul",
          period: "2024",
        },
      ],
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      blurb:
        "Need help with a project or want to chat? Just reach out through any of the contacts below!",
      email: "gabriel@bitencourte.com",
      website: "bitencourte.com",
      location: "Rio de Janeiro, RJ, Brazil",
    },
    social,
    sobrePage: {
      eyebrow: "ABOUT ME",
      title: "About me",
    },
    projetosPage: {
      eyebrow: "PORTFOLIO",
      subtitle: "New projects emerging every day",
    },
    projectDetail: {
      area: "Area",
      client: "Client",
      role: "Role",
      date: "Date",
      otherProjects: "OTHER PROJECTS",
      viewAll: "VIEW ALL",
      prototypeLink: "clicking here",
    },
  },
};
