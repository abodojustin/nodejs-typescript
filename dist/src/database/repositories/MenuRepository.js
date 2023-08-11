"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuById = exports.getMenus = exports.createMenu = void 0;
const Menu_1 = require("../models/Menu");
async function createMenu(data) {
    const menu = new Menu_1.MenuModel(data);
    const menuSaved = await menu.save();
    if (menuSaved) {
        return { status: 201, message: "Menu crée avec succès" };
    }
}
exports.createMenu = createMenu;
async function getMenus() {
    return await Menu_1.MenuModel.find({});
}
exports.getMenus = getMenus;
async function getMenuById(id) {
    return await Menu_1.MenuModel.findById({ _id: id });
}
exports.getMenuById = getMenuById;
