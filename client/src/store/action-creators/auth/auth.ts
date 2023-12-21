export interface IUser {
    username: string,
    email: string,
    password: string
}

export interface AuthState {
    isAuth: boolean;
    error: string,
    user: IUser,
    isLoading: boolean
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH,
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR,
    payload: string
}

export interface SetUserAction {
    type: AuthActionsEnum.SET_USER,
    payload: IUser
}

export interface SetIsLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING
    payload: boolean
}

export type AuthAction = SetAuthAction | SetErrorAction | SetUserAction | SetIsLoadingAction