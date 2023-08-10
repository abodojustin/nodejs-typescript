"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Theme";
exports.COLLECTION_NAME = "themes";
const schema = new mongoose_1.Schema({
    theme_name: String,
    id_question: String,
    id_menu: String,
});
exports.ThemeModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
