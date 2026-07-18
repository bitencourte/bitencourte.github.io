import type { Lang } from "./site";

export type ProjectBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "link"; text: string; href: string };

export interface ProjectMeta {
  area: string;
  client: string;
  role: string;
  date: string;
}

export interface Project {
  slug: string;
  name: string;
  cover: string;
  meta: ProjectMeta;
  summary: string;
  blocks: ProjectBlock[];
}

const figmaPrototypeUrl =
  "https://www.figma.com/proto/2wPjBmqrC1upRxbl2TlFRi/Aplicativo?page-id=254%3A2068&type=design&node-id=327-1788&viewport=93%2C273%2C0.19&t=n3EA7ZVd6EWX0hZs-1&scaling=scale-down&starting-point-node-id=327%3A1788&mode=design";

export const projects: Record<Lang, Project[]> = {
  pt: [
    {
      slug: "design-system",
      name: "Design System",
      cover: "/images/shared/shape-1.png",
      meta: {
        area: "Design System",
        client: "-",
        role: "Product Designer",
        date: "2023-2025",
      },
      summary:
        "Criação, implementação e manutenção de um Design System, consolidando-o entre designers de produto e desenvolvedores.",
      blocks: [
        {
          type: "paragraph",
          text: "Participação na criação, implementação e manutenção de um Design System. Junto de outros designers, fui responsável por criar e documentar uma série de componentes em uma biblioteca do Figma. Além disso, também coordenei o projeto do Design System entre os meses de fevereiro e setembro de 2024. Durante esse período, tive como foco a reorganização de processos internos e a consolidação do mesmo entre designers e desenvolvedores.",
        },
        {
          type: "paragraph",
          text: "Visando um resultado que fosse robusto e escalável, tudo foi feito a partir de tokens e da elaboração de uma documentação abrangente, visando a utilização futura por novos designers e desenvolvedores — gerando consistência e agilidade. Além disso, houve especial foco para que tudo pudesse funcionar em diferentes produtos e em formato white label.",
        },
        {
          type: "image",
          src: "/images/projetos/design-system/01.png",
          alt: "Componente de inputs do Design System",
          caption:
            "Componente de inputs, otimizado através do Figma com a utilização de variáveis e slots.",
        },
        {
          type: "paragraph",
          text: "Como resultados, foram criados mais de 30 componentes para a biblioteca do Design System, além de módulos e templates completos para fluxos usados com mais frequência. Com isso, foi possível atingir maior agilidade na construção e prototipação de fluxos, bem como no desenvolvimento destes.",
        },
        {
          type: "paragraph",
          text: "Fora isso, foi um projeto que envolveu muita dedicação pessoal e aprendizados constantes — em aspectos de design, desenvolvimento e também de aprimoramento a partir de novas funcionalidades e atualizações do Figma.",
        },
        {
          type: "image",
          src: "/images/projetos/design-system/02.gif",
          alt: "Uso de variáveis e tokens no Design System",
          caption:
            "Utilização de variáveis e alteração de tokens para funcionamento white label.",
        },
        {
          type: "image",
          src: "/images/projetos/design-system/03.png",
          alt: "Componentes de alta-fidelidade do Design System",
          caption:
            "Componentes pronto para protótipos de alta-fidelidade, com animações e alterações de estados.",
        },
      ],
    },
    {
      slug: "timeline-rastreio",
      name: "Timeline de Rastreio",
      cover: "/images/shared/shape-2.png",
      meta: {
        area: "Logística",
        client: "Melhor Rastreio",
        role: "Product Designer",
        date: "2023",
      },
      summary:
        "O Melhor Rastreio é uma plataforma para rastreamento de encomendas que ajuda remetentes e destinatários. É um subproduto do Melhor Envio, empresa do grupo LWSA. Neste projeto, foi desenvolvida uma nova timeline que indicasse o status atual do pacote que está sendo acompanhada de forma a facilitar a identificação e localização dos objetos.",
      blocks: [
        {
          type: "paragraph",
          text: "A timeline de rastreio é o principal indicador do status de um pacote ao abrir a visualização do mesmo. Portanto, é uma área de grande importância dentro da página de rastreio.",
        },
        {
          type: "paragraph",
          text: "A timeline anterior não refletia o peso que a informação deveria ter, além de mostrar algumas informações de maneira repetida. Além disso, também não era escalável para novos status ou futuras funcionalidades que a ferramenta poderia aderir.",
        },
        {
          type: "image",
          src: "/images/projetos/timeline-rastreio/01.png",
          alt: "Timeline de rastreio anterior",
        },
        {
          type: "paragraph",
          text: "Dessa maneira, a partir de feedbacks internos e externos e da identificação da necessidade de realizar melhorias de forma a torná-la mais robusta e escalável, foi iniciado o projeto de refatoração deste elemento.",
        },
        {
          type: "paragraph",
          text: "Durante a realização desse projeto, trabalhei em uma equipe multidisciplinar, contando com product managers, desenvolvedores back e front-end, analistas de qualidade e UX Writers. Neste projeto, realizei a identificação da necessidade, a reestruturação do fluxo de uso e o desenho das interface das telas. Além disso, também houve a preparação do protótipo para o desenvolvimento em front-end.",
        },
        {
          type: "image",
          src: "/images/projetos/timeline-rastreio/02.png",
          alt: "Processo de redesenho da timeline de rastreio",
        },
        {
          type: "paragraph",
          text: "Buscando solucionar os problemas levantados, foi realizado uma alteração no formato da linha do tempo, bem como a adoção de ícones complementares para mostrar o status de cada atualização. Junto disso, houve um aumento das áreas coloridas, facilitando a identificação dos diferentes status. Aproveitando a atualização, também foi proposto um reajuste do posicionamento dos botões de ação de forma a facilitar a utilização em dispositivos mobile.",
        },
        {
          type: "image",
          src: "/images/projetos/timeline-rastreio/03.png",
          alt: "Nova timeline de rastreio",
        },
        {
          type: "paragraph",
          text: "Com as melhorias realizadas, ficou mais fácil de saber o que estava acontecendo com cada envio de forma mais rápida e eficiente. Como resultados, foi possível observar redução no número de tickets de atendimento referentes à informações sobre rastreio, bem como economia de tempo por parte da equipe de produto e desenvolvimento, que antes precisava fazer ajustes constantes com a adição de novos status de rastreio.",
        },
      ],
    },
    {
      slug: "eager",
      name: "Eager",
      cover: "/images/shared/shape-3.png",
      meta: {
        area: "Saúde",
        client: "Projeto fictício",
        role: "Product Designer",
        date: "2023",
      },
      summary:
        "Aplicativo desenvolvido para a disciplina de Design de Interfaces Digitais. Para o projeto, foi utilizada a metodologia que Jesse James Garrett relata em “Os elementos da experiência do usuário”. O trabalho contou com definição de escopo, estratégia, questionários com potenciais usuários, criação de wireframes e direção de arte das interfaces.",
      blocks: [
        {
          type: "paragraph",
          text: "O Eager é um aplicativo fictício que visa ajudar na criação e manutenção da prática de atividades físicas e hábitos saudáveis. Foi criado a partir de pesquisas quantitativas realizadas através de formulários com potenciais usuários. A partir das pesquisas, foi possível identificar as principais dificuldades e necessidades em relação à essas práticas e adequação de hábitos saudáveis.",
        },
        {
          type: "paragraph",
          text: 'Para o projeto, foi utilizada a metodologia de Jesse James Garrett, apresentada no livro "Os elementos da experiência do usuário", que divide a criação de um produto digital em 5 etapas, conforme mostrado a seguir.',
        },
        {
          type: "image",
          src: "/images/projetos/eager/01.png",
          alt: "As 5 etapas da metodologia de Jesse James Garrett aplicadas ao Eager",
        },
        {
          type: "link",
          text: "O protótipo completo do aplicativo pode ser acessado clicando aqui.",
          href: figmaPrototypeUrl,
        },
        {
          type: "image",
          src: "/images/projetos/eager/02.png",
          alt: "Dados levantados na pesquisa do Eager",
          caption:
            "Principais dados levantados após aplicação de pesquisas quantitativas.",
        },
        {
          type: "paragraph",
          text: "Este foi um trabalho realizado individualmente, com supervisão da professora Raquel Godinho. Dessa forma, fui responsável pela organização e estruturação do trabalho, realização e aplicação dos questionários, desenho das interfaces, identidade visual e conteúdo.",
        },
        {
          type: "paragraph",
          text: "Acredito que o principal resultado foi conseguir traduzir em um MVP as necessidades levantas a partir das pesquisas realizadas e poder visualizar, através de testes, a forma como o aplicativo se comportava em interação direta com as pessoas usuárias.",
        },
        {
          type: "paragraph",
          text: "Pensando num fluxo de trabalho ideal, as próximas etapas seriam o handoff para desenvolvedores — junto do acompanhamento do desenvolvimento — possibilitando o lançamento e posterior testagem e acompanhamento de métricas de usabilidade.",
        },
        {
          type: "image",
          src: "/images/projetos/eager/03.png",
          alt: "Wireframes do plano de esqueleto do Eager",
          caption: "Etapa de plano de esqueleto",
        },
        {
          type: "image",
          src: "/images/projetos/eager/04.png",
          alt: "Interface final do Eager",
          caption:
            "Etapa de plano de superfície, com o resultado final da interface proposta.",
        },
        {
          type: "link",
          text: "O protótipo completo do aplicativo pode ser acessado clicando aqui.",
          href: figmaPrototypeUrl,
        },
      ],
    },
  ],
  en: [
    {
      slug: "design-system",
      name: "Design System",
      cover: "/images/shared/shape-1.png",
      meta: {
        area: "Design System",
        client: "-",
        role: "Product Designer",
        date: "2023-2025",
      },
      summary:
        "Creation, implementation, and maintenance of a Design System, consolidating it among product designers and developers.",
      blocks: [
        {
          type: "paragraph",
          text: "Participation in the creation, implementation, and maintenance of a Design System. Together with other designers, I was responsible for creating and documenting a series of components in a Figma library. In addition, I also coordinated the Design System project between February and September 2024. During this period, I focused on reorganizing internal processes and consolidating it among designers and developers.",
        },
        {
          type: "paragraph",
          text: "With an aim for a robust and scalable result, everything was done based on tokens and the development of comprehensive documentation, aiming for future use by new designers and developers — generating consistency and agility. Additionally, special focus was placed on ensuring that everything could work across different products and in a white label format.",
        },
        {
          type: "image",
          src: "/images/projetos/design-system/01.png",
          alt: "Design System input component",
          caption:
            "Input component, optimized through Figma using variables and slots.",
        },
        {
          type: "paragraph",
          text: "As a result, more than 30 components were created for the Design System library, in addition to complete modules and templates for the most commonly used flows. This made it possible to achieve greater agility in building and prototyping flows, as well as in their development.",
        },
        {
          type: "paragraph",
          text: "Moreover, it was a project that involved a lot of personal dedication and constant learning — in aspects of design, development, and also improvement based on new functionalities and updates from Figma.",
        },
        {
          type: "image",
          src: "/images/projetos/design-system/02.gif",
          alt: "Use of variables and tokens in the Design System",
          caption:
            "Use of variables and modification of tokens for white-label operation.",
        },
        {
          type: "image",
          src: "/images/projetos/design-system/03.png",
          alt: "High-fidelity Design System components",
          caption:
            "Components ready for high-fidelity prototypes, with animations and state changes.",
        },
      ],
    },
    {
      slug: "timeline-rastreio",
      name: "Tracking Timeline",
      cover: "/images/shared/shape-2.png",
      meta: {
        area: "Logistics",
        client: "Melhor Rastreio",
        role: "Product Designer",
        date: "2023",
      },
      summary:
        "Melhor Rastreio is a platform for tracking shipments that helps senders and recipients. It is a byproduct of Melhor Envio, a company of the LWSA group. In this project, a new timeline was developed to indicate the current status of the package being tracked to facilitate the identification and location of the objects.",
      blocks: [
        {
          type: "paragraph",
          text: "The tracking timeline is the main indicator of the status of a package when opening its view. Therefore, it is a highly important area within the tracking page.",
        },
        {
          type: "paragraph",
          text: "The previous timeline did not reflect the weight that the information should have, as well as showing some information repetitively. Furthermore, it was also not scalable for new statuses or future functionalities that the tool could adopt.",
        },
        {
          type: "image",
          src: "/images/projetos/timeline-rastreio/01.png",
          alt: "Previous tracking timeline",
        },
        {
          type: "paragraph",
          text: "Thus, based on internal and external feedback and the identification of the need to make improvements in order to make it more robust and scalable, the project to refactor this element was initiated.",
        },
        {
          type: "paragraph",
          text: "During the execution of this project, I worked in a multidisciplinary team, including product managers, back-end and front-end developers, quality analysts, and UX Writers. In this project, I identified needs, restructured the usage flow, and designed the interface of the screens. Additionally, there was also the preparation of the prototype for front-end development.",
        },
        {
          type: "image",
          src: "/images/projetos/timeline-rastreio/02.png",
          alt: "Redesign process of the tracking timeline",
        },
        {
          type: "paragraph",
          text: "To address the issues raised, a change was made to the format of the timeline, as well as the adoption of complementary icons to show the status of each update. Along with this, there was an increase in the colored areas, making it easier to identify the different statuses. Taking advantage of the update, a readjustment of the positioning of the action buttons was also proposed to facilitate usage on mobile devices.",
        },
        {
          type: "image",
          src: "/images/projetos/timeline-rastreio/03.png",
          alt: "New tracking timeline",
        },
        {
          type: "paragraph",
          text: "With the improvements made, it became easier to know what was happening with each shipment in a faster and more efficient manner. As a result, a reduction in the number of support tickets related to tracking information was observed, as well as a time savings for the product and development team, who previously needed to make constant adjustments with the addition of new tracking statuses.",
        },
      ],
    },
    {
      slug: "eager",
      name: "Eager",
      cover: "/images/shared/shape-3.png",
      meta: {
        area: "Health",
        client: "Fictional project",
        role: "Product Designer",
        date: "2023",
      },
      summary:
        "Application developed for the Digital Interface Design course. For the project, the methodology described by Jesse James Garrett in “The Elements of User Experience” was used. The work included scope definition, strategy, questionnaires with potential users, creation of wireframes, and art direction of the interfaces.",
      blocks: [
        {
          type: "paragraph",
          text: "Eager is a fictional application aimed at helping to create and maintain the practice of physical activities and healthy habits. It was developed from quantitative research conducted through surveys with potential users. From the research, it was possible to identify the main difficulties and needs regarding these practices and the adaptation of healthy habits.",
        },
        {
          type: "paragraph",
          text: 'For the project, the methodology of Jesse James Garrett was used, presented in the book "The Elements of User Experience," which divides the creation of a digital product into 5 stages, as shown below.',
        },
        {
          type: "image",
          src: "/images/projetos/eager/01.png",
          alt: "The 5 stages of Jesse James Garrett's methodology applied to Eager",
        },
        {
          type: "link",
          text: "The complete prototype of the application can be accessed by clicking here.",
          href: figmaPrototypeUrl,
        },
        {
          type: "image",
          src: "/images/projetos/eager/02.png",
          alt: "Data collected in the Eager research",
          caption:
            "Main data collected after the application of quantitative research.",
        },
        {
          type: "paragraph",
          text: "This was a project carried out individually, under the supervision of Professor Raquel Godinho. Thus, I was responsible for organizing and structuring the work, conducting and applying the questionnaires, designing the interfaces, visual identity, and content.",
        },
        {
          type: "paragraph",
          text: "I believe that the main result was being able to translate the needs raised from the research conducted into an MVP and to visualize, through testing, how the application behaved in direct interaction with the users.",
        },
        {
          type: "paragraph",
          text: "Thinking about an ideal workflow, the next steps would be the handoff to developers — along with accompanying the development — enabling the launch and subsequent testing and monitoring of usability metrics.",
        },
        {
          type: "image",
          src: "/images/projetos/eager/03.png",
          alt: "Skeleton plan wireframes for Eager",
          caption: "Skeleton plan stage",
        },
        {
          type: "image",
          src: "/images/projetos/eager/04.png",
          alt: "Final interface of Eager",
          caption:
            "Surface plan stage, with the final result of the proposed interface.",
        },
        {
          type: "link",
          text: "The complete prototype of the application can be accessed by clicking here.",
          href: figmaPrototypeUrl,
        },
      ],
    },
  ],
};

export function getProject(lang: Lang, slug: string): Project | undefined {
  return projects[lang].find((p) => p.slug === slug);
}
