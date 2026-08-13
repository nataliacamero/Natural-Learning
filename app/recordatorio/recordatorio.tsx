"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import styles from "./recordatorio.module.css";

const STORAGE_KEY = "natural-learning-recordatorio-v1";

const routes = [
  {
    number: "01",
    name: "IA sin humo",
    description: "Entender qué hace una IA y cómo comprobar lo que dice.",
  },
  {
    number: "02",
    name: "Programar sin miedo",
    description: "Practicar con código pequeño, preguntas claras y paciencia.",
  },
  {
    number: "03",
    name: "Aprender a aprender",
    description: "Construir una forma sostenible de practicar y revisar.",
  },
];

const weeks = [
  "Escribe qué quieres entender y por qué te importa.",
  "Busca una explicación sencilla y anota una pregunta nueva.",
  "Haz un experimento pequeño con esa idea.",
  "Describe con tus palabras qué creías que iba a pasar.",
  "Comprueba una afirmación en una fuente identificable.",
  "Repite el experimento cambiando una sola cosa.",
  "Guarda un ejemplo que puedas volver a mirar.",
  "Explica la idea en voz alta sin leer tus notas.",
  "Encuentra un límite, una excepción o algo que aún no sepas.",
  "Produce algo breve: una nota, un programa o un esquema.",
  "Pide una revisión y separa hechos de interpretaciones.",
  "Cuenta qué aprendiste y elige el siguiente paso.",
];

type Checklist = boolean[];

function emptyChecklist(): Checklist {
  return weeks.map(() => false);
}

function validChecklist(value: unknown): value is Checklist {
  return (
    Array.isArray(value) &&
    value.length === weeks.length &&
    value.every((item) => typeof item === "boolean")
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function Recordatorio() {
  const [checked, setChecked] = useState<Checklist>(emptyChecklist);
  const [hydrated, setHydrated] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadProgress = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (validChecklist(parsed)) {
            setChecked(parsed);
          }
        }
      } catch {
        // El recordatorio sigue siendo útil aunque el navegador bloquee el almacenamiento.
      } finally {
        setHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(loadProgress);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    }
  }, [checked, hydrated]);

  function toggleWeek(index: number) {
    setChecked((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? !item : item)),
    );
    setMessage("");
  }

  function resetChecklist() {
    setChecked(emptyChecklist());
    setMessage("Checklist reiniciado.");
  }

  function exportProgress() {
    const file = new Blob([JSON.stringify({ checklist: checked }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "natural-learning-recordatorio.json";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Progreso exportado.");
  }

  function importProgress(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed: unknown = JSON.parse(String(reader.result));
        if (
          !isRecord(parsed) ||
          Object.keys(parsed).length !== 1 ||
          !Object.prototype.hasOwnProperty.call(parsed, "checklist") ||
          !validChecklist(parsed.checklist)
        ) {
          throw new Error("Formato no válido");
        }
        setChecked(parsed.checklist);
        setMessage("Progreso importado.");
      } catch {
        setMessage("No se pudo importar: el archivo no tiene un formato válido.");
      }
    };
    reader.readAsText(file);
  }

  const completed = checked.filter(Boolean).length;

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Natural Learning, inicio">
          <span className={styles.brandMark} aria-hidden="true">N L</span>
          <span>Natural Learning</span>
        </Link>
        <nav className={styles.nav} aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link className={styles.current} href="/recordatorio" aria-current="page">
            Recordatorio
          </Link>
        </nav>
      </header>

      <main>
        <section className={styles.intro} aria-labelledby="recordatorio-title">
          <div>
            <p className={styles.eyebrow}>Cuaderno local · volver al camino</p>
            <h1 id="recordatorio-title">Aprender también es volver.</h1>
            <p className={styles.lead}>
              Este recordatorio guarda tus casillas solo en este navegador. No
              necesitas una cuenta: vuelve, mira dónde estás y haz un paso pequeño.
            </p>
          </div>
          <aside className={styles.now} aria-label="Próxima acción">
            <p className={styles.meta}>AHORA</p>
            <p className={styles.nowAction}>Elige una semana y haz su acción durante diez minutos.</p>
          </aside>
        </section>

        <section className={styles.knowledge} aria-labelledby="factory-title">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>El método</span>
          </div>
          <div>
            <h2 id="factory-title">La fábrica de conocimiento</h2>
            <p>
              Una pregunta o una idea entra en la fábrica. La transformas con
              práctica: pruebas, comparas y escribes qué observas. Después
              compruebas una parte en una fuente que puedas identificar.
            </p>
            <div className={styles.factorySteps}>
              <div><strong>Entra</strong><span>una pregunta concreta</span></div>
              <div><strong>Se transforma</strong><span>con práctica y ejemplos</span></div>
              <div><strong>Se comprueba</strong><span>con evidencia, no con intuición</span></div>
              <div><strong>Sale</strong><span>una explicación o algo que produces</span></div>
            </div>
          </div>
        </section>

        <section className={styles.routes} aria-labelledby="routes-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Tres puertas de entrada</p>
            <h2 id="routes-title">Elige por dónde mirar hoy.</h2>
          </div>
          <div className={styles.routeGrid}>
            {routes.map((route) => (
              <article className={styles.route} key={route.name}>
                <span className={styles.routeNumber}>{route.number}</span>
                <h3>{route.name}</h3>
                <p>{route.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.mission} aria-labelledby="mission-title">
          <div className={styles.missionHeader}>
            <div>
              <p className={styles.eyebrow}>Una sola misión</p>
              <h2 id="mission-title">Misión activa: construir criterio paso a paso.</h2>
            </div>
            <p className={styles.progress}>
              {completed} de {weeks.length} semanas
            </p>
          </div>
          <p className={styles.missionIntro}>
            No es una carrera ni una promesa de resultados. Es un recorrido para
            practicar, comprobar y poder explicar un poco más que antes.
          </p>
          <ol className={styles.checklist}>
            {weeks.map((week, index) => (
              <li key={week} className={checked[index] ? styles.done : undefined}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked[index]}
                    onChange={() => toggleWeek(index)}
                    aria-label={`Semana ${index + 1}: ${week}`}
                  />
                  <span className={styles.weekNumber}>Semana {index + 1}</span>
                  <span>{week}</span>
                </label>
              </li>
            ))}
          </ol>
          <div className={styles.missionActions}>
            <button type="button" className={styles.reset} onClick={resetChecklist}>
              Reiniciar checklist
            </button>
            <div className={styles.fileActions}>
              <button type="button" className={styles.secondary} onClick={exportProgress}>
                Exportar JSON
              </button>
              <label className={styles.secondary}>
                Importar JSON
                <input type="file" accept="application/json,.json" onChange={importProgress} />
              </label>
            </div>
          </div>
          <p className={styles.status} aria-live="polite">{message}</p>
        </section>

        <section className={styles.start} aria-labelledby="start-title">
          <div>
            <p className={styles.eyebrow}>Para empezar hoy</p>
            <h2 id="start-title">Tres tareas, sin preparar una vida nueva.</h2>
          </div>
          <ol>
            <li>Escoge una pregunta que puedas formular en una frase.</li>
            <li>Haz una prueba pequeña y anota lo que ocurrió.</li>
            <li>Comprueba una afirmación y cuéntasela a alguien, o escríbela.</li>
          </ol>
          <label className={styles.tomorrow}>
            <span>MAÑANA EMPIEZO HACIENDO</span>
            <input type="text" placeholder="Una acción concreta de diez minutos" />
          </label>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/">Natural Learning</Link>
        <span>Herramienta local · sin cuenta y sin sincronización</span>
      </footer>
    </div>
  );
}
