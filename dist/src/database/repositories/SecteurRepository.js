"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecteurs = exports.createSecteur = void 0;
const Secteur_1 = require("../models/Secteur");
async function createSecteur(data) {
    const secteur = new Secteur_1.SecteurModel(data);
    const secteurSaved = await secteur.save();
    if (secteurSaved) {
        return { status: 201, message: "Secteur crée avec succès" };
    }
}
exports.createSecteur = createSecteur;
async function getSecteurs() {
    return await Secteur_1.SecteurModel.find({});
}
exports.getSecteurs = getSecteurs;
