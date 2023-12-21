export interface IBackground {
    background: boolean
}

export interface BackgroundState {
    background: boolean
}

export enum BackgroundActionsEnum {
    CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
    RETURN_BACKGROUND = 'RETURN_BACKGROUND'
}

export interface SetChangeBackgroundAction {
    type: BackgroundActionsEnum.CHANGE_BACKGROUND,
    payload: boolean
}

export interface SetReturnBackgroundAction {
    type: BackgroundActionsEnum.RETURN_BACKGROUND;
    payload: boolean;
}

export type BackgroundAction = SetChangeBackgroundAction | SetReturnBackgroundAction