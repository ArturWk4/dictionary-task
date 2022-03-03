import axios from "axios";
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const fetchWord = (word) =>
  axios.get(`${BASE_URL}/${word}`).catch((error) => error.toJSON());
