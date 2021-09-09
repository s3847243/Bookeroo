import axios from "axios";
// import { GET_ERRORS, GET_PERSONS, GET_PERSON } from "./types";

export const getAllBooks = async () => {
  try {
    const res = await axios.get("http://localhost:8081/api/books");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const searchBooks = async (searchParams) => {
  try {
    const res = await axios.get("https://localhost:8080/api/books" , searchParams);
    return res;
  } catch (err) {
    console.log(err);
  }
  
}