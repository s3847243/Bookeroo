import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-orders.json";
import ReadCustRow from "./ReadCustRow";

function CustomerOrders(){
  
    const [contacts, setContacts] = useState(data);


    const handleCancelOrderClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === contactId);
      console.log(index);
      deleteUser(contactId);
      newContacts.splice(index, 1);

      setContacts(newContacts);
      
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
                <th>ISDB</th>
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