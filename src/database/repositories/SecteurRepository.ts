import { ISecteur  } from "../interfaces/Secteur";
import { SecteurModel } from "../models/Secteur";


export async function createSecteur(data: ISecteur){
    const secteur = new SecteurModel(data);

    const secteurSaved = await secteur.save();

    if(secteurSaved) {

        return { status: 201, message: "Secteur crée avec succès" }

    }
}

export async function getSecteurs() {
    return await SecteurModel.find({});
}