import React, { useState, Fragment } from "react";
import "../usersTable.css";
import ReadTransRow from "./ReadTransRow";
import { getAllTransactionBoughtCustomer } from "../../actions/dashboardActions";
import { getId } from "../../actions/securityActions";

function TransactionBoughtCustomer(){
  
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllTransactionBoughtCustomer(getId()).then((res)=>{
        setContacts(res.data)
      });
    },[])
    console.log(contacts);


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