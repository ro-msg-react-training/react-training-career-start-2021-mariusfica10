import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";
import utilsReducer from "./utilsReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  utils: utilsReducer,
  login: loginReducer,
});

export default rootReducer;
