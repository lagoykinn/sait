import { $user } from "../../../http";
import { getShoes } from "../../../http/shoesApi";
import { AppDispatch } from "../../store";
import {
  IShoes,
  SetErrorShoesAction,
  SetIsLoadingShoesAction,
  SetShoesAction,
  ShoesActionsEnum,
} from "./shoes";

export const ShoesActionCreators = {
  setShoes: (shoes: any): SetShoesAction => ({
    type: ShoesActionsEnum.SET_SHOES,
    payload: shoes,
  }),

  setIsLoadingShoes: (isLoading: boolean): SetIsLoadingShoesAction => ({
    type: ShoesActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),

  setErrorShoesAction: (error: string): SetErrorShoesAction => ({
    type: ShoesActionsEnum.SET_ERROR,
    payload: error,
  }),

  fetchShoes: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ShoesActionCreators.setIsLoadingShoes(true));
      setTimeout(async () => {
        localStorage.removeItem("goods");
        try {
          const { rows } = await getShoes();
          // if (data) {
          //   dispatch(ShoesActionCreators.setIsLoadingShoes(false));
          dispatch(ShoesActionCreators.setShoes(rows));
          localStorage.setItem("goods", JSON.stringify(rows));
          // }
          console.log(rows);
          return rows;
        } catch (error) {
          dispatch(ShoesActionCreators.setErrorShoesAction("Ошибка запроса"));
        }
      });
    } catch (error) {
      dispatch(ShoesActionCreators.setErrorShoesAction("Ошибка сервера"));
    }
  },
};
