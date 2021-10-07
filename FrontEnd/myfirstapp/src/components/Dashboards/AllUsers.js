import React, { useState, Fragment, useEffect } from "react";
import "../usersTable.css";
import ReadOnlyRow from "./readRow";
import EditableRow from "./editRow";
import { getAllUsers } from "../../actions/dashboardActions"
import { postEditUser } from "../../actions/dashboardActions";
import { deleteUser } from "../../actions/dashboardActions";
import { blockUser } from "../../actions/dashboardActions";


function AllUsers(){
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllUsers().then((res)=>{
        setContacts(res.data)
      });
    },[])

    const [editFormData, setEditFormData] = useState({
      fullName: "",phoneNum: "",
      address: ""
    });

    const [editContactId, setEditContactId] = useState(null);
    const [editUsername,setUsername] = useState(null);
    const [editType,setType]=useState(null);
    const [editPassword,setPassword]=useState(null);
    const [isEnabled,setisEnabled]=useState(null);
    const [editABN,setABN]=useState(null);

    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event,contact) => {
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,phoneNum: editFormData.phoneNum,
        address: editFormData.address,username:editUsername,userType:editType,enabled:isEnabled,
        password:editPassword,abn:editABN
      };

      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === editContactId);

      newContacts[index] = editedContact;
      postEditUser(editedContact, editedContact.id); 

      setContacts(newContacts);
      setEditContactId(null);
      setUsername(null);
      setType(null);
      setABN(null);
      setPassword(null);
      setisEnabled(null);
    };

    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
      setUsername(contact.username);
      setType(contact.userType);
      setABN(contact.abn);
      setPassword(contact.password);
      setisEnabled(contact.enabled);

      const formValues = {
        fullName: contact.fullName,phoneNum: contact.phoneNum,
        address: contact.address,
        
      };

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditContactId(null);
      setUsername(null);
      setType(null);
      setABN(null);
      setPassword(null);
      setisEnabled(null);
    };

    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === contactId);
      console.log(index);
      deleteUser(contactId);
      newContacts.splice(index, 1);

      setContacts(newContacts);
      
    };
 
    const handleBlockClick = (contactId) => {
      blockUser(contactId);
    }
    //if (!contacts) return null;

    return (
      <Fragment>
      <div className="app-container">
        <form className="tableForm" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Email</th>
                <th>User type</th>
                <th>Block</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                      contact={contact}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      handleBlockClick={handleBlockClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      </Fragment>
    );
};

export default AllUsers;