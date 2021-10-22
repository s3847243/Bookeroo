import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import ReadTransRow from "./ReadTransRow";
import { getAllTransactionsAdmin } from "../../actions/dashboardActions";

function Transactions(){
  
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllTransactionsAdmin().then((res)=>{
        setContacts(res.data)
      });
    },[])

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
                <th>customerName</th>
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

export default Transactions;