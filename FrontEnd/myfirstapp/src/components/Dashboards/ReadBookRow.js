import React from "react";

const ReadBookRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    
    <tr>
      <td className="id-contact">{contact.id}</td>
      <td>{contact.title }</td>
      <td>{contact.author}</td>
      <td>{contact.isbn}</td>
      <td>{contact.published}</td>
      <td>{contact.genre}</td>
      <td>
        <button
          type="button"
          className="edit-button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button  className="delete-button" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
    
  );
};

export default ReadBookRow;