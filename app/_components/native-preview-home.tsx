import Link from "next/link";

import styles from "./native-preview-home.module.css";

type PreviewVariant = "c" | "d";

type NativePreviewHomeProps = {
  variant: PreviewVariant;
  preview?: boolean;
};

const routes = [
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
];

export function NativePreviewHome({
  variant,
  preview = true,
}: NativePreviewHomeProps) {
  const shellClass = `${styles.shell} ${variant === "c" ? styles.editorial : styles.dashboard}`;
  const navigation = preview
    ? [
        { label: "Inicio actual", href: "/" },
        { label: "Diseño C", href: "/design-c", variant: "c" as const },
        { label: "Diseño D", href: "/design-d", variant: "d" as const },
      ]
    : [
        { label: "Rutas", href: "#rutas" },
        { label: "Ahora", href: "#progreso" },
      ];

  return (
    <div className={shellClass}>
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="NaturalLearning, inicio"
        >
          <span className={styles.brandMark} aria-hidden="true">
            N L
          </span>
          <span>Natural Learning</span>
        </Link>

        <nav
          className={styles.nav}
          aria-label={
            preview ? "Navegación de la exploración" : "Navegación principal"
          }
        >
          {navigation.map((item) => (
            <Link
              className={item.variant === variant ? styles.current : undefined}
              href={item.href}
              key={item.label}
              aria-current={item.variant === variant ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className={styles.navStart} href="#empieza">
            Empieza aquí <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>

      {preview && (
        <div
          className={styles.edition}
          aria-label="Exploración visual del Sprint 003"
        >
          <span>Exploración visual</span>
          <span aria-hidden="true">/</span>
          <span>Sprint 003</span>
        </div>
      )}

      <main>
        <section className={styles.hero} aria-labelledby="preview-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Una biblioteca para perderle el miedo
            </p>
            <h1 id="preview-hero-title">
              La tecnología también puede explicarse <em>despacio.</em>
            </h1>
            <p className={styles.heroIntro}>
              Natural Learning ayuda a personas curiosas y principiantes a
              entender programación e inteligencia artificial con explicaciones
              pacientes, experimentos pequeños y proyectos útiles.
            </p>
            <div className={styles.promise}>
              <span className={styles.promiseLine} aria-hidden="true" />
              <div>
                <p className={styles.label}>Nuestro compromiso</p>
                <p className={styles.promiseText}>
                  Explicar tecnología sin hacerte sentir mal por no saberla aún.
                </p>
              </div>
            </div>
            <a className={styles.primaryAction} href="#empieza">
              <span>Empieza aquí</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.heroAside}>
            <p className={styles.asideNote}>Cuaderno abierto · 01</p>
            <article
              className={styles.missionCard}
              id="progreso"
              aria-labelledby="mission-title"
            >
              <div className={styles.topline}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>Trabajo en curso</span>
                <span className={styles.cardIndex}>01 / 03</span>
              </div>
              <p className={styles.label}>Misión actual</p>
              <h2 id="mission-title">
                Construir un primer camino para aprender IA sin humo.
              </h2>
              <p>
                Estamos preparando recursos que separan lo que sabemos, lo que
                podemos comprobar y lo que todavía es una pregunta.
              </p>
              <div
                className={styles.missionProgress}
                role="progressbar"
                aria-label="Progreso: primera etapa"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={33}
              >
                <span />
              </div>
              <p className={styles.progressCaption}>
                Primera etapa · Página inicial
              </p>
            </article>

            <div
              className={styles.lifeSignal}
              aria-label="Registro de actividad"
            >
              <p className={styles.label}>En el registro</p>
              <div className={styles.logEntry}>
                <span>10 ago 2026</span>
                <strong>Sprint 001 · Página inicial</strong>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.startSection}`}
          id="empieza"
          aria-labelledby="start-title"
        >
          <div className={styles.marker}>
            <span>01</span>
            <span>Primer paso</span>
          </div>
          <div className={styles.startContent}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Diez minutos, una pregunta</p>
              <h2 id="start-title">
                Empieza por mirar una respuesta con otros ojos.
              </h2>
              <p>
                No necesitas instalar nada ni tener una cuenta. Solo una
                pregunta cuya respuesta conozcas bastante bien.
              </p>
            </div>
            <div className={styles.activityCard}>
              <div className={styles.activityHeading}>
                <span className={styles.activityTag}>Actividad breve</span>
                <span className={styles.activityTime}>10 min</span>
              </div>
              <h3>¿Puede una IA sonar segura y estar equivocada?</h3>
              <ol>
                <li>Escribe a una IA una pregunta sobre algo que conozcas.</li>
                <li>Lee la respuesta y marca una frase que comprobarías.</li>
                <li>Busca esa frase en una fuente que puedas identificar.</li>
              </ol>
              <p className={styles.activityClose}>
                <span aria-hidden="true">→</span> La meta no es acertar: es
                aprender a preguntar «¿cómo lo sé?».
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.section}
          id="rutas"
          aria-labelledby="routes-title"
        >
          <div className={`${styles.sectionHeading} ${styles.routesHeading}`}>
            <p className={styles.eyebrow}>Tres formas de seguir</p>
            <h2 id="routes-title">Elige una puerta de entrada.</h2>
          </div>
          <div className={styles.routeGrid}>
            {routes.map((route) => (
              <article className={styles.routeCard} key={route.name}>
                <span className={styles.routeNumber}>{route.number}</span>
                <h3>{route.name}</h3>
                <p>{route.description}</p>
                <span className={styles.routeArrow} aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.closing}`}
          aria-labelledby="closing-title"
        >
          <div>
            <p className={styles.eyebrow}>Una idea para llevarte</p>
            <h2 id="closing-title">No tienes que saberlo todo para empezar.</h2>
          </div>
          <p>
            Aquí cada explicación deja una pequeña acción. Vuelve cuando
            quieras, guarda tus preguntas y construye criterio a tu ritmo.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Natural Learning</span>
        <span>Aprender tecnología, sin prisa y sin vergüenza.</span>
        <a
          className={styles.footerCredit}
          href="https://natalia-dev-portfolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Powered by Natalia Camero Carreño
        </a>
      </footer>
    </div>
  );
}
