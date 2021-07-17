import { HYDRATE } from "next-redux-wrapper";
import { ECartActionType, ICartAction } from "./actionTypes";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  dropdownHidden: true,
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartReducer = (state = INITIAL_STATE, action: ICartAction): ICartState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ECartActionType.showCartDropdown:
      return {
        ...state,
        dropdownHidden: false,
      };
    case ECartActionType.hideCartDropdown:
      return {
        ...state,
        dropdownHidden: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
