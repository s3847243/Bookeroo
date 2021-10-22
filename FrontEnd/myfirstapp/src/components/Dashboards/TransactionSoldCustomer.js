import React, { useState,useEffect, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import ReadTransRow from "./ReadTransRow";
import { getAllTransactionSoldCustomer } from "../../actions/dashboardActions";
import { getId } from "../../actions/securityActions";

function TransactionSoldCustomer(){
  
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllTransactionSoldCustomer(getId()).then((res)=>{
        if(res === undefined) {return}
        setContacts(res.data)
      });
    },[])
    console.log(contacts);
    if (!contacts) return null;


    return (
      <Fragment>
      <div className="app-container">
        <form className="tableForm">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>bookName</th>
                <th>customerName</th>
                <th>ISBN</th>
                <th>seller</th>
                <th>amount</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                   (
                    <ReadTransRow
                      contact={contact}
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

export default TransactionSoldCustomer;