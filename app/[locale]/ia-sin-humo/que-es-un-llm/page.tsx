import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocalizedResource } from "@/app/_components/localized-resource";
import { locales, metadataFor, type Locale } from "@/app/_i18n/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "es").map((locale) => ({ locale }));
}

function validLocale(value: string): value is Exclude<Locale, "es"> {
  return value === "en" || value === "fr" || value === "ast";
}

export async function generateMetadata({ params }: PageProps<"/[locale]/ia-sin-humo/que-es-un-llm">): Promise<Metadata> {
  const { locale: value } = await params;
  if (!validLocale(value)) notFound();
  return metadataFor(value, "resource");
}

export default async function LocalizedResourcePage({ params }: PageProps<"/[locale]/ia-sin-humo/que-es-un-llm">) {
  const { locale: value } = await params;
  if (!validLocale(value)) notFound();
  return <LocalizedResource locale={value} />;
}
