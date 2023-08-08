"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../database/models/User");
async function register(data) {
    const userExist = await User_1.UserModel.findOne({ email: data.email });
    if (!userExist) {
        // can verify the solidity of password  with passwordStrength
        // passwordStrength(data.password).value
        // Too weak - Weak - Medium - Strong
        data.password = bcrypt_1.default.hashSync(data.password, 10);
        const user = new User_1.UserModel(data);
        const userSaved = await user.save();
        if (userSaved) {
            // send mail with sendMail or some ops
            return { status: 200, data: userSaved };
        }
        return { status: 500 };
    }
    return { status: 400 };
}
exports.register = register;
