import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


// // export const createNewUser = (newUser, history) => async dispatch => {
// //     try{
// //         await axios.post("localhost:8080/api/users/register", newUser);
// //         console.log("inside the action, after the post")
// //         history.push("/login");
// //         dispatch({
// //             type: GET_ERRORS,
// //             payload: {}
// //         });
// //     }
// //     catch (err){
// //         dispatch ({
// //             type: GET_ERRORS,
// //             payload: err.response.data
// //         });
// //     }
// // };

export const createNewUser = (newUser, history) => {
    console.log(newUser);
    try{
        axios.post("http://localhost:8080/api/users/register", newUser).then(res => {
            console.log(res);
            console.log(res.data);
          })
        console.log("inside the action, after the post")
        history.push("/login");

    }
    catch (err){
    }
};

// // export const login = LoginRequest => async dispatch => {
// //     try {

// //         //post => login request

// //         //extract token from res.data

// //         //set our token in the local storage

// //         // set our token in header 

// //         //decode the token on React

// //         // dispatch to our securityReducer

// //     }
// //     catch (err)
// //     {

// //     }

// // }


export const login = (credentials, history) => {

    try{
        axios.post("http://localhost:8080/api/users/login", credentials).then(res => {
            console.log(res);
            console.log(res.data);
          })
        console.log("inside the action, after the post")
        history.push("/dashboard");

    }
    catch (err){
    }

}

// after this completely done by homy
// export const createNewUser = (newUser, history) => async dispatch => {

//     try{

//         await axios.post("http://localhost:8080/api/users/register", newUser);
//         history.push("/login");
//         dispatch({
//             type: GET_ERRORS,
//             payload: {}
//         });
//     }
//     catch (err){
//         dispatch ({
//             type: GET_ERRORS,
//             payload: err.response.data
//         });



//     }

// };

// export const login = LoginRequest => async dispatch => {
//     try {
//       // post => Login Request
//       const res = await axios.post("http://localhost:8080/api/users/login", LoginRequest);
//       // extract token from res.data
//       const { token } = res.data;
//       // store the token in the localStorage
//       localStorage.setItem("jwtToken", token);
//       // set our token in header ***
//       setJWTToken(token);
//       // decode token on React
//       const decoded = jwt_decode(token);
//       // dispatch to our securityReducer
//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: decoded
//       });
//     } catch (err) {
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       });
//     }
//   };
  
  export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
      type: SET_CURRENT_USER,
      payload: {}
    });
  };
  
