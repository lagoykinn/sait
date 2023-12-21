import { AuthAction, AuthActionsEnum, AuthState, IUser } from "./auth";

const initialState: AuthState = {
    isAuth: false,
    error: "",
    user: {} as IUser,
    isLoading: false,
};

export const authReducer = (
    state: AuthState = initialState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };
        case AuthActionsEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        case AuthActionsEnum.SET_IS_LOADING:
            return { ...state, isLoading: true };
        case AuthActionsEnum.SET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
