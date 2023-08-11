import { Schema, model } from "mongoose";
import { ITheme } from "../interfaces/Theme";

export const DOCUMENT_NAME = "Theme";
export const COLLECTION_NAME = "themes";

const schema = new Schema({
  theme_name: String,
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'questions'
  }],
  menus: [{
    type: Schema.Types.ObjectId,
    ref: 'menus'
  }],
});

export const ThemeModel = model<ITheme>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);