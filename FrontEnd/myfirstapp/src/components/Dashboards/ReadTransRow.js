import React from "react";

const ReadTransRow = ({ contact}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookId}</td>
      <td>{contact.customerId}</td>
      <td>{contact.sellerId}</td>
      <td>{contact.value}</td>
      <td>{contact.status}</td>
    </tr>
  );
};

export default ReadTransRow;