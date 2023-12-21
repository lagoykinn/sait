import { Dispatch, SetStateAction } from "react";
import { IUser } from "../store/action-creators/auth/auth";

export interface ITitle {
  title: string;
}

export interface IRegistrationResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface ICustomInput {
  type: string;
  inputType?: string;
  value: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
}
