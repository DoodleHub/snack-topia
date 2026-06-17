"use client";

import { QuizProvider } from "@/lib/quiz-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <QuizProvider>{children}</QuizProvider>;
}
