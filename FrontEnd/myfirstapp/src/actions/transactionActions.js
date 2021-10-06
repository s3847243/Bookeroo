import axios from "axios";

export const getAllTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:8082/api/transactions");
      return res;
    } catch (err) {
      console.log(err);
    }
  };

export const getTransactions = async (isbn) => {
  try {
    const res = await axios.get("http://localhost:8082/api/transactions/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addTransaction = async (newTransaction) =>{
    try{
        console.log(newTransaction);
        console.log("addTransaction call");
        await axios.post("http://localhost:8082/api/transactions/create", newTransaction);
    }
    catch (err){
        console.log(err);
    }
}