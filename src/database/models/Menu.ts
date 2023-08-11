import { Schema, model } from "mongoose";
import { IMenu } from "../interfaces/Menu";

export const DOCUMENT_NAME = "Menu";
export const COLLECTION_NAME = "menus";

const schema = new Schema({
  menu_name: String,
});

export const MenuModel = model<IMenu>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
