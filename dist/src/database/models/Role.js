"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Role";
exports.COLLECTION_NAME = "roles";
const schema = new mongoose_1.Schema({
    name_role: String,
});
exports.RoleModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
