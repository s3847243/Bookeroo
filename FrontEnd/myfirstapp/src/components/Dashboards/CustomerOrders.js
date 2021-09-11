import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-orders.json";
import ReadCustRow from "./ReadCustRow";

function CustomerOrders(){
  
    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
      bookName: "",
      Author: "",ISDB:"",
      date: "",
      seller: "",status:""
    });

    // const [editFormData, setEditFormData] = useState({
    //     bookName: "",
    //     customerName: "",
    //     date: "",
    //     seller: "",amount:"",status:""
    // });

    // const [editContactId, setEditContactId] = useState(null);
    // adding through the form
    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
    };
    // adding on the form after pressing submit Submit
    const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newContact = {
        id: nanoid(),
        bookName: addFormData.bookName,
        Author: addFormData.Author,
        date: addFormData.date,
        seller: addFormData.seller,ISDB: addFormData.ISDB,
        status: addFormData.status
      };

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };

    // const handleEditFormSubmit = (event) => {
    //   event.preventDefault();

    //   const editedContact = {
    //     bookName: editFormData.bookName,
    //     customerName: editFormData.customerName,
    //     date: editFormData.date,
    //     seller: editFormData.seller,amount: editFormData.amount,
    //     status: editFormData.status
    //   };

    //   const newContacts = [...contacts];

    //   const index = contacts.findIndex((contact) => contact.id === editContactId);

    //   newContacts[index] = editedContact;

    //   setContacts(newContacts);
    //   setEditContactId(null);
    // };

    return (
      <>
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
                    />
                  )
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <div className="form-add">
          <h2>Add an orders</h2>
          <form className="formAdd" onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="fullName"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="address"
              required="required"
              placeholder="Enter an addres..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="phoneNumber"
              required="required"
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
            />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
          </form>
          </div>
      </div>
      </>
    );
};

export default CustomerOrders;