import axios from "axios";

export const getListings = async (isbn) => {
  try {
    const res = await axios.get("http://localhost:8081/api/listings/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addListing = async (newListing) =>{
    try{
        console.log(newListing);
        console.log("addListing call");
        await axios.post("http://localhost:8081/api/listings", newListing);
    }
    catch (err){
        console.log(err);
    }
}