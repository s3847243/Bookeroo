import React from "react";

const ReadAppRow = ({ contact, handleEditClick,handleApproveClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNum}</td>
      <td>{contact.abn}</td>
      <td>{contact.address}</td>
      <td>{contact.email}</td>
      <td><label>
        <button type="button" onClick={() => handleApproveClick(contact.id)}> 
        Approve
        </button>
        </label></td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        
      </td>
    </tr>
  );
};

export default ReadAppRow;