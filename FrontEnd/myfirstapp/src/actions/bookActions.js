import axios from "axios";

export const getAllBooks = async () => {
  try {
    const res = await axios.get("http://localhost:8081/api/books");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getBookByID = async (isbn) => {
  try {
    const res = await axios.get("http://localhost:8081/api/books/isbn/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const searchBooks = async (searchParams) => {
  try {
    const res = await axios.get("http://localhost:8081/api/books/search", { params: { params: searchParams } });
    return res;
  } catch (err) {
    console.log(err);
  }
}