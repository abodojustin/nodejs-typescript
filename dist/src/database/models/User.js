"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "User";
exports.COLLECTION_NAME = "users";
const schema = new mongoose_1.Schema({
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
exports.UserModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
