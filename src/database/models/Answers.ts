import { Schema, model } from "mongoose";
import { IAnswers } from "../interfaces/Answers";

export const DOCUMENT_NAME = "Answer";
export const COLLECTION_NAME = "answers";

const schema = new Schema({
  value_T0: String,
  value_T1: String,
  value_T2: String,
  value_T3: String,
  value_T4: String,
  id_user: String,
  id_question: String,
});

export const AnswerModel = model<IAnswers>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
