import { combineReducers } from "redux";
import actualiteReducer from "./actualitesreducer";
import productReducer from "./productsreducer";
import authReducer from "./authreducer";

export default combineReducers({
  actualites: actualiteReducer,
  products: productReducer,
  auth: authReducer,
});
