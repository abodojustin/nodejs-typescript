"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const login_1 = require("../auth/login");
const register_1 = require("../auth/register");
const password_1 = require("../auth/password");
const crypt_1 = require("../helpers/security/crypt");
const router = express_1.default.Router();
router.post('/register', async (req, res, next) => {
    const r = await (0, register_1.register)(req.body);
    if (r.status && r.status === 400) {
        res.status(400).send({});
    }
    else if (r.status && r.status === 500) {
        res.status(500).send({});
    }
    else {
        res.status(200).send({ data: r.data });
    }
});
router.post('/login', async (req, res, next) => {
    const l = await (0, login_1.login)(req.body);
    if (l === 1) {
        res.status(400).send({ message: 'Password not correct' });
    }
    else if (l === 0) {
        res.status(400).send({ message: 'Email not exist' });
    }
    else {
        res.status(200).send({ data: l });
    }
});
router.post('/create-link', async (req, res, next) => {
    const sendLink = await (0, password_1.reinitializeLink)(req.body);
    if (sendLink === true) {
        res.status(200).send({ message: "Vous avez reçu un mail de confirmation. Veuillez le lire et effectuer les autres étapes !" });
    }
    else {
        res.status(401).send({ message: "Votre compte n'existe pas ou a été bloquer !" });
    }
});
router.post('/modify-password', verifyToken_1.default, async (req, res, next) => {
    const user = await (0, password_1.checking)(req.body);
    console.log(user);
    if (user === 0) {
        res.status(500).send({ message: "User not exist" });
    }
    else if (typeof user === 'object' && user !== null) {
        res.status(200).send({ data: (0, crypt_1.encrypt)(user) });
    }
    else {
        res.status(403).send({ message: "Authentification expired !" });
    }
});
exports.default = router;
