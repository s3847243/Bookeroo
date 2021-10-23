import axios from "axios";

export const getAllTransactions = async () => {
    try {
      const res = await axios.get("http://3.105.25.226:8082/api/transactions");
      return res;
    } catch (err) {
      console.log(err);
    }
  };

export const getTransactions = async (isbn) => {
  try {
    const res = await axios.get("http://3.105.25.226:8082/api/transactions/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addTransaction = async (newTransaction) =>{
    try{
        await axios.post("http://3.105.25.226:8082/api/transactions/create", newTransaction);
    }
    catch (err){
        console.log(err);
    }
}