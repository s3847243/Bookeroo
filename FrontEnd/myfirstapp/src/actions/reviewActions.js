import axios from "axios";

export const getAllReviews = async () => {
  try {
    const res = await axios.get("http://3.105.25.226:8081/api/reviews/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getIsbnReviews = async (isbn) => {
  try {
    const res = await axios.get("http://3.105.25.226:8081/api/reviews/isbn/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addReview = async (newReview) => {
  try {
    console.log(newReview);
    console.log("addReview call");
    await axios.post("http://3.105.25.226:8081/api/reviews/create", newReview);
  }
  catch (err) {
    console.log(err);
  }
}