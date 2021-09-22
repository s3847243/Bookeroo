import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/users");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getUnapprovedUsers = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/users/approve");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postApproveUsers = async (id) => {
  try {
    const res = await axios.post("http://localhost:8080/api/users/approve/"+id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postEditUser = async (postedit,id)=> {
  try {
    await axios.post("http://localhost:8080/api/users/update/"+id, postedit);
    
  } catch (err) {
    console.log(err);
  }
};
export const deleteUser = async (id) => {
    try {
      const res = await axios.post("http://localhost:8080/api/users/delete/"+ id);
      return res;
    } catch (err) {
      console.log(err); 
    }
  };

export const blockUser = async (id) => {
  try {
    const res = await axios.post("http://localhost:8080/api/users/blockUser/"+ id);
    return res;
  } catch (err) {
    console.log(err);
  }
};
