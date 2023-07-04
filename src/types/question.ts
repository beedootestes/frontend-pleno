import { Answer } from "./answer.ts";

export type Question = {
  beetcoins: Number,
  id: Number,
  text: String,
  parent_id: Number,
  alternatives: Array<Answer>
}