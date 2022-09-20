import { combineReducers } from "redux";
import { productsReducer, productDetailsReducer } from "./productsReucer";

const reducers = combineReducers({
  products: productsReducer,
  product: productDetailsReducer
});
export default reducers;
