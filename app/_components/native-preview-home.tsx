import Link from "next/link";

import { LanguageSelector } from "@/app/_components/language-selector";
import {
  getHomeCopy,
  hrefFor,
  type Locale,
} from "@/app/_i18n/content";

import styles from "./native-preview-home.module.css";

export function NativePreviewHome({ locale = "es" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const navigation = [
    { label: copy.navigation.routes, href: "#rutas" },
    { label: copy.navigation.now, href: "#progreso" },
  ];

  return (
    <div className={`${styles.shell} ${styles.dashboard}`}>
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href={hrefFor(locale, "home")}
          aria-label={`Natural Learning, ${copy.navigation.now.toLowerCase()}`}
        >
          <span className={styles.brandMark} aria-hidden="true">
            N L
          </span>
          <span>Natural Learning</span>
        </Link>

        <nav
          className={styles.nav}
          aria-label={copy.navigationLabel}
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
          <a className={styles.navStart} href="#empieza">
            {copy.navigation.start} <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>
      <LanguageSelector
        locale={locale}
        surface="home"
        label={copy.languageSelectorLabel}
        activeLabel={copy.languageActive}
      />

      <main>
        <section className={styles.hero} aria-labelledby="preview-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              {copy.heroEyebrow}
            </p>
            <h1 id="preview-hero-title">
              {copy.heroTitleBefore} <em>{copy.heroTitleEmphasis}</em>
            </h1>
            <p className={styles.heroIntro}>
              {copy.heroIntro}
            </p>
            <div className={styles.promise}>
              <span className={styles.promiseLine} aria-hidden="true" />
              <div>
                <p className={styles.label}>{copy.promiseLabel}</p>
                <p className={styles.promiseText}>{copy.promise}</p>
              </div>
            </div>
            <a className={styles.primaryAction} href="#empieza">
              <span>{copy.navigation.start}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.heroAside}>
            <p className={styles.asideNote}>{copy.asideNote}</p>
            <article
              className={styles.missionCard}
              id="progreso"
              aria-labelledby="mission-title"
            >
              <div className={styles.topline}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>{copy.missionStatus}</span>
                <span className={styles.cardIndex}>01 / 03</span>
              </div>
              <p className={styles.label}>{copy.missionLabel}</p>
              <h2 id="mission-title">
                {copy.missionTitle}
              </h2>
              <p>{copy.missionDescription}</p>
              <div
                className={styles.missionProgress}
                role="progressbar"
                aria-label={copy.progressLabel}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={33}
              >
                <span />
              </div>
              <p className={styles.progressCaption}>
                {copy.progressCaption}
              </p>
            </article>

            <div
              className={styles.lifeSignal}
              aria-label="Registro de actividad"
            >
                <p className={styles.label}>{copy.activityLogLabel}</p>
                <div className={styles.logEntry}>
                  <span>{copy.activityLogDate}</span>
                  <strong>{copy.activityLogEntry}</strong>
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
            <span>{copy.startMarker}</span>
          </div>
          <div className={styles.startContent}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{copy.startEyebrow}</p>
              <h2 id="start-title">{copy.startTitle}</h2>
              <p>{copy.startDescription}</p>
            </div>
            <div className={styles.activityCard}>
              <div className={styles.activityHeading}>
                <span className={styles.activityTag}>{copy.activityTag}</span>
                <span className={styles.activityTime}>{copy.activityTime}</span>
              </div>
              <h3>{copy.activityTitle}</h3>
              <Link
                className={styles.activityResource}
                href={hrefFor(locale, "resource")}
              >
                <span>{copy.firstResource}</span>
                <strong>{copy.resourceTitle}</strong>
                <em>{copy.resourceStatus}</em>
              </Link>
              <ol>
                {copy.activitySteps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <p className={styles.activityClose}>
                <span aria-hidden="true">→</span> {copy.activityClose}
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
            <p className={styles.eyebrow}>{copy.routesEyebrow}</p>
            <h2 id="routes-title">{copy.routesTitle}</h2>
          </div>
          <div className={styles.routeGrid}>
            {copy.routes.map((route) => (
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
            <p className={styles.eyebrow}>{copy.closingEyebrow}</p>
            <h2 id="closing-title">{copy.closingTitle}</h2>
          </div>
          <p>{copy.closingDescription}</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Natural Learning</span>
        <span>{copy.footerTagline}</span>
        <a
          className={styles.footerCredit}
          href="https://natalia-dev-portfolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {copy.footerCredit}
        </a>
      </footer>
    </div>
  );
}
