import express from "express";
import { createSecteur, getSecteurs } from "../database/repositories/SecteurRepository";

const router = express.Router();

router.post("/create", async (req, res) => {
    const secteur = await createSecteur(req.body);
    
  if (secteur?.status && secteur?.status === 400) {

    res.status(400).json({ success: false, message: "une erreur s'est produite" });

  } else if (secteur?.status && secteur?.status === 500) {

    res.status(500).json({ success: false });

  } else {

    res.status(200).json({ success: true, message: "Secteur crée avec succès" });

  }
});

router.get("/getAll", async (req, res) => {
    const secteurs = await getSecteurs();

    if(secteurs){

        res.status(200).json({ success: true, data: secteurs })

    } else {

        res.status(400).json({ success: false, message: "ressource non disponible" })

    }
});

export default router;
