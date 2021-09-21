import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-books.json";
import ReadBookRow from "./ReadBookRow";
import EditBookRow from "./EditBookRow";

function AllBooks(){
  
    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
      bookName: "",
      Author: "",
      ISDB: "",seller:"",category:"",status:"",
      type: "",
    });

    const [editFormData, setEditFormData] = useState({
      bookName: "",
      Author: "",
      ISDB: "",seller:"",category:"",status:"",
      type: "",
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
        bookName: addFormData.bookName,
        Author: addFormData.Author,
        ISDB: addFormData.ISDB,
        seller: addFormData.seller,
        category: addFormData.category,status: addFormData.status,
        type: addFormData.type
      };

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        bookName: editFormData.bookName,
        Author: editFormData.Author,
        ISDB: editFormData.ISDB,
        seller: editFormData.seller,
        category: editFormData.category,status: editFormData.status,
        type: editFormData.type,
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
        bookName: contact.bookName,
        Author: contact.Author,
        ISDB: contact.ISDB,
        seller: contact.seller,
        category: contact.category,status: contact.status,
        type: contact.type,
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

    return (
      <Fragment>
      <div className="app-container">
        <form className="tableForm" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>BookName</th>
                <th>Author</th>
                <th>ISDB</th>
                <th>seller</th>
                <th>category</th>
                <th>status</th>
                <th>type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditBookRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadBookRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
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
              name="bookName"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="Author"
              required="required"
              placeholder="Enter an author..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="ISDB"
              required="required"
              placeholder="Enter a ISDB..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="seller"
              required="required"
              placeholder="Enter an seller..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="category"
              required="required"
              placeholder="Enter an category..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="status"
              required="required"
              placeholder="Enter an status..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="type"
              required="required"
              placeholder="Enter an type..."
              onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
          </form>
          </div>
      </div>
      </Fragment>
    );
};

export default AllBooks;