import { Schema, model } from "mongoose";
import { IOrganisation } from "../interfaces/Organisation";

export const DOCUMENT_NAME = "Organisation";
export const COLLECTION_NAME = "organisations";

const schema = new Schema({
  short_code_org: String,
  code: String,
  address_1: String,
  address_2: String,
  address_3: String,
  code_postal: String,
  ville: String,
  country: String,
  code_pays: String,
  tva: String,
  url_site_web: String,
  tel_admin: Number,
  email_compta: String,
  type_organisation: String,
  total_employe: Number,
  langue: String,
  type_organigramme: String,
  date_DEBUT: Date,
  date_FIN: Date,
  role: String,
  logo: String,
  id_menu: String,
  id_color_type: String,
  nbre_niveau_hierarchique: Number,
});

export const OrganisationModel = model<IOrganisation>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
