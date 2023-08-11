"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeById = exports.getThemes = exports.createTheme = void 0;
const Theme_1 = require("../models/Theme");
async function createTheme(data) {
    // console.log(data)
    const theme = new Theme_1.ThemeModel(data);
    const themeSaved = await theme.save();
    console.log({ themeSaved });
    if (themeSaved) {
        return { status: 201, message: "Theme crée avec succès" };
    }
}
exports.createTheme = createTheme;
async function getThemes() {
    try {
        const themesWithQuestionsAndMenus = await Theme_1.ThemeModel.find()
            .populate("questions") // Remplir les références à partir de la collection "questions"
            .populate("menus"); // Remplir les références à partir de la collection "menus"
        console.log(themesWithQuestionsAndMenus);
        return themesWithQuestionsAndMenus;
    }
    catch (error) {
        console.error("Erreur lors de la récupération des thèmes :", error);
        // Gérer l'erreur en conséquence
    }
}
exports.getThemes = getThemes;
async function getThemeById(id) {
    return await Theme_1.ThemeModel.findById({ _id: id });
}
exports.getThemeById = getThemeById;
