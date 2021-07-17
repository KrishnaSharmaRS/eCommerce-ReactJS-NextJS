import { IUserState } from "./userReducer/types";
import { ICartState } from "./cartReducer/types";
import { ISidenavState } from "./sidenavReducer/types";

export interface IReducerAction {
  type: string;
  payload: any;
}

export interface IState {
  readonly user: IUserState;
  readonly cart: ICartState;
  readonly sidenav: ISidenavState;
}
