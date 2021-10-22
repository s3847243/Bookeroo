import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-orders.json";
import ReadOrderRow from "./ReadOrderRow";

function Orders(){

    const [contacts, setContacts] = useState(data);
   


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
                <th>ISBN</th>
                <th>seller</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                   (
                    <ReadOrderRow
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

export default Orders;