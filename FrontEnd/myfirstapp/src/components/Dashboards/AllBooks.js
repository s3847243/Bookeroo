import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../usersTable.css";
import data from "./mock-data-books.json";
import ReadBookRow from "./ReadBookRow";
import EditBookRow from "./EditBookRow";
import { getAllBooks } from "../../actions/bookActions";
import { postEditBook } from "../../actions/addBookActions";
import { deleteBook } from "../../actions/addBookActions";

function AllBooks(){
  
    const [contacts, setContacts] = useState(null);
    useEffect(() => {
      getAllBooks().then((res)=>{
        setContacts(res.data)
      });
    },[])
    console.log(contacts);
  

    // const [addFormData, setAddFormData] = useState({
    //   title: "",
    //   author: "",
    //   isbn: "",seller:"",category:"",status:"",
    //   type: "",
    // });

    const [editFormData, setEditFormData] = useState({
      title: "",
      author: "",
      isbn: "",published:"",genre:""
    });

    const [editContactId, setEditContactId] = useState(null);

    // const handleAddFormChange = (event) => {
    //   event.preventDefault();

    //   const fieldName = event.target.getAttribute("name");
    //   const fieldValue = event.target.value;

    //   const newFormData = { ...addFormData };
    //   newFormData[fieldName] = fieldValue;

    //   setAddFormData(newFormData);
    // };

    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    };

    // const handleAddFormSubmit = (event) => {
    //   event.preventDefault();

    //   const newContact = {
    //     id: nanoid(),
    //     title: addFormData.title,
    //     author: addFormData.author,
    //     isbn: addFormData.isbn,
    //     seller: addFormData.seller,
    //     category: addFormData.category,status: addFormData.status,
    //     type: addFormData.type
    //   };

    //   const newContacts = [...contacts, newContact];
    //   setContacts(newContacts);
    // };

    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        title: editFormData.title,
        author: editFormData.author,
        isbn: editFormData.isbn,
        published: editFormData.published,
        genre: editFormData.genre
      };

      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === editContactId);

      newContacts[index] = editedContact;
      postEditBook(editedContact,editContactId); // id and object
      console.log(editedContact);
      setContacts(newContacts);
      setEditContactId(null);
      
    };

    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);

      const formValues = {
        title: contact.title,
        author: contact.author,
        isbn: contact.isbn,
        published: contact.published,
        genre: contact.genre
      };

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === contactId);
      deleteBook(contactId);
      newContacts.splice(index, 1);

      setContacts(newContacts);
    };
    if (!contacts) return null;
    return (
      <>
      <div className="app-container">
        <form className="tableForm" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>author</th>
                <th>isbn</th>
                <th>published</th>
                <th>genre</th>
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
                      contact={contact}
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
        
      </div>
      </>
    );
};

export default AllBooks;