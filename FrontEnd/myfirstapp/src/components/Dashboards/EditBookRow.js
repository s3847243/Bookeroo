import React from "react";

const EditBookRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,contact
}) => {
  return (
    <tr>
        <td>{contact.id}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="author"
          value={editFormData.author}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter ISDB..."
          name="  ISBN"
          value={editFormData.isbn}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter ISDB..."
          name="  published"
          value={editFormData.published}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an category..."
          name="genre"
          value={editFormData.genre}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <button className ="save-cancel-btn"type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditBookRow;