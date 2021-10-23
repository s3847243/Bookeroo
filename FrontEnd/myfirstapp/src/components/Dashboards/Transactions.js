import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import ReadTransRow from "./ReadTransRow";
import { getAllTransactionsAdmin } from "../../actions/dashboardActions";

function Transactions(){
  
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllTransactionsAdmin().then((res)=>{
        if(res === undefined) {return}
        setContacts(res.data)
      });
    },[])



  return (
    <Fragment>
      <div className="app-container">
        <form className="tableForm">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>bookId</th>
                <th>customerId</th>
                <th>sellerId</th>
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

export default Transactions;