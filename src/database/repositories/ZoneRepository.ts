import { IZone  } from "../interfaces/Zone";
import { ZoneModel } from "../models/Zone";


export async function createZone(data: IZone){
    const zone = new ZoneModel(data);

    const zoneSaved = await zone.save();

    if(zoneSaved) {

        return { status: 201, message: "Zone crée avec succès" }

    }
}

export async function getZones() {
    return await ZoneModel.find({});
}