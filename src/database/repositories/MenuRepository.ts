import { IMenu  } from "../interfaces/Menu";
import { MenuModel } from "../models/Menu";


export async function createMenu(data: IMenu){
    const menu = new MenuModel(data);

    const menuSaved = await menu.save();

    if(menuSaved) {

        return { status: 201, message: "Menu crée avec succès" }

    }
}

export async function getMenus() {
    return await MenuModel.find({});
}

export async function getMenuById(id: string) {
    return await MenuModel.findById({ _id: id });
}