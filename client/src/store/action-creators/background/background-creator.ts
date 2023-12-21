import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import {
  BackgroundActionsEnum,
  SetChangeBackgroundAction,
  SetReturnBackgroundAction,
} from "./background";
import NavigateSetter, {
  History,
} from "../../../components/Functions/Navigate";
import { PublicRoutesEnum } from "../../../utils/consts";

export const BackgroundActionCreators = {
  changeBackground: (): SetChangeBackgroundAction => ({
    type: BackgroundActionsEnum.CHANGE_BACKGROUND,
    payload: true,
  }),

  returnBackground: (): SetReturnBackgroundAction => ({
    type: BackgroundActionsEnum.RETURN_BACKGROUND,
    payload: false,
  }),

  change:
    (route: string, toProfile: boolean) => async (dispatch: AppDispatch) => {
      History.navigate(PublicRoutesEnum.TypePath);
    },
};
