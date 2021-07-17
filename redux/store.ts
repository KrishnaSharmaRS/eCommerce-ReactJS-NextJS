import { createStore, applyMiddleware, Middleware, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/root.reducer";
import { IState } from "./reducers/types";

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger());
}

const makeStore = (_context: Context) => createStore(rootReducer, applyMiddleware(...middlewares));

export const wrapper = createWrapper<Store<IState>>(makeStore, { debug: true });
