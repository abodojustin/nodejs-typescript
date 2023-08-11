"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Categorie";
exports.COLLECTION_NAME = "categories";
const schema = new mongoose_1.Schema({
    cat_name: String,
    theme: Object,
});
exports.CategorieModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
