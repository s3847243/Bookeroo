import React from "react";

const ReadTransRowShopOwner = ({ contact}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookId}</td>
      <td>{contact.customerId}</td>
      <td>Me</td>
      <td>{contact.val}</td>
      <td>{contact.status}</td>
    </tr>
  );
};

export default ReadTransRowShopOwner;