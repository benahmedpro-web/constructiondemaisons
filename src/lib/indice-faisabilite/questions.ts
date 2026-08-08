import questionsData from "./data/questions.json";
import type { Question, Answers } from "./types";

export const QUESTIONS = questionsData.questions as Question[];

export function isVisible(question: Question, answers: Answers): boolean {
  if (!question.condition) return true;
  const val = answers[question.condition.field];
  return typeof val === "string" && question.condition.in.includes(val);
}

export function getVisibleQuestions(answers: Answers): Question[] {
  return QUESTIONS.filter((q) => isVisible(q, answers));
}

export function findNextIndex(answers: Answers, fromIndex: number, direction: 1 | -1): number {
  let i = fromIndex;
  while (i >= 0 && i < QUESTIONS.length) {
    if (isVisible(QUESTIONS[i], answers)) return i;
    i += direction;
  }
  return i;
}
