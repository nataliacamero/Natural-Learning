import Link from "next/link";

type PreviewVariant = "a" | "b";

type PreviewHomeProps = {
  variant: PreviewVariant;
};

const routes = [
  {
    number: "01",
    name: "IA sin humo",
    description:
      "Entiende qué hace una IA generativa, dónde puede fallar y cómo comprobar sus respuestas.",
    tone: "preview-route-coral",
  },
  {
    number: "02",
    name: "Programar sin miedo",
    description:
      "Empieza a leer y escribir código con problemas pequeños, lenguaje normal y margen para equivocarte.",
    tone: "preview-route-blue",
  },
  {
    number: "03",
    name: "Aprender a aprender",
    description:
      "Encuentra una forma sostenible de practicar, hacer preguntas y reconocer tus avances.",
    tone: "preview-route-green",
  },
];

const navigation = [
  { label: "Inicio actual", href: "/" },
  { label: "Diseño A", href: "/design-a", variant: "a" as const },
  { label: "Diseño B", href: "/design-b", variant: "b" as const },
];

export function PreviewHome({ variant }: PreviewHomeProps) {
  return (
    <div className={`preview-shell preview-${variant}`}>
      <header className="preview-header">
        <Link className="preview-brand" href="/" aria-label="NaturalLearning, inicio">
          <span className="preview-brand-mark" aria-hidden="true">
            NL
          </span>
          <span>NaturalLearning</span>
        </Link>

        <nav className="preview-nav" aria-label="Navegación de la exploración">
          {navigation.map((item) => (
            <Link
              className={item.variant === variant ? "preview-current" : undefined}
              href={item.href}
              key={item.label}
              aria-current={item.variant === variant ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="preview-nav-start" href="#empieza">
            Empieza aquí <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>

      <div className="preview-edition" aria-label="Exploración visual del Sprint 002">
        <span>Exploración visual</span>
        <span aria-hidden="true">/</span>
        <span>Sprint 002</span>
      </div>

      <main>
        <section className="preview-hero" aria-labelledby="preview-hero-title">
          <div className="preview-hero-copy">
            <p className="preview-eyebrow">Una biblioteca para perderle el miedo</p>
            <h1 id="preview-hero-title">
              La tecnología también puede explicarse <em>despacio.</em>
            </h1>
            <p className="preview-hero-intro">
              NaturalLearning ayuda a personas curiosas y principiantes a entender programación e
              inteligencia artificial con explicaciones pacientes, experimentos pequeños y
              proyectos útiles.
            </p>
            <div className="preview-promise">
              <span className="preview-promise-line" aria-hidden="true" />
              <div>
                <p className="preview-label">Nuestro compromiso</p>
                <p className="preview-promise-text">
                  Explicar tecnología sin hacerte sentir mal por no saberla aún.
                </p>
              </div>
            </div>
            <a className="preview-primary-action" href="#empieza">
              <span>Empieza aquí</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="preview-hero-aside">
            <p className="preview-aside-note">Cuaderno abierto · 01</p>
            <article className="preview-mission-card" id="progreso" aria-labelledby="mission-title">
              <div className="preview-card-topline">
                <span className="preview-status-dot" aria-hidden="true" />
                <span>Trabajo en curso</span>
                <span className="preview-card-index">01 / 03</span>
              </div>
              <p className="preview-label">Misión actual</p>
              <h2 id="mission-title">Construir un primer camino para aprender IA sin humo.</h2>
              <p>
                Estamos preparando recursos que separan lo que sabemos, lo que podemos comprobar y
                lo que todavía es una pregunta.
              </p>
              <div
                className="preview-mission-progress"
                role="progressbar"
                aria-label="Progreso: primera etapa"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={33}
              >
                <span />
              </div>
              <p className="preview-progress-caption">Primera etapa · Página inicial</p>
            </article>

            <div className="preview-life-signal" aria-label="Registro de actividad">
              <p className="preview-label">En el registro</p>
              <div className="preview-log-entry">
                <span>10 ago 2026</span>
                <strong>Sprint 001 · Página inicial</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="preview-start-section" id="empieza" aria-labelledby="start-title">
          <div className="preview-section-marker">
            <span>01</span>
            <span>Primer paso</span>
          </div>
          <div className="preview-start-content">
            <div className="preview-section-heading">
              <p className="preview-eyebrow">Diez minutos, una pregunta</p>
              <h2 id="start-title">Empieza por mirar una respuesta con otros ojos.</h2>
              <p>
                No necesitas instalar nada ni tener una cuenta. Solo una pregunta cuya respuesta
                conozcas bastante bien.
              </p>
            </div>
            <div className="preview-activity-card">
              <div className="preview-activity-heading">
                <span className="preview-activity-tag">Actividad breve</span>
                <span className="preview-activity-time">10 min</span>
              </div>
              <h3>¿Puede una IA sonar segura y estar equivocada?</h3>
              <ol>
                <li>Escribe a una IA una pregunta sobre algo que conozcas.</li>
                <li>Lee la respuesta y marca una frase que comprobarías.</li>
                <li>Busca esa frase en una fuente que puedas identificar.</li>
              </ol>
              <p className="preview-activity-close">
                <span aria-hidden="true">→</span> La meta no es acertar: es aprender a preguntar
                «¿cómo lo sé?».
              </p>
            </div>
          </div>
        </section>

        <section className="preview-routes-section" id="rutas" aria-labelledby="routes-title">
          <div className="preview-section-heading preview-routes-heading">
            <p className="preview-eyebrow">Tres formas de seguir</p>
            <h2 id="routes-title">Elige una puerta de entrada.</h2>
          </div>
          <div className="preview-route-grid">
            {routes.map((route) => (
              <article className={`preview-route-card ${route.tone}`} key={route.name}>
                <span className="preview-route-number">{route.number}</span>
                <h3>{route.name}</h3>
                <p>{route.description}</p>
                <span className="preview-route-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="preview-closing-section" aria-labelledby="closing-title">
          <div>
            <p className="preview-eyebrow">Una idea para llevarte</p>
            <h2 id="closing-title">No tienes que saberlo todo para empezar.</h2>
          </div>
          <p>
            Aquí cada explicación deja una pequeña acción. Vuelve cuando quieras, guarda tus
            preguntas y construye criterio a tu ritmo.
          </p>
        </section>
      </main>

      <footer className="preview-footer">
        <span>NaturalLearning</span>
        <span>Aprender tecnología, sin prisa y sin vergüenza.</span>
      </footer>
    </div>
  );
}
