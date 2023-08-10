import { Schema, model } from "mongoose";
import { ISecteur } from "../interfaces/Secteur";

export const DOCUMENT_NAME = "Secteur";
export const COLLECTION_NAME = "secteurs";

const schema = new Schema({
  code_secteur: String,
  name_secteur: String,
});

export const SecteurModel = model<ISecteur>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
