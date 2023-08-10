"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Answer";
exports.COLLECTION_NAME = "answers";
const schema = new mongoose_1.Schema({
    value_T0: String,
    value_T1: String,
    value_T2: String,
    value_T3: String,
    value_T4: String,
    id_user: String,
    id_question: String,
});
exports.AnswerModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
