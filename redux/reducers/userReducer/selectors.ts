import { createSelector } from "reselect";

import { IState } from "../types";

const selectUserState = (state: IState) => state.user;

export const selectUser = createSelector([selectUserState], (user) => user);

export const selectUserTitle = createSelector([selectUserState], (user) => user.title);

export const selectUserFirstName = createSelector([selectUserState], (user) => user.firstName);

export const selectUserLastName = createSelector([selectUserState], (user) => user.lastName);

export const selectUserEmail = createSelector([selectUserState], (user) => user.email);

export const selectUserAuthenticated = createSelector([selectUserState], (user) => user.authenticated);

export const selectUserPhones = createSelector([selectUserState], (user) => user.phones);

export const selectUserAddresses = createSelector([selectUserState], (user) => user.addresses);
