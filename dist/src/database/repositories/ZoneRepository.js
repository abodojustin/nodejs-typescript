"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZones = exports.createZone = void 0;
const Zone_1 = require("../models/Zone");
async function createZone(data) {
    const zone = new Zone_1.ZoneModel(data);
    const zoneSaved = await zone.save();
    console.log({ zoneSaved });
    if (zoneSaved) {
        return { status: 201, message: "Zone crée avec succès" };
    }
}
exports.createZone = createZone;
async function getZones() {
    return await Zone_1.ZoneModel.find({});
}
exports.getZones = getZones;
// export async function getZoneById(id: string) {
//     return await ZoneModel.findById({ _id: id });
// }
// export async function .....
