import React from "react";

const ReadCustRow = ({ contact, handleCancelOrderClick}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookName}</td>
      <td>{contact.Author}</td>
      <td>{contact.seller}</td>
      <td>{contact.category}</td>
      <td>{contact.status}</td>
      <td>{contact.type}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleCancelOrderClick(event, contact)}
        >
          Cancel Order
        </button>
      </td>
    </tr>
  );
};

export default ReadCustRow;