"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { SpiritId, SpiritWeights } from "@/lib/constants";

export type CategoryWeights = SpiritWeights;

export type QuizAnswer = {
  optionId: string;
  weights: CategoryWeights;
};

type QuizContextValue = {
  weights: CategoryWeights;
  answers: Record<number, QuizAnswer>;
  recordAnswer: (
    questionId: number,
    optionId: string,
    optionWeights: CategoryWeights,
  ) => void;
  resetQuiz: () => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

function computeWeightsFromAnswers(
  answers: Record<number, QuizAnswer>,
): CategoryWeights {
  const weights: CategoryWeights = {};

  for (const answer of Object.values(answers)) {
    for (const [category, value] of Object.entries(answer.weights)) {
      const spiritId = category as SpiritId;
      weights[spiritId] = (weights[spiritId] ?? 0) + value;
    }
  }

  return weights;
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, QuizAnswer>>({});

  const weights = useMemo(
    () => computeWeightsFromAnswers(answers),
    [answers],
  );

  const recordAnswer = useCallback(
    (questionId: number, optionId: string, optionWeights: CategoryWeights) => {
      setAnswers((prev) => {
        const answerChanged = prev[questionId]?.optionId !== optionId;
        const next: Record<number, QuizAnswer> = {
          ...prev,
          [questionId]: { optionId, weights: optionWeights },
        };

        if (answerChanged) {
          for (const id of Object.keys(next)) {
            const answeredQuestionId = Number(id);
            if (answeredQuestionId > questionId) {
              delete next[answeredQuestionId];
            }
          }
        }

        return next;
      });
    },
    [],
  );

  const resetQuiz = useCallback(() => {
    setAnswers({});
  }, []);

  const value = useMemo(
    () => ({ weights, answers, recordAnswer, resetQuiz }),
    [weights, answers, recordAnswer, resetQuiz],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
