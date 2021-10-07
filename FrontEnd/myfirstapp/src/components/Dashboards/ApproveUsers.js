import React, { useState, Fragment ,useEffect} from "react";
import "../usersTable.css";
import ReadAppRow from "./ReadAppRow";
import EditAppRow from "./EditAppRow";
import { getUnapprovedUsers } from "../../actions/dashboardActions";
import { postApproveUsers } from "../../actions/dashboardActions"
function ApproveUsers(){
  
  const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getUnapprovedUsers().then((res)=>{
        setContacts(res.data)
      });
    },[])
    

    // const [addFormData, setAddFormData] = useState({
      
    //     fullName: "",
    //     ABN:"",status:"",
    //     address: "",
    //     phoneNum: "",
    //     email: ""
    // });

    const [editFormData, setEditFormData] = useState({
      fullName: "",phoneNum: "",
      ABN:"",
      address: "",
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
    //     fullName: addFormData.fullName,
    //     address: addFormData.address,
    //     phoneNum: addFormData.phoneNum,
    //     email: addFormData.email,
    //   };

    //   const newContacts = [...contacts, newContact];
    //   setContacts(newContacts);
    // };

    const handleEditFormSubmit = (event,contact) => {
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNum: editFormData.phoneNum,
        email:contact.email,type:contact.type,approve:contact.approve
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
        phoneNum: contact.phoneNum,
      };

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditContactId(null);
    };


    const handleApproveClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === contactId);
      postApproveUsers(contactId);
      newContacts.splice(index, 1);
      setContacts(newContacts);


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
                <th>Phone</th>
                <th>ABN</th>
                <th>Address</th>
                <th>Email</th>
                <th>Approve</th>
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
                      handleApproveClick={handleApproveClick}
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

export default ApproveUsers;