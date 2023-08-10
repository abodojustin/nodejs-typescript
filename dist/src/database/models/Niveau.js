"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Niveau";
exports.COLLECTION_NAME = "niveaux";
const schema = new mongoose_1.Schema({
    niv_name: String,
    type_name: String,
    id_user: String,
});
exports.NiveauModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
