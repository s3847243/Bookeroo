import axios from "axios";

export const getReviews = async (isbn) => {
  try {
    const res = await axios.get("http://localhost:8081/api/review/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addReview = async (newReview) =>{
    try{
        console.log(newReview);
        console.log("addReview call");
        await axios.post("http://localhost:8081/api/review", newReview);
    }
    catch (err){
        console.log(err);
    }
}