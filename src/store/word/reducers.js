import { createReducer } from "@reduxjs/toolkit";
import { FETCH_WORD } from "./actionTypes";

const initialState = {
  wordData: [],
};

const wordReducer = createReducer(initialState, {
  [FETCH_WORD]: (state, action) => ({ ...state, wordData: action.payload }),
});

export default wordReducer;