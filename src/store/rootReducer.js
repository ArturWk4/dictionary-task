import { combineReducers } from "redux";
import wordReducer from "./word/reducers";

export default combineReducers({
  word: wordReducer,
});
