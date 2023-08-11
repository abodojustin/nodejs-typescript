"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CategorieRepository_1 = require("../database/repositories/CategorieRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const cat = await (0, CategorieRepository_1.createCategorie)(req.body);
    if ((cat === null || cat === void 0 ? void 0 : cat.status) && (cat === null || cat === void 0 ? void 0 : cat.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((cat === null || cat === void 0 ? void 0 : cat.status) && (cat === null || cat === void 0 ? void 0 : cat.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "Categorie crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const categories = await (0, CategorieRepository_1.getCategories)();
    if (categories) {
        res.status(200).json({ success: true, data: categories });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
