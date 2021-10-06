import axios from "axios";

export const getAllTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/transaction");
      return res;
    } catch (err) {
      console.log(err);
    }
  };

export const getTransactions = async (isbn) => {
  try {
    const res = await axios.get("http://localhost:8081/api/transaction/" + isbn);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addTransaction = async (newTransaction) =>{
    try{
        console.log(newTransaction);
        console.log("addTransaction call");
        await axios.post("http://localhost:8081/api/transaction", newTransaction);
    }
    catch (err){
        console.log(err);
    }
}