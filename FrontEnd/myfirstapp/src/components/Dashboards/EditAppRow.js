import React from "react";

const EditAppRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  contact
}) => {
  return (
    <tr>
        <td>{contact.id}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter phone number..."
          name="phoneNum"
          value={editFormData.phoneNum}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter ABN..."
          name="ABN"
          value={editFormData.ABN}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        {contact.email}
      </td>
      <td>
      <button> 
        Block
        </button>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditAppRow;