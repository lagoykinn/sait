import { ITheme, ThemeActions, ThemeActionsEnum } from "./theme";

const initialState: ITheme = {
  theme: "LIGHT",
};

export const themeReducer = (
  state: ITheme = initialState,
  action: ThemeActions
): ITheme => {
  switch (action.type) {
    case ThemeActionsEnum.DARK_THEME:
      return { ...state, theme: "DARK" };
    case ThemeActionsEnum.LIGHT_THEME:
      return { ...state, theme: "LIGHT" };
    default:
      return state;
  }
};
