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

export const postSellBook = async (sellBook) => {
    try {
      await axios.post("http://localhost:8081/api/books/update",sellBook);
      
    } catch (err) {
      console.log(err);
    }
};
