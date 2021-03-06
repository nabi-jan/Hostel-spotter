import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
export default combineReducers({
  auth: authReducer,
  users: userReducer,
  category: categoryReducer,
});
