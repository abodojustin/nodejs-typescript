"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SecteurRepository_1 = require("../database/repositories/SecteurRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const secteur = await (0, SecteurRepository_1.createSecteur)(req.body);
    if ((secteur === null || secteur === void 0 ? void 0 : secteur.status) && (secteur === null || secteur === void 0 ? void 0 : secteur.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((secteur === null || secteur === void 0 ? void 0 : secteur.status) && (secteur === null || secteur === void 0 ? void 0 : secteur.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "Secteur crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const secteurs = await (0, SecteurRepository_1.getSecteurs)();
    if (secteurs) {
        res.status(200).json({ success: true, data: secteurs });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
