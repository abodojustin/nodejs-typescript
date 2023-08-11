"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = exports.createRole = void 0;
const Role_1 = require("../models/Role");
async function createRole(data) {
    const role = new Role_1.RoleModel(data);
    const roleSaved = await role.save();
    if (roleSaved) {
        return { status: 201, message: "Role crée avec succès" };
    }
}
exports.createRole = createRole;
async function getRoles() {
    return await Role_1.RoleModel.find({});
}
exports.getRoles = getRoles;
