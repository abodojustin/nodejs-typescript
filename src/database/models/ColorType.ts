import { Schema, model } from "mongoose";
import { IColorType } from "../interfaces/ColorType";

export const DOCUMENT_NAME = "ColorType";
export const COLLECTION_NAME = "colorTypes";

const schema = new Schema({
  color_type: String,
  color_name: String,
});

export const ColorTypeModel = model<IColorType>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
