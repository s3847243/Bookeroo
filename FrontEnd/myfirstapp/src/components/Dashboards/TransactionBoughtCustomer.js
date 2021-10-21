import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-trans.json";
import ReadTransRow from "./ReadTransRow";

function TransactionBoughtCustomer(){
  
    // const [contacts, setContacts] = useState(data);


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

export default TransactionBoughtCustomer;