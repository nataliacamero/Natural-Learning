import Link from "next/link";

export default function Home() {
  const routes = [
    {
      number: "01",
      name: "IA sin humo",
      description:
        "Entiende qué hace una IA generativa, dónde puede fallar y cómo comprobar sus respuestas.",
      tone: "route-coral",
    },
    {
      number: "02",
      name: "Programar sin miedo",
      description:
        "Empieza a leer y escribir código con problemas pequeños, lenguaje normal y margen para equivocarte.",
      tone: "route-blue",
    },
    {
      number: "03",
      name: "Aprender a aprender",
      description:
        "Encuentra una forma sostenible de practicar, hacer preguntas y reconocer tus avances.",
      tone: "route-green",
    },
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="NaturalLearning, inicio">
          <span className="brand-mark" aria-hidden="true">
            NL
          </span>
          <span>NaturalLearning</span>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#rutas">Rutas</a>
          <a href="#progreso">Ahora</a>
          <a className="nav-cta" href="#empieza">
            Empieza aquí <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Una biblioteca para perderle el miedo</p>
            <h1 id="hero-title">
              La tecnología también puede explicarse <em>despacio.</em>
            </h1>
            <p className="hero-intro">
              NaturalLearning ayuda a personas curiosas y principiantes a
              entender programación e inteligencia artificial con explicaciones
              pacientes, experimentos pequeños y proyectos útiles.
            </p>
            <div className="promise">
              <span className="promise-line" aria-hidden="true" />
              <div>
                <p className="label">Nuestro compromiso</p>
                <p className="promise-text">
                  Explicar tecnología sin hacerte sentir mal por no saberla aún.
                </p>
              </div>
            </div>
            <a className="primary-action" href="#empieza">
              <span>Empieza aquí</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-aside">
            <div className="aside-note">Cuaderno abierto · 01</div>
            <article className="mission-card" id="progreso">
              <div className="card-topline">
                <span className="status-dot" aria-hidden="true" />
                <span>Trabajo en curso</span>
                <span className="card-index">01 / 03</span>
              </div>
              <p className="label">Misión actual</p>
              <h2>Construir un primer camino para aprender IA sin humo.</h2>
              <p>
                Estamos preparando recursos que separan lo que sabemos, lo que
                podemos comprobar y lo que todavía es una pregunta.
              </p>
              <div className="mission-progress" aria-label="Progreso: primera etapa">
                <span />
              </div>
              <p className="progress-caption">Primera etapa · Página inicial</p>
            </article>

            <div className="life-signal" aria-label="Registro de actividad">
              <p className="label">En el registro</p>
              <div className="log-entry">
                <span>10 ago 2026</span>
                <strong>Sprint 001 · Página inicial</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="start-section section-frame" id="empieza" aria-labelledby="start-title">
          <div className="section-marker">
            <span>01</span>
            <span>Primer paso</span>
          </div>
          <div className="start-content">
            <div className="section-heading">
              <p className="eyebrow">Diez minutos, una pregunta</p>
              <h2 id="start-title">Empieza por mirar una respuesta con otros ojos.</h2>
              <p>
                No necesitas instalar nada ni tener una cuenta. Solo una
                pregunta cuya respuesta conozcas bastante bien.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-heading">
                <span className="activity-tag">Actividad breve</span>
                <span className="activity-time">10 min</span>
              </div>
              <h3>¿Puede una IA sonar segura y estar equivocada?</h3>
              <ol>
                <li>Escribe a una IA una pregunta sobre algo que conozcas.</li>
                <li>Lee la respuesta y marca una frase que comprobarías.</li>
                <li>Busca esa frase en una fuente que puedas identificar.</li>
              </ol>
              <p className="activity-close">
                <span aria-hidden="true">→</span> La meta no es acertar: es
                aprender a preguntar «¿cómo lo sé?».
              </p>
            </div>
          </div>
        </section>

        <section className="routes-section section-frame" id="rutas" aria-labelledby="routes-title">
          <div className="section-heading routes-heading">
            <p className="eyebrow">Tres formas de seguir</p>
            <h2 id="routes-title">Elige una puerta de entrada.</h2>
          </div>
          <div className="route-grid">
            {routes.map((route) => (
              <article className={`route-card ${route.tone}`} key={route.name}>
                <span className="route-number">{route.number}</span>
                <h3>{route.name}</h3>
                <p>{route.description}</p>
                <span className="route-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section section-frame" aria-labelledby="closing-title">
          <div>
            <p className="eyebrow">Una idea para llevarte</p>
            <h2 id="closing-title">No tienes que saberlo todo para empezar.</h2>
          </div>
          <p>
            Aquí cada explicación deja una pequeña acción. Vuelve cuando
            quieras, guarda tus preguntas y construye criterio a tu ritmo.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>NaturalLearning</span>
        <span>Aprender tecnología, sin prisa y sin vergüenza.</span>
      </footer>
    </div>
  );
}
