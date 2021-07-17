import { createSelector } from "reselect";

import { IState } from "../types";

const selectUserState = (state: IState) => state.user;

export const selectUser = createSelector(
  [selectUserState],
  (user) => user
);