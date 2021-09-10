import React from "react";

const ReadAppRow = ({ contact, handleEditClick, handleDeleteClick,checkBoxSubmit }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookName}</td>
      <td>{contact.Author}</td>
      <td>{contact.ISDB}</td>
      <td>{contact.seller}</td>
      <td>{contact.category}</td>
      <td>{contact.status}</td>
      <td>{contact.type}</td>
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