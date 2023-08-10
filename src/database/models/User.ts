import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/User";

export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";

const schema = new Schema({
  name: String,
  first_name: String,
  last_name: String,
  title: String,
  function: String,
  phone_number: Number,
  date_naiss: String,
  gender: String,
  language: String,
  name_enterprise: String,
  email: String,
  password: String,
});

export const UserModel = model<IUser>(DOCUMENT_NAME, schema, COLLECTION_NAME);
