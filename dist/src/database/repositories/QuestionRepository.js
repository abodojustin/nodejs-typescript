"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionById = exports.getQuestions = exports.createQuestion = void 0;
const Questions_1 = require("../models/Questions");
async function createQuestion(data) {
    const question = new Questions_1.QuestionsModel(data);
    const questionSaved = await question.save();
    if (questionSaved) {
        return { status: 201, message: "Question crée avec succès" };
    }
}
exports.createQuestion = createQuestion;
async function getQuestions() {
    return await Questions_1.QuestionsModel.find().populate({ path: 'color', select: 'color_name' });
}
exports.getQuestions = getQuestions;
async function getQuestionById(id) {
    return await Questions_1.QuestionsModel.findById({ _id: id });
}
exports.getQuestionById = getQuestionById;
