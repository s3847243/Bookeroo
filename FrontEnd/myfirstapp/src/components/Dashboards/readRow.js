import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick,handleBlockClick}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNum}</td>
      <td>{contact.address}</td>
      <td>{contact.username}</td>
      <td>{contact.userType}</td>
      <td>
        <button name="approve" className="blockButton" type="button" value="BLOCK" onClick={(event) => handleBlockClick(event, contact.id)} > Block </button>
        </td>
      <td>
        <button
          type="button"
          className="edit-button"
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

export default ReadOnlyRow;