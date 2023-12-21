import { combineReducers } from "redux";
import { modalReducer } from "../action-creators/modal";
import { authReducer } from "../action-creators/auth";
import { themeReducer } from "../action-creators/theme";
import { backgroundReducer } from "../action-creators/background";
import { shoesReducer } from "../action-creators/shoes";

export const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  theme: themeReducer,
  background: backgroundReducer,
  shoes: shoesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
