import axios from "axios";

export const addBook = (newBook,history) => async dispatch =>{
    try{

        await axios.post("http://localhost:8080/api/books/addBook", newBook);
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
    try{
        await axios.post("http://localhost:8080/api/books/addBook", sellBook);
        history.push("/sellBook");
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