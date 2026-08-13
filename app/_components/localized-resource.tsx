import Link from "next/link";

import { LanguageSelector } from "@/app/_components/language-selector";
import {
  getResourceCopy,
  hrefFor,
  type Locale,
} from "@/app/_i18n/content";

import styles from "@/app/ia-sin-humo/que-es-un-llm/page.module.css";

export function LocalizedResource({ locale }: { locale: Locale }) {
  const copy = getResourceCopy(locale);

  return (
    <main className={styles.page}>
      <LanguageSelector
        locale={locale}
        surface="resource"
        label={copy.languageSelectorLabel}
        activeLabel={copy.languageActive}
      />
      <Link className={styles.backLink} href={hrefFor(locale, "home")}>
        {copy.backLink}
      </Link>

      <article className={styles.article}>
        <div className={styles.eyebrow}>
          <span>{copy.category}</span>
          <span>{copy.status}</span>
        </div>

        <h1 className={styles.title}>{copy.title}</h1>
        <p className={styles.intro}>{copy.intro}</p>

        <section className={styles.statusCard} aria-labelledby="status-title">
          <p className={styles.statusLabel}>{copy.learningLabel}</p>
          <h2 className={styles.sectionTitle} id="status-title">
            {copy.statusTitle}
          </h2>
          <p>{copy.statusDescription}</p>
        </section>

        <section className={styles.outline} aria-labelledby="outline-title">
          <h2 className={styles.sectionTitle} id="outline-title">
            {copy.outlineTitle}
          </h2>
          <ul>
            {copy.outline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <Link className={styles.nextLink} href={`${hrefFor(locale, "home")}#rutas`}>
          {copy.nextLink}
        </Link>
      </article>
    </main>
  );
}
