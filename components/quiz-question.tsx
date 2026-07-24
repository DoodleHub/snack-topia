"use client";

import Image from "next/image";
import Link from "next/link";
import type { QuizQuestionItem } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuiz } from "@/lib/quiz-context";
import { Footer } from "@/components/footer";

type QuizQuestionProps = {
  question: QuizQuestionItem;
  totalQuestions: number;
};

export function QuizQuestion({ question, totalQuestions }: QuizQuestionProps) {
  const router = useRouter();
  const { recordAnswer, answers } = useQuiz();
  const savedAnswer = answers[question.id];
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
    savedAnswer?.optionId ?? null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = ((question.id - 1) / totalQuestions) * 100;
  const previousProgress =
    question.id > 1 ? ((question.id - 2) / totalQuestions) * 100 : progress;
  const [barWidth, setBarWidth] = useState(previousProgress);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setBarWidth(progress));
    return () => cancelAnimationFrame(frame);
  }, [progress]);

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
    <div className="scrollbar-hide relative flex h-dvh flex-col items-center overflow-y-auto bg-[#0f0618] pb-4 pt-4 sm:pb-6 sm:pt-6">
      <div aria-hidden className="fixed inset-0 overflow-hidden">
        <Image
          src="/images/questions/quiz-background.PNG"
          alt=""
          fill
          priority
          className="object-cover brightness-[0.7] saturate-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#1a0a2e]/50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      <main className="relative z-10 flex w-full max-w-4xl flex-1 flex-col px-6">
        <div className="mb-6 flex w-full flex-wrap items-center justify-between gap-4 sm:mb-8">
          <Link href="/" className="group flex w-fit items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[radial-gradient(circle,_#fde68a_0%,_#f7c948_55%,_#ff8a3d_100%)] shadow-[0_0_24px_6px_rgba(247,201,72,0.35)] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
              <span className="text-lg text-[#3a1b52]">✦</span>
            </div>
            <span className="text-base font-bold text-[#fdf6ec] transition-colors group-hover:text-[#c4b5fd] sm:text-lg">
              Snacktopia
            </span>
          </Link>
          <span className="rounded-full border border-white/15 bg-[#1a0a2e]/60 px-5 py-2.5 text-xs font-bold text-[#fdf6ec] backdrop-blur-sm sm:text-sm">
            Night Market Edition
          </span>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col">
          <div className="rounded-[32px] border border-white/10 bg-[#1a0a2e]/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-10">
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-[#fdf6ec] sm:text-base">
                  Question {question.id} of {totalQuestions}
                </span>
                <span className="text-sm font-bold text-[#c9bcd9] sm:text-base">
                  {Math.round(progress)}% explored
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#f472b6] via-[#f7c948] to-[#ff8a3d] transition-[width] duration-700 ease-out"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#f9a8d4] sm:text-sm">
              {question.title}
            </p>
            <h1 className="mb-8 text-2xl font-extrabold leading-tight text-[#fdf6ec] sm:text-3xl md:text-4xl">
              {question.question}
            </h1>

            <fieldset className="flex flex-col gap-4">
              <legend className="sr-only">{question.question}</legend>
              {question.options.map((option) => {
                const isSelected = selectedOptionId === option.id;

                return (
                  <label
                    key={option.id}
                    className={`group flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                      isSelected
                        ? "border-[#f7c948] bg-[rgba(247,180,40,0.12)] shadow-[0_0_0_1px_rgba(247,201,72,0.4),0_0_20px_2px_rgba(247,180,40,0.35),0_0_48px_8px_rgba(247,150,20,0.18)]"
                        : "border-white/10 bg-white/5 hover:border-[#f7c948]/50 hover:bg-[rgba(247,180,40,0.06)] hover:shadow-[0_0_16px_2px_rgba(247,180,40,0.12)]"
                    } ${isSubmitting ? "pointer-events-none" : ""}`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={isSelected}
                      onChange={() => handleSelectOption(option.id)}
                      onClick={() => {
                        if (isSelected) handleSelectOption(option.id);
                      }}
                      disabled={isSubmitting}
                      className="sr-only"
                    />
                    <span
                      className={`select-none text-base leading-relaxed ${
                        isSelected ? "text-[#ffe9b0]" : "text-[#d4c4e8]"
                      }`}
                    >
                      {option.text}
                    </span>
                  </label>
                );
              })}
            </fieldset>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
