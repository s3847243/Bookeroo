import React from "react";

const ReadCustRow = ({disable,setDisable, contact, handleCancelOrderClick}) => {
  const getHours = () => {
    const currentHours = new Date().getHours();
    return currentHours;
  }
  let date = new Date(contact.create_At);
  let prettyDate = date.getHours();
  if((getHours - prettyDate) > 2 ){
    disable= true;
  }
  if(contact.status === "cancel"){
    disable = true;
  }
  
  return (
    <tr>
      <td>{contact.bookId}</td>
      <td>{contact.customerId}</td>
      <td>{contact.sellerId}</td>
      <td>{contact.value}</td>
      <td>{contact.status}</td>
      <td>
        <button
          type="button"
          disabled={disable}
          onClick={(event) => handleCancelOrderClick(event, contact)}
        >
          Cancel Order
        </button>
      </td>
    </tr>
  );
};

export default ReadCustRow;