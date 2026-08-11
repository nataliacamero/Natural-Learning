import type { Metadata } from "next";

import { NativePreviewHome } from "@/app/_components/native-preview-home";

export const metadata: Metadata = {
  title: "Diseño C — NativeLearning",
  description:
    "Preview editorial de NativeLearning: aprende programación e inteligencia artificial sin miedo.",
};

export default function DesignCPage() {
  return <NativePreviewHome variant="c" />;
}
