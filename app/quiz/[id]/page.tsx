import { notFound } from "next/navigation";
import { QuizQuestion } from "@/components/quiz-question";
import { QUIZ_QUESTIONS } from "@/lib/constants";

type QuizPageProps = {
  params: Promise<{ id: string }>;
};

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;
  const questionId = Number.parseInt(id, 10);
  const question = QUIZ_QUESTIONS.questions.find((q) => q.id === questionId);

  if (!question || Number.isNaN(questionId)) {
    notFound();
  }

  const imageId = String(question.id).padStart(2, "0");
  const imageUrl = `/images/questions/snacktopia_${imageId}.png`;

  return (
    <QuizQuestion
      key={question.id}
      question={question}
      totalQuestions={QUIZ_QUESTIONS.questions.length}
      imageUrl={imageUrl}
    />
  );
}
