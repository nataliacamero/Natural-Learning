import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Recordatorio } from "@/app/recordatorio/recordatorio";

export const metadata: Metadata = {
  title: "Recordatorio local — Natural Learning",
  description:
    "Un recordatorio local para volver al plan de aprendizaje de Natural Learning.",
};

export default function RecordatorioPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <Recordatorio />;
}
