import { HYDRATE } from "next-redux-wrapper";

export enum ECartActionType {
    showCartDropdown = "SHOW_CART_DROPDOWN",
    hideCartDropdown = "HIDE_CART_DROPDOWN",
    toggleCartDropdown = "TOGGLE_CART_DROPDOWN",
}

export interface ICartAction {
    type: ECartActionType | typeof HYDRATE;
    payload: any;
}