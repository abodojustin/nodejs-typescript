"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoleRepository_1 = require("../database/repositories/RoleRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const role = await (0, RoleRepository_1.createRole)(req.body);
    if ((role === null || role === void 0 ? void 0 : role.status) && (role === null || role === void 0 ? void 0 : role.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((role === null || role === void 0 ? void 0 : role.status) && (role === null || role === void 0 ? void 0 : role.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "role crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const roles = await (0, RoleRepository_1.getRoles)();
    if (roles) {
        res.status(200).json({ success: true, data: roles });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
