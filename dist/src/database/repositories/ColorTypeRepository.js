"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorTypeById = exports.getColorTypes = exports.createColorType = void 0;
const ColorType_1 = require("../models/ColorType");
async function createColorType(data) {
    const zone = new ColorType_1.ColorTypeModel(data);
    const zoneSaved = await zone.save();
    if (zoneSaved) {
        return { status: 201, message: "ColorType crée avec succès" };
    }
}
exports.createColorType = createColorType;
async function getColorTypes() {
    return await ColorType_1.ColorTypeModel.find({});
}
exports.getColorTypes = getColorTypes;
async function getColorTypeById(id) {
    return await ColorType_1.ColorTypeModel.findById({ _id: id });
}
exports.getColorTypeById = getColorTypeById;
