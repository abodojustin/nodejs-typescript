"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const encrypt = (data) => {
    return crypto_js_1.default.AES.encrypt(JSON.stringify(data), process.env.AES_KEY).toString();
};
exports.encrypt = encrypt;
const decrypt = (data) => {
    const p = (crypto_js_1.default.AES.decrypt((data), process.env.AES_KEY));
    var decryptedData = JSON.parse(p.toString(crypto_js_1.default.enc.Utf8));
    return decryptedData;
};
exports.decrypt = decrypt;
