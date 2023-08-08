"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authrouter_1 = __importDefault(require("./authrouter"));
const userrouter_1 = __importDefault(require("./userrouter"));
const router = (0, express_1.default)();
router.use('/user', userrouter_1.default);
router.use('/auth', authrouter_1.default);
exports.default = router;
