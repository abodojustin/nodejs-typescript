"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../database/models/User");
async function login(data) {
    const userExist = await User_1.UserModel.findOne({ email: data.email });
    let response = {};
    let info = {};
    let configToke = {
        _id: "",
        email: "",
        role: ""
    };
    if (userExist) {
        const passwordVerify = await bcrypt_1.default.compare(data.password, userExist.password);
        if (passwordVerify) {
            configToke._id = userExist._id.toString();
            configToke.email = userExist.email;
            info = userExist;
            const token = jsonwebtoken_1.default.sign(configToke, process.env.TOKEN_SECRET, { expiresIn: "1d" });
            response = {
                data: userExist,
                token: token
            };
            return response;
        }
        return 1;
    }
    return 0;
}
exports.login = login;
