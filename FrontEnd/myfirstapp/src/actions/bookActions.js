import axios from "axios";
// import { GET_ERRORS, GET_PERSONS, GET_PERSON } from "./types";

export const getAllBooks = async () => {
  try {
    const res = await axios.get("https://api.github.com/users");
    return res;
  } catch (err) {
    console.log(err);
  }
};