import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/users");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllUnapproved = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/users");
        return res;
    } catch (err) {
        console.log(err);
    }
};


export const deleteUser = async (id) => {
    try {
      const res = await axios.post("http://localhost:8080/api/users/delete", id);
      return res;
    } catch (err) {
      console.log(err);
    }
  };