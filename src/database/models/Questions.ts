import { Schema, model } from "mongoose";
import { IQuestions } from "../interfaces/Questions";

export const DOCUMENT_NAME = "Questions";
export const COLLECTION_NAME = "questions";

const schema = new Schema({
  question_name: String,
  // theme_id: String,
  color_id: String,
});

export const QuestionsModel = model<IQuestions>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
