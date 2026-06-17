"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CategoryWeights = Record<string, number>;

type QuizContextValue = {
  weights: CategoryWeights;
  answers: Record<number, string>;
  recordAnswer: (
    questionId: number,
    optionId: string,
    optionWeights: CategoryWeights,
  ) => void;
  resetQuiz: () => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

function mergeWeights(
  current: CategoryWeights,
  added: CategoryWeights,
): CategoryWeights {
  const next = { ...current };
  for (const [category, value] of Object.entries(added)) {
    next[category] = (next[category] ?? 0) + value;
  }
  return next;
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [weights, setWeights] = useState<CategoryWeights>({});
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const recordAnswer = useCallback(
    (questionId: number, optionId: string, optionWeights: CategoryWeights) => {
      setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
      setWeights((prev) => mergeWeights(prev, optionWeights));
    },
    [],
  );

  const resetQuiz = useCallback(() => {
    setWeights({});
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
