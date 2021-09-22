import axios from "axios";
import {GET_ERRORS} from "./types";

export const addBook = (newBook,history) => async dispatch =>{
    try{

        await axios.post("http://localhost:8081/api/books/create", newBook);
        history.push("/addBook");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }
    catch (err){
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}
export const sellBook = (sellBook,history) => async dispatch =>{
    // try{
    //     await axios.post("http://localhost:8080/api/books/addBook", sellBook);
    //     history.push("/sellBook");
    //     dispatch({
    //         type: GET_ERRORS,
    //         payload: {}
    //     });
    // }
    // catch (err){
    //     dispatch ({
    //         type: GET_ERRORS,
    //         payload: err.response.data
    //     });
    // }
}
export const postEditBook = (postedit,id) => async () => {
    try {
      await axios.post("http://localhost:8080/api/books/update/"+id,postedit);
      
    } catch (err) {
      console.log(err);
    }
};
export const deleteBook = async (id) => {
    try {
        const res = await axios.post("http://localhost:8081/api/books/delete/"+id);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// export const getAllTransactions = async () => {
//     try {
//       const res = await axios.get("http://localhost:8081/api/transaction");
//       return res;
//     } catch (err) {
//       console.log(err);
//     }
//   };
