export interface ShoesState {
  shoes: any;
  isLoading: boolean;
  error: string;
}

export interface IShoes {
  type: string;
  brand: string;
  model: string;
  shoes: string;
  color: string;
  size: string;
  price: string;
  info: string
}

export enum ShoesActionsEnum {
  SET_SHOES = "SET_SHOES",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetShoesAction {
  type: ShoesActionsEnum.SET_SHOES;
  payload: any;
}

export interface SetIsLoadingShoesAction {
  type: ShoesActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorShoesAction {
  type: ShoesActionsEnum.SET_ERROR;
  payload: string;
}

export type ShoesAction =
  | SetShoesAction
  | SetIsLoadingShoesAction
  | SetErrorShoesAction;
