import express from "express";
import { createCategorie, getCategories } from "../database/repositories/CategorieRepository";

const router = express.Router();

router.post("/create", async (req, res) => {
    const cat = await createCategorie(req.body);
    
  if (cat?.status && cat?.status === 400) {

    res.status(400).json({ success: false, message: "une erreur s'est produite" });

  } else if (cat?.status && cat?.status === 500) {

    res.status(500).json({ success: false });

  } else {

    res.status(200).json({ success: true, message: "Categorie crée avec succès" });

  }
});

router.get("/getAll", async (req, res) => {
    const categories = await getCategories();

    if(categories){

        res.status(200).json({ success: true, data: categories })

    } else {

        res.status(400).json({ success: false, message: "ressource non disponible" })

    }
});

export default router;
