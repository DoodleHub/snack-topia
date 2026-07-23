"use client";

import Link from "next/link";
import { useQuiz } from "@/lib/quiz-context";
import { hasCompletedQuiz } from "@/lib/quiz-utils";

export function FindSpiritLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { weights } = useQuiz();

  if (hasCompletedQuiz(weights)) {
    return null;
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
