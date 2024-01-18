import { FaqQuestion } from './faq-question';
export interface FaqCategory {
  "category_id": number;
  "category_description": string;
  "image_url": string;
  "questions": FaqQuestion[]

}

