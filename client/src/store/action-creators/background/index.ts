import {
  BackgroundAction,
  BackgroundActionsEnum,
  BackgroundState,
} from "./background";

const initialState: BackgroundState = {
  background: false,
};

export const backgroundReducer = (
  state: BackgroundState = initialState,
  action: BackgroundAction
) => {
  switch (action.type) {
    case BackgroundActionsEnum.CHANGE_BACKGROUND:
      return { ...state, background: true };
    case BackgroundActionsEnum.RETURN_BACKGROUND:
      return { ...state, background: false };
    default:
      return state;
  }
};
