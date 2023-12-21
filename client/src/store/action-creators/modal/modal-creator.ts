import { ModalActionsEnum, SetModalOpen, SetModalClose } from "./modal";

export const ModalCreators = {
  openModal: (): SetModalOpen => ({
    type: ModalActionsEnum.OPEN_MODAL,
    payload: true,
  }),
  closeModal: (): SetModalClose => ({
    type: ModalActionsEnum.CLOSE_MODAL,
    payload: false,
  })
}