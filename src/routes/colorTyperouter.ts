import express from "express";
import { createColorType, getColorTypes } from "../database/repositories/ColorTypeRepository";

const router = express.Router();

router.post("/create", async (req, res) => {
    const colorT = await createColorType(req.body);
    
  if (colorT?.status && colorT?.status === 400) {

    res.status(400).json({ success: false, message: "une erreur s'est produite" });

  } else if (colorT?.status && colorT?.status === 500) {

    res.status(500).json({ success: false });

  } else {

    res.status(200).json({ success: true, message: "ColorType crée avec succès" });

  }
});

router.get("/getAll", async (req, res) => {
    const colorTypes = await getColorTypes();

    if(colorTypes){

        res.status(200).json({ success: true, data: colorTypes })

    } else {

        res.status(400).json({ success: false, message: "ressource non disponible" })

    }
});

export default router;
