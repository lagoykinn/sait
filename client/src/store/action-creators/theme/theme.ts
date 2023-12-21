export interface ITheme {
  theme: string;
}

export enum ThemeActionsEnum {
  LIGHT_THEME = "LIGHT_THEME",
  DARK_THEME = "DARK_THEME",
}

export interface SetLightThemeAction {
  type: ThemeActionsEnum.LIGHT_THEME;
  payload: string;
}

export interface SetDarkThemeAction {
  type: ThemeActionsEnum.DARK_THEME;
  payload: string;
}

export type ThemeActions = SetLightThemeAction | SetDarkThemeAction;
