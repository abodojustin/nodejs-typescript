"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MenuRepository_1 = require("../database/repositories/MenuRepository");
const router = express_1.default.Router();
router.post("/create", async (req, res) => {
    const menu = await (0, MenuRepository_1.createMenu)(req.body);
    if ((menu === null || menu === void 0 ? void 0 : menu.status) && (menu === null || menu === void 0 ? void 0 : menu.status) === 400) {
        res.status(400).json({ success: false, message: "une erreur s'est produite" });
    }
    else if ((menu === null || menu === void 0 ? void 0 : menu.status) && (menu === null || menu === void 0 ? void 0 : menu.status) === 500) {
        res.status(500).json({ success: false });
    }
    else {
        res.status(200).json({ success: true, message: "Menu crée avec succès" });
    }
});
router.get("/getAll", async (req, res) => {
    const menus = await (0, MenuRepository_1.getMenus)();
    if (menus) {
        res.status(200).json({ success: true, data: menus });
    }
    else {
        res.status(400).json({ success: false, message: "ressource non disponible" });
    }
});
exports.default = router;
