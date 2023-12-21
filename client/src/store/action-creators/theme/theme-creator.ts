import { SetDarkThemeAction, SetLightThemeAction, ThemeActionsEnum } from "./theme";

export const ThemeCreators = {
    setLightTheme: (): SetLightThemeAction => ({
        type: ThemeActionsEnum.LIGHT_THEME,
        payload: "LIGHT"
    }),
    setDarkTheme: (): SetDarkThemeAction => ({
        type: ThemeActionsEnum.DARK_THEME,
        payload: "DARK"
    })
}