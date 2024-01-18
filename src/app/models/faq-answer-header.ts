import { FaqAnswer } from './faq-answer';
export interface FaqAnswerHeader {
  header_id: number;
  header_name: string;
  header_bul_num: string;
  image_name: string;
  image_path: string;
  question_id: number;
  answers: FaqAnswer[];
}
