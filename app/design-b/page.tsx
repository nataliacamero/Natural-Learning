import type { Metadata } from "next";

import { PreviewHome } from "@/app/_components/preview-home";

export const metadata: Metadata = {
  title: "Diseño B — NaturalLearning",
  description:
    "Exploración de estudio de aprendizaje oscuro de NaturalLearning: aprende programación e inteligencia artificial sin miedo.",
};

export default function DesignBPage() {
  return <PreviewHome variant="b" />;
}
