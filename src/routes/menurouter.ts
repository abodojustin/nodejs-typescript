import express from "express";
import { createMenu, getMenus } from "../database/repositories/MenuRepository";

const router = express.Router();

router.post("/create", async (req, res) => {
    const menu = await createMenu(req.body);
    
  if (menu?.status && menu?.status === 400) {

    res.status(400).json({ success: false, message: "une erreur s'est produite" });

  } else if (menu?.status && menu?.status === 500) {

    res.status(500).json({ success: false });

  } else {

    res.status(200).json({ success: true, message: "Menu crée avec succès" });

  }
});

router.get("/getAll", async (req, res) => {
    const menus = await getMenus();

    if(menus){

        res.status(200).json({ success: true, data: menus })

    } else {

        res.status(400).json({ success: false, message: "ressource non disponible" })

    }
});

export default router;
