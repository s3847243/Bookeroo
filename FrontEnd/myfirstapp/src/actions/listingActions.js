import axios from "axios";

export const getIsbnListings = async (isbn) => {
  try {
    const res = await axios.get("http://3.105.25.226:8083/api/listings/isbn/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};


export const addListing = async (newListing) =>{
    try{
        await axios.post("http://3.105.25.226:8083/api/listings/create", newListing);
    }
    catch (err){
        console.log(err);
    }
}