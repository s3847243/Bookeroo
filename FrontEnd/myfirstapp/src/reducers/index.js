import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import personReducer from "./personReducer";
import securityReducer from "./securityReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  errors: errorReducer,
  person: personReducer,
  security: securityReducer,
  cart: cartReducer
});

