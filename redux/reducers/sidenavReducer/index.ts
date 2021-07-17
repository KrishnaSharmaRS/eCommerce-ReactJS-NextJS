import { ESidenavActionType, ISidenavAction } from "./actionTypes";
import { ISidenavState } from "./types";

export enum ESidenavSection {
  navigator = "Navigator",
  search = "Search"
}

const INITIAL_STATE: ISidenavState = {
  hidden: true,
  section: ESidenavSection.navigator
};

const sidenavReducer = (state = INITIAL_STATE, action: ISidenavAction) => {
  switch (action.type) {
    case ESidenavActionType.showSidenav:
      return {
        ...state,
        hidden: false,
        section: action.payload
      };
    case ESidenavActionType.hideSidenav:
        return {
            ...state,
            hidden: true
        }
    default:
      return state;
  }
};

export default sidenavReducer;