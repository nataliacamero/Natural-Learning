export const locales = ["es", "en", "fr", "ast"] as const;

export type Locale = (typeof locales)[number];
export type Surface = "home" | "resource";

type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends readonly (infer Item)[]
    ? readonly DeepPartial<Item>[]
    : T[Key] extends object
      ? DeepPartial<T[Key]>
      : T[Key];
};

export type HomeCopy = {
  languageSelectorLabel: string;
  languageActive: string;
  navigationLabel: string;
  navigation: { routes: string; now: string; start: string };
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleEmphasis: string;
  heroIntro: string;
  promiseLabel: string;
  promise: string;
  asideNote: string;
  missionStatus: string;
  missionIndex: string;
  missionLabel: string;
  missionTitle: string;
  missionDescription: string;
  progressLabel: string;
  progressCaption: string;
  activityLogLabel: string;
  activityLogDate: string;
  activityLogEntry: string;
  startMarker: string;
  startEyebrow: string;
  startTitle: string;
  startDescription: string;
  activityTag: string;
  activityTime: string;
  activityTitle: string;
  firstResource: string;
  resourceTitle: string;
  resourceStatus: string;
  activitySteps: readonly string[];
  activityClose: string;
  routesEyebrow: string;
  routesTitle: string;
  routes: readonly {
    number: string;
    name: string;
    description: string;
  }[];
  closingEyebrow: string;
  closingTitle: string;
  closingDescription: string;
  footerTagline: string;
  footerCredit: string;
};

export type ResourceCopy = {
  languageSelectorLabel: string;
  languageActive: string;
  backLink: string;
  category: string;
  status: string;
  title: string;
  intro: string;
  learningLabel: string;
  statusTitle: string;
  statusDescription: string;
  outlineTitle: string;
  outline: readonly string[];
  nextLink: string;
};

export const homeSource: HomeCopy = {
  languageSelectorLabel: "Idioma",
  languageActive: "actual",
  navigationLabel: "Navegación principal",
  navigation: { routes: "Rutas", now: "Ahora", start: "Empieza aquí" },
  heroEyebrow: "Una biblioteca para perderle el miedo",
  heroTitleBefore: "La tecnología también puede explicarse",
  heroTitleEmphasis: "despacio.",
  heroIntro:
    "Natural Learning ayuda a personas curiosas y principiantes a entender programación e inteligencia artificial con explicaciones pacientes, experimentos pequeños y proyectos útiles.",
  promiseLabel: "Nuestro compromiso",
  promise: "Explicar tecnología sin hacerte sentir mal por no saberla aún.",
  asideNote: "Cuaderno abierto · 01",
  missionStatus: "Trabajo en curso",
  missionIndex: "01 / 03",
  missionLabel: "Misión actual",
  missionTitle: "Construir un primer camino para aprender IA sin humo.",
  missionDescription:
    "Estamos preparando recursos que separan lo que sabemos, lo que podemos comprobar y lo que todavía es una pregunta.",
  progressLabel: "Progreso: primera etapa",
  progressCaption: "Primera etapa · Página inicial",
  activityLogLabel: "En el registro",
  activityLogDate: "10 ago 2026",
  activityLogEntry: "Sprint 001 · Página inicial",
  startMarker: "Primer paso",
  startEyebrow: "Diez minutos, una pregunta",
  startTitle: "Empieza por mirar una respuesta con otros ojos.",
  startDescription:
    "No necesitas instalar nada ni tener una cuenta. Solo una pregunta cuya respuesta conozcas bastante bien.",
  activityTag: "Actividad breve",
  activityTime: "10 min",
  activityTitle: "¿Puede una IA sonar segura y estar equivocada?",
  firstResource: "Primer recurso",
  resourceTitle: "¿Qué es un LLM?",
  resourceStatus: "En desarrollo →",
  activitySteps: [
    "Escribe a una IA una pregunta sobre algo que conozcas.",
    "Lee la respuesta y marca una frase que comprobarías.",
    "Busca esa frase en una fuente que puedas identificar.",
  ],
  activityClose: "La meta no es acertar: es aprender a preguntar «¿cómo lo sé?». ",
  routesEyebrow: "Tres formas de seguir",
  routesTitle: "Elige una puerta de entrada.",
  routes: [
    {
      number: "01",
      name: "IA sin humo",
      description:
        "Entiende qué hace una IA generativa, dónde puede fallar y cómo comprobar sus respuestas.",
    },
    {
      number: "02",
      name: "Programar sin miedo",
      description:
        "Empieza a leer y escribir código con problemas pequeños, lenguaje normal y margen para equivocarte.",
    },
    {
      number: "03",
      name: "Aprender a aprender",
      description:
        "Encuentra una forma sostenible de practicar, hacer preguntas y reconocer tus avances.",
    },
  ],
  closingEyebrow: "Una idea para llevarte",
  closingTitle: "No tienes que saberlo todo para empezar.",
  closingDescription:
    "Aquí cada explicación deja una pequeña acción. Vuelve cuando quieras, guarda tus preguntas y construye criterio a tu ritmo.",
  footerTagline: "Aprender tecnología, sin prisa y sin vergüenza.",
  footerCredit: "Powered by Natalia Camero Carreño",
};

export const homeTranslations: Record<Exclude<Locale, "es">, DeepPartial<HomeCopy>> = {
  en: {
    languageSelectorLabel: "Language",
    languageActive: "current",
    navigationLabel: "Main navigation",
    navigation: { routes: "Paths", now: "Now", start: "Start here" },
    heroEyebrow: "A library for losing your fear of technology",
    heroTitleBefore: "Technology can be explained",
    heroTitleEmphasis: "slowly, too.",
    heroIntro:
      "Natural Learning helps curious people and beginners understand programming and artificial intelligence through patient explanations, small experiments, and useful projects.",
    promiseLabel: "Our promise",
    promise: "Explain technology without making you feel bad for not knowing it yet.",
    asideNote: "Open notebook · 01",
    missionStatus: "Work in progress",
    missionIndex: "01 / 03",
    missionLabel: "Current mission",
    missionTitle: "Build a first path for learning AI without the hype.",
    missionDescription:
      "We are preparing resources that separate what we know, what we can check, and what is still a question.",
    progressLabel: "Progress: first stage",
    progressCaption: "First stage · Home page",
    activityLogLabel: "In the log",
    activityLogDate: "10 Aug 2026",
    activityLogEntry: "Sprint 001 · Home page",
    startMarker: "First step",
    startEyebrow: "Ten minutes, one question",
    startTitle: "Start by looking at an answer with fresh eyes.",
    startDescription:
      "You do not need to install anything or have an account. Just one question whose answer you know fairly well.",
    activityTag: "Short activity",
    activityTime: "10 min",
    activityTitle: "Can AI sound confident and still be wrong?",
    firstResource: "First resource",
    resourceTitle: "What is an LLM?",
    resourceStatus: "In development →",
    activitySteps: [
      "Ask an AI a question about something you know.",
      "Read the answer and mark one sentence you would check.",
      "Look for that sentence in a source you can identify.",
    ],
    activityClose: "The goal is not to be right: it is to learn to ask “How do I know?”.",
    routesEyebrow: "Three ways forward",
    routesTitle: "Choose a way in.",
    routes: [
      { number: "01", name: "AI without the hype", description: "Understand what generative AI does, where it can fail, and how to check its answers." },
      { number: "02", name: "Code without fear", description: "Start reading and writing code with small problems, plain language, and room to make mistakes." },
      { number: "03", name: "Learning how to learn", description: "Find a sustainable way to practise, ask questions, and notice your progress." },
    ],
    closingEyebrow: "An idea to take with you",
    closingTitle: "You do not have to know everything to begin.",
    closingDescription: "Every explanation here leaves you with a small action. Come back when you like, keep your questions, and build judgement at your own pace.",
    footerTagline: "Learning technology, without hurry or shame.",
    footerCredit: "Con el impulso de Natalia Camero Carreño",
  },
  fr: {
    languageSelectorLabel: "Langue",
    languageActive: "actuelle",
    navigationLabel: "Navigation principale",
    navigation: { routes: "Parcours", now: "Maintenant", start: "Commencer ici" },
    heroEyebrow: "Une bibliothèque pour apprivoiser la technologie",
    heroTitleBefore: "La technologie peut aussi s’expliquer",
    heroTitleEmphasis: "doucement.",
    heroIntro: "Natural Learning aide les personnes curieuses et débutantes à comprendre la programmation et l’intelligence artificielle grâce à des explications patientes, de petites expériences et des projets utiles.",
    promiseLabel: "Notre engagement",
    promise: "Expliquer la technologie sans vous faire honte de ne pas encore la connaître.",
    asideNote: "Cahier ouvert · 01",
    missionStatus: "Travail en cours",
    missionIndex: "01 / 03",
    missionLabel: "Mission actuelle",
    missionTitle: "Construire un premier chemin pour apprendre l’IA sans le battage médiatique.",
    missionDescription: "Nous préparons des ressources qui distinguent ce que nous savons, ce que nous pouvons vérifier et ce qui reste une question.",
    progressLabel: "Progression : première étape",
    progressCaption: "Première étape · Page d’accueil",
    activityLogLabel: "Dans le journal",
    activityLogDate: "10 août 2026",
    activityLogEntry: "Sprint 001 · Page d’accueil",
    startMarker: "Premier pas",
    startEyebrow: "Dix minutes, une question",
    startTitle: "Commencez par regarder une réponse autrement.",
    startDescription: "Vous n’avez rien à installer et aucun compte à créer. Il vous suffit d’une question dont vous connaissez assez bien la réponse.",
    activityTag: "Activité courte",
    activityTime: "10 min",
    activityTitle: "Une IA peut-elle sembler sûre d’elle et se tromper ?",
    firstResource: "Première ressource",
    resourceTitle: "Qu’est-ce qu’un LLM ?",
    resourceStatus: "En développement →",
    activitySteps: [
      "Posez à une IA une question sur quelque chose que vous connaissez.",
      "Lisez la réponse et repérez une phrase que vous vérifieriez.",
      "Cherchez cette phrase dans une source que vous pouvez identifier.",
    ],
    activityClose: "Le but n’est pas d’avoir raison : c’est d’apprendre à demander « comment le sais-je ? ».",
    routesEyebrow: "Trois façons de continuer",
    routesTitle: "Choisissez une porte d’entrée.",
    routes: [
      { number: "01", name: "IA sans poudre aux yeux", description: "Comprenez ce que fait une IA générative, où elle peut se tromper et comment vérifier ses réponses." },
      { number: "02", name: "Programmer sans peur", description: "Commencez à lire et écrire du code avec de petits problèmes, des mots simples et le droit à l’erreur." },
      { number: "03", name: "Apprendre à apprendre", description: "Trouvez une manière durable de pratiquer, de poser des questions et de reconnaître vos progrès." },
    ],
    closingEyebrow: "Une idée à garder",
    closingTitle: "Vous n’avez pas besoin de tout savoir pour commencer.",
    closingDescription: "Chaque explication laisse une petite action. Revenez quand vous le souhaitez, gardez vos questions et construisez votre esprit critique à votre rythme.",
    footerTagline: "Apprendre la technologie, sans se presser ni avoir honte.",
    footerCredit: "Avec le soutien de Natalia Camero Carreño",
  },
  ast: {
    languageSelectorLabel: "Llingua",
    languageActive: "actual",
    navigationLabel: "Navegación principal",
    navigation: { routes: "Rutes", now: "Agora", start: "Entama equí" },
    heroEyebrow: "Una biblioteca pa perder el mieu a la teunoloxía",
    heroTitleBefore: "La teunoloxía tamién se pue esplicar",
    heroTitleEmphasis: "ensin priesa.",
    heroIntro: "Natural Learning ayuda a persones curioses y principiantes a entender programación ya intelixencia artificial con esplicaciones pacientes, esperimentos pequeños y proyeutos útiles.",
    promiseLabel: "El nuesu compromisu",
    promise: "Esplicar la teunoloxía ensin facete sentir mal por nun conocela entá.",
    asideNote: "Cuadernu abiertu · 01",
    missionStatus: "Trabayu en cursu",
    missionIndex: "01 / 03",
    missionLabel: "Misión actual",
    missionTitle: "Construyir un primer camín pa deprender IA ensin fumu.",
    missionDescription: "Preparamos recursos que dixebren lo que sabemos, lo que podemos comprobar y lo que tovía ye una entruga.",
    progressLabel: "Progresu: primer etapa",
    progressCaption: "Primer etapa · Páxina d'aniciu",
    activityLogLabel: "Nel rexistru",
    activityLogDate: "10 ago 2026",
    activityLogEntry: "Sprint 001 · Páxina d'aniciu",
    startMarker: "Primer pasu",
    startEyebrow: "Diez minutos, una entruga",
    startTitle: "Entama mirando una respuesta con otros güeyos.",
    startDescription: "Nun precises instalar nada nin tener una cuenta. Namás una entruga que conozas bastante bien la respuesta.",
    activityTag: "Actividá curtia",
    activityTime: "10 min",
    activityTitle: "¿Pue una IA sonar segura y tar equivocada?",
    firstResource: "Primer recursu",
    resourceTitle: "¿Qué ye un LLM?",
    resourceStatus: "En desendolcu →",
    activitySteps: [
      "Escríbe-y a una IA una entruga sobre daqué que conozas.",
      "Llee la respuesta y marca una frase que comprobaríes.",
      "Busca esa frase nuna fonte que puedas identificar.",
    ],
    activityClose: "La meta nun ye acertar: ye deprender a entrugar «¿cómo lo sé?». ",
    routesEyebrow: "Tres maneres de siguir",
    routesTitle: "Escueye una puerta d'entrada.",
    routes: [
      { number: "01", name: "IA ensin fumu", description: "Entiende qué fai una IA xenerativa, onde pue fallar y cómo comprobar les sos respuestes." },
      { number: "02", name: "Programar ensin mieu", description: "Entama a lleer y escribir códigu con problemes pequeños, llinguaxe normal y espaciu pa equivocase." },
      { number: "03", name: "Aprender a aprender", description: "Atopa una manera sostenible de prauticar, facer entrugues y reconocer los tos avances." },
    ],
    closingEyebrow: "Una idea pa llevar contigo",
    closingTitle: "Nun tienes que sabelo too pa entamar.",
    closingDescription: "Equí cada esplicación dexa una acción pequeña. Vuelve cuando quieras, guarda les tos entrugues y construyi criteriu al to ritmu.",
    footerTagline: "Aprender teunoloxía, ensin priesa nin vergüenza.",
    footerCredit: "Col impulsu de Natalia Camero Carreño",
  },
};

export const resourceSource: ResourceCopy = {
  languageSelectorLabel: "Idioma",
  languageActive: "actual",
  backLink: "← Volver a Natural Learning",
  category: "IA sin humo",
  status: "En desarrollo",
  title: "¿Qué es un LLM?",
  intro: "Una explicación sencilla de los modelos de lenguaje grandes: qué hacen, qué no hacen y cómo empezar a entenderlos sin humo.",
  learningLabel: "Primer aprendizaje",
  statusTitle: "Este recurso está en desarrollo.",
  statusDescription: "Estamos en fase de investigación del tema para transformarlo en algo comestible.",
  outlineTitle: "Cómo será la lección",
  outline: [
    "Explicarlo fácil, sin tecnicismos innecesarios.",
    "Probar una idea con un ejemplo pequeño.",
    "Predecir qué ocurrirá antes de comprobarlo.",
    "Explicarlo de vuelta con tus propias palabras.",
    "Terminar con un miniquiz y fuentes verificables.",
  ],
  nextLink: "Ver las rutas de aprendizaje →",
};

export const resourceTranslations: Record<Exclude<Locale, "es">, DeepPartial<ResourceCopy>> = {
  en: {
    languageSelectorLabel: "Language",
    languageActive: "current",
    backLink: "← Back to Natural Learning",
    category: "AI without the hype",
    status: "In development",
    title: "What is an LLM?",
    intro: "A simple explanation of large language models: what they do, what they do not do, and how to begin understanding them without the hype.",
    learningLabel: "First lesson",
    statusTitle: "This resource is in development.",
    statusDescription: "We are researching the topic before turning it into something you can work through.",
    outlineTitle: "What the lesson will be like",
    outline: [
      "Explain it simply, without unnecessary jargon.",
      "Try an idea with a small example.",
      "Predict what will happen before checking.",
      "Explain it back in your own words.",
      "Finish with a mini-quiz and verifiable sources.",
    ],
    nextLink: "See the learning paths →",
  },
  fr: {
    languageSelectorLabel: "Langue",
    languageActive: "actuelle",
    backLink: "← Retour à Natural Learning",
    category: "IA sans poudre aux yeux",
    status: "En développement",
    title: "Qu’est-ce qu’un LLM ?",
    intro: "Une explication simple des grands modèles de langage : ce qu’ils font, ce qu’ils ne font pas et comment commencer à les comprendre sans battage.",
    learningLabel: "Premier apprentissage",
    statusTitle: "Cette ressource est en développement.",
    statusDescription: "Nous sommes en phase de recherche sur le sujet avant d’en faire une leçon à parcourir.",
    outlineTitle: "Voici comment sera la leçon",
    outline: [
      "L’expliquer simplement, sans jargon inutile.",
      "Tester une idée avec un petit exemple.",
      "Prédire ce qui va se passer avant de vérifier.",
      "L’expliquer à votre tour avec vos propres mots.",
      "Terminer par un mini-quiz et des sources vérifiables.",
    ],
    nextLink: "Voir les parcours d’apprentissage →",
  },
  ast: {
    languageSelectorLabel: "Llingua",
    languageActive: "actual",
    backLink: "← Volver a Natural Learning",
    category: "IA ensin fumu",
    status: "En desendolcu",
    title: "¿Qué ye un LLM?",
    intro: "Una esplicación cenciella de los grandes modelos de llinguaxe: qué faen, qué nun faen y cómo entamar a entendelos ensin fumu.",
    learningLabel: "Primer aprendizaxe",
    statusTitle: "Esti recursu ta en desendolcu.",
    statusDescription: "Tamos na fase d'investigación del tema antes de convertilu nuna lleición que puedas facer.",
    outlineTitle: "Cómo va ser la lleición",
    outline: [
      "Esplicalo fácil, ensin tecnicismos innecesarios.",
      "Probar una idea con un exemplu pequeño.",
      "Predicir qué va pasar antes de comprobalo.",
      "Esplicalo de vuelta coles tos propies pallabres.",
      "Acabar con un miniquiz y fontes verificables.",
    ],
    nextLink: "Ver les rutes d'aprendizaxe →",
  },
};

function mergeWithSource<T>(source: T, translation: DeepPartial<T> | undefined): T {
  if (typeof source === "string") {
    return (typeof translation === "string" ? translation : source) as T;
  }

  if (Array.isArray(source)) {
    return (source.map((item, index) =>
      mergeWithSource(item, Array.isArray(translation) ? translation[index] : undefined),
    ) as T);
  }

  if (typeof source === "object" && source !== null) {
    const result = { ...source } as Record<string, unknown>;
    const partial = translation as Record<string, unknown> | undefined;
    for (const key of Object.keys(source)) {
      result[key] = mergeWithSource(
        (source as Record<string, unknown>)[key],
        partial?.[key] as never,
      );
    }
    return result as T;
  }

  return source;
}

export function getHomeCopy(locale: Locale): HomeCopy {
  return mergeWithSource(homeSource, locale === "es" ? undefined : homeTranslations[locale]);
}

export function getResourceCopy(locale: Locale): ResourceCopy {
  return mergeWithSource(
    resourceSource,
    locale === "es" ? undefined : resourceTranslations[locale],
  );
}

export function localeFromPath(locale: string | undefined): Locale {
  if (locale === "en" || locale === "fr" || locale === "ast") {
    return locale;
  }
  return "es";
}

export function hrefFor(locale: Locale, surface: Surface): string {
  const prefix = locale === "es" ? "" : `/${locale}`;
  return surface === "home"
    ? prefix || "/"
    : `${prefix}/ia-sin-humo/que-es-un-llm`;
}

export function metadataFor(locale: Locale, surface: Surface) {
  const metadata = {
    es: {
      home: {
        title: "Natural Learning — Aprende tecnología sin miedo",
        description: "Una biblioteca tranquila para aprender programación e inteligencia artificial, con explicaciones claras y experimentos pequeños.",
      },
      resource: {
        title: "¿Qué es un LLM? — Natural Learning",
        description: "Primer recurso en desarrollo de la ruta IA sin humo de Natural Learning.",
      },
    },
    en: {
      home: {
        title: "Natural Learning — Learn technology without fear",
        description: "A calm library for learning programming and artificial intelligence through clear explanations and small experiments.",
      },
      resource: {
        title: "What is an LLM? — Natural Learning",
        description: "The first resource in Natural Learning’s AI without the hype path, currently in development.",
      },
    },
    fr: {
      home: {
        title: "Natural Learning — Apprendre la technologie sans peur",
        description: "Une bibliothèque calme pour apprendre la programmation et l’intelligence artificielle avec des explications claires et de petites expériences.",
      },
      resource: {
        title: "Qu’est-ce qu’un LLM ? — Natural Learning",
        description: "La première ressource du parcours IA sans poudre aux yeux de Natural Learning, en développement.",
      },
    },
    ast: {
      home: {
        title: "Natural Learning — Aprende teunoloxía ensin mieu",
        description: "Una biblioteca tranquila pa deprender programación ya intelixencia artificial con esplicaciones clares y esperimentos pequeños.",
      },
      resource: {
        title: "¿Qué ye un LLM? — Natural Learning",
        description: "El primer recursu de la ruta IA ensin fumu de Natural Learning, en desendolcu.",
      },
    },
  } satisfies Record<Locale, Record<Surface, { title: string; description: string }>>;

  return metadata[locale][surface];
}
