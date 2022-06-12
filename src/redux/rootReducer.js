import { combineReducers } from "redux";
import totalUserReducer from "./totalUserReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  UserCount: totalUserReducer,
  User: userReducer,
});

export default rootReducer;
