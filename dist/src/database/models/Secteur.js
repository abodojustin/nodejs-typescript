"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecteurModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Secteur";
exports.COLLECTION_NAME = "secteurs";
const schema = new mongoose_1.Schema({
    code_secteur: String,
    name_secteur: String,
});
exports.SecteurModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
