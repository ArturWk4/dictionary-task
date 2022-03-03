import { FETCH_WORD } from "./actionTypes";
import { fetchWord } from "../../services/dictionaryServices";

export const setWord = (word) => async (dispatch) => {
  const response = await fetchWord(word);
  dispatch({ type: FETCH_WORD, payload: response.data });
};
