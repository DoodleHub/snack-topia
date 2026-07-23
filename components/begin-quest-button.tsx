"use client";

import { useRouter } from "next/navigation";
import { useQuiz } from "@/lib/quiz-context";

export function BeginQuestButton() {
  const router = useRouter();
  const { resetQuiz } = useQuiz();

  function handleClick() {
    resetQuiz();
    router.push("/quiz/1");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-linear-to-r from-[#7c3aed] to-[#c084fc] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:scale-105 hover:from-[#c084fc] hover:to-[#7c3aed] hover:shadow-xl hover:shadow-[#7c3aed]/40 active:scale-100"
    >
      Start
      <span aria-hidden>→</span>
    </button>
  );
}
