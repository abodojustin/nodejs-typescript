"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.createCategorie = void 0;
const Categorie_1 = require("../models/Categorie");
async function createCategorie(data) {
    const categorie = new Categorie_1.CategorieModel(data);
    const categorieSaved = await categorie.save();
    if (categorieSaved) {
        return { status: 201, message: "Categorie crée avec succès" };
    }
}
exports.createCategorie = createCategorie;
async function getCategories() {
    return await Categorie_1.CategorieModel.find({});
}
exports.getCategories = getCategories;
