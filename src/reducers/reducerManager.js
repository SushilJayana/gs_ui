import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";
import memberFormReducer from "./memberFormReducer";

const reducerManager = 
combineReducers({
  isLoggedIn: loggedReducer,
  memberFormStat : memberFormReducer
});

export default reducerManager;
