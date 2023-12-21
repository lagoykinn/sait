export interface ModalState {
    isOpen: boolean
}

export enum ModalActionsEnum {
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL"
}

export interface SetModalOpen {
    type: ModalActionsEnum.OPEN_MODAL
    payload: boolean
}

export interface SetModalClose {
    type: ModalActionsEnum.CLOSE_MODAL,
    payload: boolean
}

export type ModalAction = SetModalOpen | SetModalClose