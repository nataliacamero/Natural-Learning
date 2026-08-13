import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "¿Qué es un LLM? — Natural Learning",
  description:
    "Primer recurso en desarrollo de la ruta IA sin humo de Natural Learning.",
};

export default function WhatIsLlmPage() {
  return (
    <main className={styles.page}>
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
          <p className={styles.statusLabel}>Primer aprendizaje</p>
          <h2 className={styles.sectionTitle} id="status-title">
            Este recurso está en desarrollo.
          </h2>
          <p>
            La investigación y la lección completa llegarán después. Por ahora,
            esta página marca el primer tema de la ruta y deja visible el
            siguiente paso.
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
