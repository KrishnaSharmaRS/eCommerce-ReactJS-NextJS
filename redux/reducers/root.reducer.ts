import { combineReducers } from "redux";

import { IState } from "./types";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import sidenavReducer from "./sidenavReducer";

const rootReducer = combineReducers<IState>({
  user: userReducer,
  cart: cartReducer,
  sidenav: sidenavReducer,
});

export default rootReducer;
