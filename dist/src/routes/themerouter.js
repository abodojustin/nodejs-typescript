"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ThemeRepository_1 = require("../database/repositories/ThemeRepository");
const QuestionRepository_1 = require("../database/repositories/QuestionRepository");
const MenuRepository_1 = require("../database/repositories/MenuRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    let array_questions = [];
    let array_menus = [];
    if (req.body.questions) {
        try {
            // L'utilisation de Promise.all ici garantit que toutes les promesses générées par 
            // les appels à getQuestionById sont attendues avant de passer à la suite du code. 
            // Cela devrait vous permettre de remplir correctement le tableau array_questions 
            // avec les réponses obtenues.
            await Promise.all(req.body.questions.map(async (item) => {
                const question = await (0, QuestionRepository_1.getQuestionById)(item);
                // @ts-ignore
                array_questions.push(question);
            }));
        }
        catch (error) {
            console.error("Erreur lors du traitement des questions :", error);
            // Gérer l'erreur en conséquence
            res
                .status(500)
                .json({
                success: false,
                message: "Erreur lors du traitement des questions",
            });
        }
    }
    else {
        res
            .status(400)
            .json({
            success: false,
            message: "la propriété questions n'existe pas dans le corps de la requête",
        });
    }
    if (req.body.menus) {
        try {
            // L'utilisation de Promise.all ici garantit que toutes les promesses générées par 
            // les appels à getMenuById sont attendues avant de passer à la suite du code. 
            // Cela devrait vous permettre de remplir correctement le tableau array_menus 
            // avec les réponses obtenues.
            await Promise.all(req.body.menus.map(async (item) => {
                const menu = await (0, MenuRepository_1.getMenuById)(item);
                // @ts-ignore
                array_menus.push(menu);
            }));
            //   console.log(array_menus)
        }
        catch (error) {
            console.error("Erreur lors du traitement des menus :", error);
            // Gérer l'erreur en conséquence
            res
                .status(500)
                .json({
                success: false,
                message: "Erreur lors du traitement des menus",
            });
        }
    }
    else {
        res
            .status(400)
            .json({
            success: false,
            message: "la propriété menus n'existe pas dans le corps de la requête",
        });
    }
    const data = {
        theme_name: req.body.theme_name,
        questions: array_questions,
        menus: array_menus,
    };
    //   console.log({data})
    const theme = await (0, ThemeRepository_1.createTheme)(data);
    if ((theme === null || theme === void 0 ? void 0 : theme.status) && (theme === null || theme === void 0 ? void 0 : theme.status) === 400) {
        res
            .status(400)
            .json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((theme === null || theme === void 0 ? void 0 : theme.status) && (theme === null || theme === void 0 ? void 0 : theme.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "Theme crée avec succès", data });
    }
});
router.get("/getAll", async (req, res) => {
    const themes = await (0, ThemeRepository_1.getThemes)();
    if (themes) {
        res.status(200).json({ success: true, data: themes });
    }
    else {
        res
            .status(400)
            .json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
