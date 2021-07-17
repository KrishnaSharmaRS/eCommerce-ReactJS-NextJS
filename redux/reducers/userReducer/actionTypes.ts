import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

export enum EUserActionType {
  setUserData = "SET_USER_DATA",
  resetUserData = "RESET_USER_DATA",
}

export interface IUserAction extends AnyAction {
  type: EUserActionType | typeof HYDRATE;
  payload: any;
}
