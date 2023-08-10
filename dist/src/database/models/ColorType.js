"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorTypeModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "ColorType";
exports.COLLECTION_NAME = "colorTypes";
const schema = new mongoose_1.Schema({
    color_type: String,
    color_name: String,
});
exports.ColorTypeModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
