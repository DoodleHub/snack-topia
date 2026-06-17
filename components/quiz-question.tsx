"use client";

import type { QuizQuestionItem } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuiz } from "@/lib/quiz-context";

type QuizQuestionProps = {
  question: QuizQuestionItem;
  totalQuestions: number;
};

export function QuizQuestion({ question, totalQuestions }: QuizQuestionProps) {
  const router = useRouter();
  const { recordAnswer } = useQuiz();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = (question.id / totalQuestions) * 100;

  function handleSubmit() {
    if (!selectedOptionId || isSubmitting) return;

    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    );
    if (!selectedOption) return;

    setIsSubmitting(true);
    recordAnswer(question.id, selectedOptionId, selectedOption.weights);

    if (question.id < totalQuestions) {
      router.push(`/quiz/${question.id + 1}`);
    } else {
      router.push("/results");
    }
  }

  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#0f0618] px-6 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#7c3aed20_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_#ff6b3515_0%,_transparent_50%)]"
      />

      <main className="relative z-10 flex w-full max-w-2xl flex-col">
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-medium tracking-wide text-[#a78bfa]">
              Question {question.id}
            </span>
            <span className="text-[#6b5b7b]">of {totalQuestions}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#1a0a2e]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] via-[#c084fc] to-[#f7c948] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-[#c084fc]/20 bg-[#1a0a2e]/80 p-8 shadow-2xl shadow-[#7c3aed]/10 backdrop-blur-sm sm:p-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#f7c948]/80">
            Your path unfolds
          </p>
          <h1 className="text-xl font-semibold leading-snug text-[#e9d5ff] sm:text-2xl">
            {question.question}
          </h1>
        </div>

        <fieldset className="mb-10 flex flex-col gap-3">
          <legend className="sr-only">{question.question}</legend>
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <label
                key={option.id}
                className={`group flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all sm:p-5 ${
                  isSelected
                    ? "border-[#f7c948]/60 bg-[#f7c948]/10 shadow-lg shadow-[#f7c948]/10"
                    : "border-[#c084fc]/20 bg-[#1a0a2e]/50 hover:border-[#c084fc]/40 hover:bg-[#1a0a2e]/80"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={isSelected}
                  onChange={() => setSelectedOptionId(option.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                    isSelected
                      ? "border-[#f7c948] bg-[#f7c948] text-[#1a0a2e]"
                      : "border-[#c084fc]/40 text-[#a78bfa] group-hover:border-[#c084fc]"
                  }`}
                >
                  {option.id.toUpperCase()}
                </span>
                <span
                  className={`text-base leading-relaxed ${
                    isSelected ? "text-[#fff5e6]" : "text-[#d4c4e8]"
                  }`}
                >
                  {option.text}
                </span>
              </label>
            );
          })}
        </fieldset>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!selectedOptionId || isSubmitting}
          className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7c948] px-8 py-4 text-lg font-semibold text-[#1a0a2e] shadow-lg shadow-[#ff6b35]/25 transition-all hover:scale-105 hover:from-[#f7c948] hover:to-[#ff6b35] hover:shadow-xl hover:shadow-[#ff6b35]/35 active:scale-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          {question.id < totalQuestions ? "Continue" : "Reveal My Spirit"}
          <span aria-hidden>→</span>
        </button>
      </main>
    </div>
  );
}
