import { Schema, model } from "mongoose";
import { IThemeZone } from "../interfaces/ThemeZone";

export const DOCUMENT_NAME = "ThemeZone";
export const COLLECTION_NAME = "themeZones";

const schema = new Schema({
  percentage: Number,
});

export const ThemeZoneModel = model<IThemeZone>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
