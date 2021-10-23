import React, { useState, Fragment,useEffect } from "react";
import "../usersTable.css";
import ReadCustRow from "./ReadCustRow";
import {getId }from "../../actions/securityActions";
import { getAllTransactionBoughtCustomer } from "../../actions/dashboardActions";
import { postCancelOrderCustomer } from "../../actions/dashboardActions";


function CustomerOrders(){
  
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllTransactionBoughtCustomer(getId()).then((res)=>{
        setContacts(res.data)
      });
    },[])
    console.log(contacts);
    
    const [disable, setDisable] = useState(false);
    

    const handleCancelOrderClick = (event,contact) => {
      const newContacts = [...contacts];
      const newStatus = "cancel";
      setDisable(true);
      const postCancel = {
        id:contact.id,
        bookTitle:contact.bookTitle,
        bookId:contact.bookId,
        customerId:contact.customerId,
        sellerId:contact.sellerId,
        value:contact.value,
        status:newStatus
      }
      postCancelOrderCustomer(postCancel,contact.id);
      
    };
    setDisable(null);
    return (
      <Fragment>
      <div className="app-container">
        <form className="tableForm">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>customerId</th>
                <th>sellerId</th>
                <th>value</th>
                <th>status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                   (
                    <ReadCustRow
                      contact={contact}
                      handleCancelOrderClick = {handleCancelOrderClick}
                      disable = {disable}
                      setDisable = {setDisable}
                    />
                  )
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        
      </div>
      </Fragment>
    );
};

export default CustomerOrders;