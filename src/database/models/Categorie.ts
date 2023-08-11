import { Schema, model } from "mongoose";
import { ICategorie } from "../interfaces/Categorie";

export const DOCUMENT_NAME = "Categorie";
export const COLLECTION_NAME = "categories";

const schema = new Schema({
  cat_name: String,
  theme: Object,
});

export const CategorieModel = model<ICategorie>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
