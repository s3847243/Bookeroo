import React from "react";

const ReadTransRow = ({ contact}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookName}</td>
      <td>{contact.Author}</td>
      <td>{contact.date}</td>
      <td>{contact.seller}</td>
      <td>{contact.ISDB}</td>
      <td>{contact.status}</td>
    </tr>
  );
};

export default ReadTransRow;