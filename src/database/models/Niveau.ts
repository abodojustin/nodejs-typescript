import { Schema, model } from "mongoose";
import { INiveau } from "../interfaces/Niveau";

export const DOCUMENT_NAME = "Niveau";
export const COLLECTION_NAME = "niveaux";

const schema = new Schema({
  niv_name: String,
  type_name: String,
  id_user: String,
});

export const NiveauModel = model<INiveau>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
