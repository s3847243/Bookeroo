import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
// import store from './../store';


export const createNewUser = (newUser, history) => async dispatch => {

    try{

      await axios.post("http://localhost:8080/api/users/register", newUser);
      history.push("/login");
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

};

export const login = LoginRequest => async dispatch => {
  try {
    // post => Login Request
    const res = await axios.post("http://localhost:8080/api/users/login", LoginRequest);
    // extract token from res.data
    const { token } = res.data;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    // set our token in header ***
    setJWTToken(token);
    // decode token on React
    const decoded = jwt_decode(token);
    // dispatch to our securityReducer
    console.log(decoded);
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

export const logout = async () => {
  console.log("logout call")
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
};


export const getType = () => {
  const token = localStorage.getItem("jwtToken");
  if(token){
    return jwt_decode(token).userType;
  }
  else{
    return "NONE"
  }
}

export const isLogin = () => {
  if (localStorage.getItem("jwtToken")) {
      return true;
  }

  return false;
}

export const getId = () => {
  const token = localStorage.getItem("jwtToken");
  if(token){
    return jwt_decode(token).id;
  }
  else{
    return "NONE"
  }
}

export const getName = () => {
  const token = localStorage.getItem("jwtToken");
  if(token){
    return jwt_decode(token).fullName;
  }
  else{
    return "NONE"
  }
}