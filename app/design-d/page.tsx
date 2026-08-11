import type { Metadata } from "next";

import { NativePreviewHome } from "@/app/_components/native-preview-home";

export const metadata: Metadata = {
  title: "Diseño D — NativeLearning",
  description:
    "Preview modular de aprendizaje de NativeLearning: aprende programación e inteligencia artificial sin miedo.",
};

export default function DesignDPage() {
  return <NativePreviewHome variant="d" />;
}
