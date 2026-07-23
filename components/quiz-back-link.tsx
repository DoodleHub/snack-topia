"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useQuiz } from "@/lib/quiz-context";
import { hasCompletedQuiz } from "@/lib/quiz-utils";

export function QuizBackLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const { weights } = useQuiz();

  if (!hasCompletedQuiz(weights)) {
    return null;
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
