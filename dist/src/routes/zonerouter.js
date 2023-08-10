"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ZoneRepository_1 = require("../database/repositories/ZoneRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const z = await (0, ZoneRepository_1.createZone)(req.body);
    console.log(req.body);
    if ((z === null || z === void 0 ? void 0 : z.status) && (z === null || z === void 0 ? void 0 : z.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((z === null || z === void 0 ? void 0 : z.status) && (z === null || z === void 0 ? void 0 : z.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "Zone crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const zones = await (0, ZoneRepository_1.getZones)();
    if (zones) {
        res.status(200).json({ success: true, data: zones });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
