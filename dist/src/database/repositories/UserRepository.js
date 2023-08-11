"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const User_1 = require("../models/User");
async function getUsers() {
    return await User_1.UserModel.find();
}
exports.getUsers = getUsers;
async function getUserById(id) {
    return await User_1.UserModel.findById({ _id: id });
}
exports.getUserById = getUserById;
// export async function .....
