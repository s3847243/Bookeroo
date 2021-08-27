import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


// export const createNewUser = async (newUser, history) => {
//     console.log(newUser);
//     let retVal = false;
//     try{
//         await axios.post("http://localhost:8080/api/users/register", newUser).then(res => {
//             console.log(res);
//             console.log(res.data);  
//         })

//         history.push("/login");  
        
//         //reg success
//         return false;
//     }
//     catch (err){
//         console.error(err);
//         //reg failure
//         return true;
//     }

// };

export const createNewUser = (newUser, history) => async dispatch => {
    try{
        await axios.post("/api/users/register", newUser);
        history.push("/login");
        dispatch({
        
            payload: {}
        });
    }
    catch (err){
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

// export const login = async (credentials, history) => {
    
//     try{
//         await axios.post("http://localhost:8080/api/users/login", credentials).then(res => {
//             console.log(res);
//             console.log(res.data);
//           })
 
//         history.push("/dashboard");

//         //login success
//         return false;

//     }
//     catch (err){
//         console.error(err)
//         //login failure
//         return true;
//     }

// }


export const login = LoginRequest => async dispatch => {
    try {

      // post => Login Request
      const res = await axios.post("/api/users/login", LoginRequest);
      // extract token from res.data
      const { token } = res.data;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      // dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
      type: SET_CURRENT_USER,
      payload: {}
    });
  };
