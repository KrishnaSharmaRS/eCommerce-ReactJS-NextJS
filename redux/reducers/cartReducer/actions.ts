import { ECartActionType } from "./actionTypes";

export const showCartDropdown = () => ({
  type: ECartActionType.showCartDropdown,
});

export const hideCartDropdown = () => ({
  type: ECartActionType.hideCartDropdown,
});

export const toggleCartDropdown = () => ({
  type: ECartActionType.toggleCartDropdown,
});
