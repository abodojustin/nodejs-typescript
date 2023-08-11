export interface ITheme {
    theme_name: string,
    questions: Array<Object>,
    menus: Array<Object> // Chaque thème peut se retrouver dans plusieurs menus
};