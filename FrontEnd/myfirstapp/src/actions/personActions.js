import axios from "axios";
import { GET_ERRORS, GET_PERSONS, GET_PERSON } from "./types";

export const createPerson = (person, history) => async dispatch => {
  try {
    const res = await axios.post("http://3.105.25.226:8080/api/person", person);
    console.log(res.data);
    history.push("/dashboard");
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
export const getPersons = () => async dispatch => {
  const res = await axios.get("/api/person/all");
  dispatch({
    type: GET_PERSONS,
    payload: res.data
  });
};

export const getPerson = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/person/${id}`);
    dispatch({
      type: GET_PERSON,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};
