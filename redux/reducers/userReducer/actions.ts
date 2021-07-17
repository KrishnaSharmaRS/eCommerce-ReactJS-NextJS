import { Dispatch } from "redux";

import { EUserActionType } from "./actionTypes";
import { IUserState } from "./types";

export const setUserData = (userData: IUserState) => (dispatch: Dispatch) => dispatch({
  type: EUserActionType.setUserData,
  payload: userData,
});

export const resetUserData = () => (dispatch: Dispatch) => dispatch({
    type: EUserActionType.resetUserData
})