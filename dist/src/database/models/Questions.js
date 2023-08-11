"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Questions";
exports.COLLECTION_NAME = "questions";
const schema = new mongoose_1.Schema({
    question_name: String,
    // theme_id: String,
    color: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'colorTypes'
    },
});
exports.QuestionsModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
