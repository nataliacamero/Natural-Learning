import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NativePreviewHome } from "@/app/_components/native-preview-home";
import {
  locales,
  metadataFor,
  type Locale,
} from "@/app/_i18n/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "es").map((locale) => ({ locale }));
}

function validLocale(value: string): value is Exclude<Locale, "es"> {
  return value === "en" || value === "fr" || value === "ast";
}

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale: value } = await params;
  if (!validLocale(value)) notFound();
  return metadataFor(value, "home");
}

export default async function LocalizedHome({ params }: PageProps<"/[locale]">) {
  const { locale: value } = await params;
  if (!validLocale(value)) notFound();
  return <NativePreviewHome locale={value} />;
}
