import { combineReducers } from "redux";
import { productsReducer } from "./productsReucer";
const reducers = combineReducers({
  products: productsReducer
});
export default reducers;
