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

export const getAllTransactionsAdmin = async () => {
  try {
    const res = await axios.get("http://localhost:8082/api/transaction/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllTransactionsShopOwner = async (id) => {
  try {
    const res = await axios.get("http://localhost:8082/api/transaction/seller/"+id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllTransactionSoldCustomer = async (id) => {
  try {
    const res = await axios.get("http://localhost:8082/api/transaction/seller/"+id);
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const getAllTransactionBoughtCustomer = async (id) => {
  try {
    const res = await axios.get("http://localhost:8082/api/transactions/customer/"+id);  // 
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const getAllOrdersCustomer = async (id) => {         
  try {                                                              /// same as getalltransboughtcustoer
    const res = await axios.get("http://localhost:8082/api/transactions/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postCancelOrderCustomer = async (postCancel,id)=> {
  try {
    await axios.post("http://localhost:8082/api/transactions/update/"+id, postCancel);
    
  } catch (err) {
    console.log(err);
  }
};
