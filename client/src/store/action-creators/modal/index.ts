import { ModalAction, ModalActionsEnum, ModalState } from "./modal";

const initialState: ModalState = {
    isOpen: false,
};

export const modalReducer = (
    state = initialState,
    action: ModalAction
): ModalState => {
    switch (action.type) {
        case ModalActionsEnum.OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
            };
        case ModalActionsEnum.CLOSE_MODAL :
            return {
                ...state, isOpen: false
            }
        default:
            return state;
    }
};
