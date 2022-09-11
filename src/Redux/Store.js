import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import CartReducer from "./CartReducer";
import rootReducer from "./RootReducer";

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default Store;
