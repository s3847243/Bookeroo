import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-orders.json";
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


    const handleCancelOrderClick = (event,contact) => {
      const newContacts = [...contacts];
      const newStatus = "Cancel"
    
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
    return (
      <Fragment>
      <div className="app-container">
        <form className="tableForm">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>bookName</th>
                <th>Author</th>
                <th>date</th>
                <th>seller</th>
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