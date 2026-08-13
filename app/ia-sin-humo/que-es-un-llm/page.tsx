import type { Metadata } from "next";
import Link from "next/link";

import { LanguageSelector } from "@/app/_components/language-selector";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "¿Qué es un LLM? — Natural Learning",
  description:
    "Primer recurso en desarrollo de la ruta IA sin humo de Natural Learning.",
};

export default function WhatIsLlmPage() {
  return (
    <main className={styles.page}>
      <LanguageSelector
        locale="es"
        surface="resource"
        label="Idioma"
        activeLabel="actual"
      />
      <Link className={styles.backLink} href="/">
        ← Volver a Natural Learning
      </Link>

      <article className={styles.article}>
        <div className={styles.eyebrow}>
          <span>IA sin humo</span>
          <span>En desarrollo</span>
        </div>

        <h1 className={styles.title}>¿Qué es un LLM?</h1>
        <p className={styles.intro}>
          Una explicación sencilla de los modelos de lenguaje grandes: qué
          hacen, qué no hacen y cómo empezar a entenderlos sin humo.
        </p>

        <section className={styles.statusCard} aria-labelledby="status-title">
          <div className={styles.illustration} aria-hidden="true">
            <svg viewBox="0 0 520 260" role="img">
              <path
                className={styles.illustrationLine}
                d="M150 210h220l-24-38H174z"
              />
              <path
                className={styles.illustrationLine}
                d="M174 172l37 28h99l36-28"
              />
              <path
                className={styles.illustrationLine}
                d="M210 200v38h100v-38"
              />
              <path
                className={styles.illustrationLine}
                d="M213 202c-18-32-2-70 30-76 25-5 44 13 39 34-4 17-24 22-38 12"
              />
              <path
                className={styles.illustrationLine}
                d="M245 172c-10-12-3-30 11-34 13-3 23 7 20 18-2 8-11 11-19 7"
              />
              <circle className={styles.illustrationCyan} cx="105" cy="75" r="25" />
              <circle className={styles.illustrationLine} cx="105" cy="75" r="10" />
              <path className={styles.illustrationLine} d="M123 93l20 20" />
              <path
                className={styles.illustrationLavender}
                d="M387 58h35v35h-35z"
              />
              <path className={styles.illustrationLine} d="M387 58l18 10 17-10M405 68v25" />
              <path
                className={styles.illustrationYellow}
                d="M340 120c0-14 12-25 26-25s26 11 26 25-12 25-26 25-26-11-26-25z"
              />
              <path className={styles.illustrationLine} d="M353 120h26M366 107v26" />
              <path className={styles.illustrationLine} d="M152 45l15-18 15 18" />
              <path className={styles.illustrationLine} d="M152 45h30" />
            </svg>
          </div>
          <p className={styles.statusLabel}>Primer aprendizaje</p>
          <h2 className={styles.sectionTitle} id="status-title">
            Este recurso está en desarrollo.
          </h2>
          <p>
            Estamos en fase de investigación del tema para transformarlo en
            algo comestible.
          </p>
        </section>

        <section className={styles.outline} aria-labelledby="outline-title">
          <h2 className={styles.sectionTitle} id="outline-title">
            Cómo será la lección
          </h2>
          <ul>
            <li>Explicarlo fácil, sin tecnicismos innecesarios.</li>
            <li>Probar una idea con un ejemplo pequeño.</li>
            <li>Predecir qué ocurrirá antes de comprobarlo.</li>
            <li>Explicarlo de vuelta con tus propias palabras.</li>
            <li>Terminar con un miniquiz y fuentes verificables.</li>
          </ul>
        </section>

        <Link className={styles.nextLink} href="/#rutas">
          Ver las rutas de aprendizaje →
        </Link>
      </article>
    </main>
  );
}
