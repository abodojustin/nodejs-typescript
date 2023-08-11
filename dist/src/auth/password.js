"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checking = exports.updating = exports.reinitializeLink = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../database/models/User");
const mail_1 = require("../helpers/mailing/mail");
async function reinitializeLink(data) {
    const userExist = await User_1.UserModel.findOne({ email: data.email });
    if (userExist) {
        const token = jsonwebtoken_1.default.sign({ _id: userExist._id }, process.env.TOKEN_SECRET, { expiresIn: 200 });
        let link = process.env.DOMAIN_APP + 'your-link' + token;
        (0, mail_1.sendMail)(userExist.email, 'Notification de confirmation', {
            title: "Réinitialisation de votre mot de passe",
            text: `
                    Veuillez cliquer sur le lien en dessous : <br>
                    ${link}
                `,
            signature: `${process.env.APP_NAME}`
        });
        return true;
    }
    return false;
}
exports.reinitializeLink = reinitializeLink;
async function updating(data) {
    const userExist = await User_1.UserModel.findOne({ email: data.email });
    if (userExist) {
        console.log(userExist);
        const password_crypt = await bcrypt_1.default.hashSync(data.password, 10);
        const userUpdating = await User_1.UserModel.findByIdAndUpdate({ _id: data._id }, { password: password_crypt });
        if (userUpdating) {
            return userUpdating;
        }
        return 1;
    }
    return 0;
}
exports.updating = updating;
async function checking(data) {
    const jwtVerification = jsonwebtoken_1.default.verify(data.token, process.env.TOKEN_SECRET);
    //var decoded = jwt.decode(data.token);        
    var decoded = jsonwebtoken_1.default.decode(data.token, { complete: true });
    // console.log(decoded.header);
    console.log(decoded === null || decoded === void 0 ? void 0 : decoded.payload);
    const userExist = await User_1.UserModel.findOne({ _id: decoded === null || decoded === void 0 ? void 0 : decoded.payload._id });
    if (userExist) {
        console.log(userExist);
        const newdata = {
            _id: userExist._id,
            email: userExist.email,
            password: data.password1
        };
        return await updating(newdata);
    }
    else {
        return 0;
    }
}
exports.checking = checking;
