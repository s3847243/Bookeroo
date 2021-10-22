import React, { useState, useEffect,Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import ReadTransRowShopOwner from "./ReadTransRowShopOwner";
import { getId } from "../../actions/securityActions";
import { getAllTransactionsShopOwner } from "../../actions/dashboardActions";

function TransactionsShopOwner(){
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllTransactionsShopOwner(getId()).then((res)=>{
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
                    <ReadTransRowShopOwner
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

export default TransactionsShopOwner;