import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { ShopState } from "../reducers/shoppingReducer";
import thunk from "redux-thunk";
import { UtilsState } from "../reducers/utilsReducer";
import { LoginState } from "../reducers/loginReducer";

const middleware = thunk;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware))
);

export interface AppState {
  shop: ShopState;
  utils: UtilsState;
  login: LoginState;
}
