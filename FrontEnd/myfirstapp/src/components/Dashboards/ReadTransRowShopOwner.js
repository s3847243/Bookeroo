import React from "react";

const ReadTransRowShopOwner = ({ contact}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.bookName}</td>
      <td>{contact.customerName}</td>
      <td>{contact.seller}</td>
      <td>{contact.amount}</td>
      <td>{contact.status}</td>
    </tr>
  );
};

export default ReadTransRowShopOwner;