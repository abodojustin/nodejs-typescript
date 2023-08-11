import express from "express";
import { createQuestion, getQuestions } from "../database/repositories/QuestionRepository";
import { getColorTypeById } from "../database/repositories/ColorTypeRepository";
import { IQuestions } from "../database/interfaces/Questions";

const router = express.Router();

router.post("/create", async (req, res) => {
    const color_type = await getColorTypeById(req.body.color);

    const data: IQuestions = {
        question_name: req.body.question_name,
        color: color_type as Object
    }

    const question = await createQuestion(data);
    
  if (question?.status && question?.status === 400) {

    res.status(400).json({ success: false, message: "une erreur s'est produite" });

  } else if (question?.status && question?.status === 500) {

    res.status(500).json({ success: false });

  } else {

    res.status(200).json({ success: true, message: "question crée avec succès" });

  }
});

router.get("/getAll", async (req, res) => {
    const questions = await getQuestions();

    if(questions){

        res.status(200).json({ success: true, data: questions })

    } else {

        res.status(400).json({ success: false, message: "ressource non disponible" })

    }
});

export default router;
