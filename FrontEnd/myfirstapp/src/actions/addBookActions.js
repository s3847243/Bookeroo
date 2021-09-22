import axios from "axios";

export const addBook = async (newBook) =>{
    try{
        console.log(newBook);
        console.log("addbook call");
        await axios.post("http://localhost:8081/api/books/create", newBook);
    }
    catch (err){
        console.log(err);
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
export const postEditBook = async (postedit,id) => {
    try {
      await axios.post("http://localhost:8081/api/books/update/"+id,postedit);
      
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
