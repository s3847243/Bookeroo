import React from "react";

const ReadAppRow = ({ contact, handleEditClick, handleDeleteClick,checkBoxSubmit }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.ABN}</td>
      <td>{contact.address}</td>
      <td>{contact.email}</td>
      <td><label>
        <input type="checkbox"
               onClick={(event) => checkBoxSubmit(event)}></input>
        </label></td>
      <td>{contact.status}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadAppRow;