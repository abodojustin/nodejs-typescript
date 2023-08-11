import express from "express";
import { ITheme } from "../database/interfaces/Theme";
import { IQuestions } from "../database/interfaces/Questions";
import {
  createTheme,
  getThemes,
} from "../database/repositories/ThemeRepository";
import { getQuestionById } from "../database/repositories/QuestionRepository";
import { IMenu } from "../database/interfaces/Menu";
import { getMenuById } from "../database/repositories/MenuRepository";

const router = express.Router();

router.post("/create", async (req, res) => {
  let array_questions: IQuestions[] = [];
  let array_menus: IMenu[] = [];

  if (req.body.questions) {
    try {
      // L'utilisation de Promise.all ici garantit que toutes les promesses générées par 
      // les appels à getQuestionById sont attendues avant de passer à la suite du code. 
      // Cela devrait vous permettre de remplir correctement le tableau array_questions 
      // avec les réponses obtenues.
      await Promise.all(
        req.body.questions.map(async (item: string) => {

          const question = await getQuestionById(item);

          // @ts-ignore
          array_questions.push(question);
        })
      );

    } catch (error) {
      console.error("Erreur lors du traitement des questions :", error);
      // Gérer l'erreur en conséquence
      res
        .status(500)
        .json({
          success: false,
          message: "Erreur lors du traitement des questions",
        });
    }
  } else {
    res
      .status(400)
      .json({
        success: false,
        message:
          "la propriété questions n'existe pas dans le corps de la requête",
      });
  }

  if (req.body.menus) {
    try {
      // L'utilisation de Promise.all ici garantit que toutes les promesses générées par 
      // les appels à getMenuById sont attendues avant de passer à la suite du code. 
      // Cela devrait vous permettre de remplir correctement le tableau array_menus 
      // avec les réponses obtenues.
      await Promise.all(
        req.body.menus.map(async (item: string) => {

          const menu = await getMenuById(item);

          // @ts-ignore
          array_menus.push(menu);
        })
      );

    //   console.log(array_menus)

    } catch (error) {
      console.error("Erreur lors du traitement des menus :", error);
      // Gérer l'erreur en conséquence
      res
        .status(500)
        .json({
          success: false,
          message: "Erreur lors du traitement des menus",
        });
    }
  } else {
    res
      .status(400)
      .json({
        success: false,
        message:
          "la propriété menus n'existe pas dans le corps de la requête",
      });
  }

  const data: ITheme = {
    theme_name: req.body.theme_name,
    questions: array_questions,
    menus: array_menus,
  };

//   console.log({data})

  const theme = await createTheme(data);

  if (theme?.status && theme?.status === 400) {
    res
      .status(400)
      .json({ success: false, message: "une erreur s'est produite" });
  } else if (theme?.status && theme?.status === 500) {
    res.status(500).json({ success: false });
  } else {
    res.status(200).json({ success: true, message: "Theme crée avec succès", data });
  }
});

router.get("/getAll", async (req, res) => {
  const themes = await getThemes();

  if (themes) {
    res.status(200).json({ success: true, data: themes });
  } else {
    res
      .status(400)
      .json({ success: false, message: "ressource non disponible" });
  }
});

export default router;
