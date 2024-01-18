import { FaqAnswerHeader } from "./faq-answer-header";

export interface FaqQuestion {
  "question_id": number;
  "question_bul_num": number;
  "the_question": string;
  "image_name": string;
  "category_id": number;
  "image_path": string;
  "ans_headers": FaqAnswerHeader[];
}
