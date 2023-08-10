import { Schema, model } from "mongoose";
import { IZone } from "../interfaces/Zone";

export const DOCUMENT_NAME = "Zone";
export const COLLECTION_NAME = "zones";

const schema = new Schema({
  zone_name: String,
});

export const ZoneModel = model<IZone>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
