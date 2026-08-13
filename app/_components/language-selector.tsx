import Link from "next/link";

import {
  hrefFor,
  type Locale,
  type Surface,
} from "@/app/_i18n/content";

const languageLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  ast: "Asturiano",
};

export function LanguageSelector({
  locale,
  surface,
  label,
  activeLabel,
}: {
  locale: Locale;
  surface: Surface;
  label: string;
  activeLabel: string;
}) {
  return (
    <nav className="language-selector" aria-label={label}>
      <span className="language-selector-label">{label}:</span>
      <ul>
        {(["es", "en", "fr", "ast"] as const).map((option) => {
          const active = option === locale;
          const optionLabel = option === "ast" && active ? "Asturianu" : languageLabels[option];

          return (
            <li key={option}>
              <Link
                href={hrefFor(option, surface)}
                aria-current={active ? "page" : undefined}
                aria-label={active ? `${optionLabel} (${activeLabel})` : optionLabel}
              >
                {optionLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
