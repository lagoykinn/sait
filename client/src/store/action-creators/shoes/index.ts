import { ShoesState, IShoes, ShoesAction, ShoesActionsEnum } from "./shoes";

const initialState: ShoesState = {
  shoes: [],
  isLoading: false,
  error: "",
};

export const shoesReducer = (
  state: ShoesState = initialState,
  action: ShoesAction
): ShoesState => {
  switch (action.type) {
    case ShoesActionsEnum.SET_SHOES:
      return { ...state, shoes: action.payload, isLoading: false };
    case ShoesActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ShoesActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
