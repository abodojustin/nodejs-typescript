import express from "express";
import { createZone, getZones } from "../database/repositories/ZoneRepository";

const router = express.Router();

router.post("/create", async (req, res) => {
    const z = await createZone(req.body);
    
  if (z?.status && z?.status === 400) {

    res.status(400).json({ success: false, message: "une erreur s'est produite" });

  } else if (z?.status && z?.status === 500) {

    res.status(500).json({ success: false });

  } else {
    console.log(req.body)

    res.status(200).json({ success: true, message: "Zone crée avec succès" });

  }
});

router.get("/getAll", async (req, res) => {
    const zones = await getZones();

    if(zones){

        res.status(200).json({ success: true, data: zones })

    } else {

        res.status(400).json({ success: false, message: "ressource non disponible" })

    }
});

export default router;
