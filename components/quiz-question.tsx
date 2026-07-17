"use client";

import Image from "next/image";
import type { QuizQuestionItem } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuiz } from "@/lib/quiz-context";

type QuizQuestionProps = {
  question: QuizQuestionItem;
  totalQuestions: number;
  imageUrl?: string;
};

export function QuizQuestion({ question, totalQuestions, imageUrl }: QuizQuestionProps) {
  const router = useRouter();
  const { recordAnswer, answers } = useQuiz();
  const savedAnswer = answers[question.id];
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
    savedAnswer?.optionId ?? null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = (question.id / totalQuestions) * 100;

  function handleBack() {
    if (question.id > 1) {
      router.push(`/quiz/${question.id - 1}`);
    }
  }

  function handleHome() {
    router.push("/story");
  }

  function handleSelectOption(optionId: string) {
    if (isSubmitting) return;

    const selectedOption = question.options.find(
      (option) => option.id === optionId,
    );
    if (!selectedOption) return;

    setSelectedOptionId(optionId);
    setIsSubmitting(true);
    recordAnswer(question.id, optionId, selectedOption.weights);

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
        {question.id > 1 && (
          <div className="mb-6 flex w-full items-center">
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="cursor-pointer text-sm text-[#a78bfa] transition-colors hover:text-[#c4b5fd] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleHome}
              disabled={isSubmitting}
              className="ml-auto cursor-pointer text-sm text-[#a78bfa] transition-colors hover:text-[#c4b5fd] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Start Over
            </button>
          </div>
        )}

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

        {imageUrl && (
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mb-8 rounded-2xl border border-[#c084fc]/20 bg-[#1a0a2e]/80 p-8 shadow-2xl shadow-[#7c3aed]/10 backdrop-blur-sm sm:p-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#f7c948]/80">
            {question.title}
          </p>
          <h1 className="text-xl font-semibold leading-snug text-[#e9d5ff] sm:text-2xl">
            {question.question}
          </h1>
        </div>

        <fieldset className="flex flex-col gap-3">
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
                } ${isSubmitting ? "pointer-events-none" : ""}`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={isSelected}
                  onChange={() => handleSelectOption(option.id)}
                  disabled={isSubmitting}
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
      </main>
    </div>
  );
}
