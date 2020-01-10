import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const reducerManager = 
combineReducers({
  isLoggedIn: loggedReducer
});

export default reducerManager;
