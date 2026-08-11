import type { Metadata } from "next";

import { PreviewHome } from "@/app/_components/preview-home";

export const metadata: Metadata = {
  title: "Diseño A — NaturalLearning",
  description:
    "Exploración editorial suiza de NaturalLearning: aprende programación e inteligencia artificial sin miedo.",
};

export default function DesignAPage() {
  return <PreviewHome variant="a" />;
}
