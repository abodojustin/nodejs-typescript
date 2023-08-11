import { ITheme } from "../interfaces/Theme";
import { ThemeModel } from "../models/Theme";

export async function createTheme(data: ITheme) {
  // console.log(data)
  const theme = new ThemeModel(data);

  const themeSaved = await theme.save();

  console.log({themeSaved})

  if (themeSaved) {
    return { status: 201, message: "Theme crée avec succès" };
  }
}

export async function getThemes() {
  try {
    const themesWithQuestionsAndMenus = await ThemeModel.find()
      .populate("questions") // Remplir les références à partir de la collection "questions"
      .populate("menus"); // Remplir les références à partir de la collection "menus"

    console.log(themesWithQuestionsAndMenus);
    return themesWithQuestionsAndMenus;
  } catch (error) {
    console.error("Erreur lors de la récupération des thèmes :", error);
    // Gérer l'erreur en conséquence
  }
}

export async function getThemeById(id: string) {
  return await ThemeModel.findById({ _id: id });
}
