"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Menu";
exports.COLLECTION_NAME = "menus";
const schema = new mongoose_1.Schema({
    menu_name: String,
});
exports.MenuModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
