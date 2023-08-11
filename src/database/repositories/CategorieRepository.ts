import { ICategorie  } from "../interfaces/Categorie";
import { CategorieModel } from "../models/Categorie";


export async function createCategorie(data: ICategorie){
    const categorie = new CategorieModel(data);

    const categorieSaved = await categorie.save();

    if(categorieSaved) {

        return { status: 201, message: "Categorie crée avec succès" }

    }
}

export async function getCategories() {
    return await CategorieModel.find({});
}