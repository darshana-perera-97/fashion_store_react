import { combineReducers } from "redux";
import itemReducer from "./ItemsReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  itemReducer,
  CartReducer,
});

export default rootReducer;
