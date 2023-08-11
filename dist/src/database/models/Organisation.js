"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Organisation";
exports.COLLECTION_NAME = "organisations";
const schema = new mongoose_1.Schema({
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
exports.OrganisationModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
