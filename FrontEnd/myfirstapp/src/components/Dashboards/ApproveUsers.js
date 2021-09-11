import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-App.json";
import ReadAppRow from "./ReadAppRow";
import EditAppRow from "./EditAppRow";

function ApproveUsers(){
  
    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
      
        fullName: "",
        ABN:"",status:"",
        address: "",
        phoneNumber: "",
        email: ""
    });

    const [editFormData, setEditFormData] = useState({
      fullName: "",
      ABN:"",status:"",
      address: "",
      phoneNumber: "",
      email: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newContact = {
        id: nanoid(),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNumber: editFormData.phoneNumber,
        email: editFormData.email,
      };

      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === editContactId);

      newContacts[index] = editedContact;

      setContacts(newContacts);
      setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);

      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === contactId);

      newContacts.splice(index, 1);

      setContacts(newContacts);
    };
    const checkBoxSubmit = (event) => {
        event.preventDefault();
        const checkedValues = Array.from(event.target.value).map(el => [
          el.id,
          el.checked
        ]);
      
        // now have object of id-checked key-value pairs
        // filter/format accordingly for POST request endpoint needs
        // JSON.stringify and place in body of request
      
        // Axios.post('http://localhost:8000/checkboxapi/user/')
        //   .then(response => {
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })
      };

    return (
      <>
      <div className="app-container">
        <form className="tableForm" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>ABN</th>
                <th>Address</th>
                <th>Email</th>
                <th>Approve</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditAppRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadAppRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      checkBoxSubmit={checkBoxSubmit}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <div className="form-add">
          <h2>Add a Contact</h2>
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

export default ApproveUsers;