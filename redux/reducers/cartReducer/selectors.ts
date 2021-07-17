import { createSelector } from "reselect";

import { IState } from "../types";

const selectCartState = (state: IState) => state.cart;

export const selectCartTotalAmount = createSelector([selectCartState], (cart) => cart.totalAmount);
export const selectCartItems = createSelector([selectCartState], (cart) => cart.items);
export const selectCartDropdownHidden = createSelector([selectCartState], (cart) => cart.dropdownHidden);
export const selectCartTotalItems = createSelector([selectCartState], (cart) => cart.totalItems);
