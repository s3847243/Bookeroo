import React from "react";

const ReadOrderRow = ({ contact,handleCancelOrderClick}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookName}</td>
      <td>{contact.Author}</td>
      <td>{contact.ISBN}</td>
      <td>{contact.seller}</td>
      <td>{contact.Date}</td>
      <td>
      <button
          type="button"
          className="cancel-button"
          onClick={(event) => handleCancelOrderClick(event, contact)}
        >
          Cancel Order
        </button>
        </td>
    </tr>
  );
};

export default ReadOrderRow;