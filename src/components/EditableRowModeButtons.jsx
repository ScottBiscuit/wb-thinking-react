import React from 'react'

function EditableRowModeButtons({ isEditing, onEditClick, onSaveClick, onDeleteRow }) {
  return isEditing ? (
    <td>
        <button onClick={onSaveClick}>Save</button>
    </td>
  ) : (
    <td>
        <button onClick={onDeleteRow}>Delete</button>
        <button onClick={onEditClick}>Edit</button>
    </td>
  );
}

export default EditableRowModeButtons