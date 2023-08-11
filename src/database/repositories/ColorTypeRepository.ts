import { IColorType  } from "../interfaces/ColorType";
import { ColorTypeModel } from "../models/ColorType";


export async function createColorType(data: IColorType){
    const zone = new ColorTypeModel(data);

    const zoneSaved = await zone.save();

    if(zoneSaved) {

        return { status: 201, message: "ColorType crée avec succès" }

    }
}

export async function getColorTypes() {
    return await ColorTypeModel.find({});
}

export async function getColorTypeById(id: string) {
    return await ColorTypeModel.findById({ _id: id });
}