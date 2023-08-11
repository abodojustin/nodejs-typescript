import { IQuestions  } from "../interfaces/Questions";
import { QuestionsModel } from "../models/Questions";


export async function createQuestion(data: IQuestions){
    const question = new QuestionsModel(data);

    const questionSaved = await question.save();

    if(questionSaved) {

        return { status: 201, message: "Question crée avec succès" }

    }
}

export async function getQuestions() {
    return await QuestionsModel.find().populate({ path: 'color', select: 'color_name'});
}

export async function getQuestionById(id: string) {
    return await QuestionsModel.findById({ _id: id });
}