import { combineReducers } from "redux";
import cats from "./cats";
// import { reducer as formReducer } from "redux-form";

export default combineReducers({
  cats,
  //   form: formReducer,
});
