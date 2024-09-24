import type { Question } from "./Question";
export type Test = {
  id: string;
  title: string;
  descripton?: string | null;
  author: string;
  questions: Question[];
};