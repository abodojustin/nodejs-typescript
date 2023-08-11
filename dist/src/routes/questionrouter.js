"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QuestionRepository_1 = require("../database/repositories/QuestionRepository");
const ColorTypeRepository_1 = require("../database/repositories/ColorTypeRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const color_type = await (0, ColorTypeRepository_1.getColorTypeById)(req.body.color);
    const data = {
        question_name: req.body.question_name,
        color: color_type
    };
    const question = await (0, QuestionRepository_1.createQuestion)(data);
    if ((question === null || question === void 0 ? void 0 : question.status) && (question === null || question === void 0 ? void 0 : question.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((question === null || question === void 0 ? void 0 : question.status) && (question === null || question === void 0 ? void 0 : question.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "question crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const questions = await (0, QuestionRepository_1.getQuestions)();
    if (questions) {
        res.status(200).json({ success: true, data: questions });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
