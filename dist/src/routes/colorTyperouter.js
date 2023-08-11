"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ColorTypeRepository_1 = require("../database/repositories/ColorTypeRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const colorT = await (0, ColorTypeRepository_1.createColorType)(req.body);
    if ((colorT === null || colorT === void 0 ? void 0 : colorT.status) && (colorT === null || colorT === void 0 ? void 0 : colorT.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((colorT === null || colorT === void 0 ? void 0 : colorT.status) && (colorT === null || colorT === void 0 ? void 0 : colorT.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "ColorType crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const colorTypes = await (0, ColorTypeRepository_1.getColorTypes)();
    if (colorTypes) {
        res.status(200).json({ success: true, data: colorTypes });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
