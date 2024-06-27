import React from 'react'
import formatCurrency from '../utils/formatCurrency'

function EditableRateCell({value, isEditing, onValueChange}) {
  return isEditing ? (
    <td>
        <input 
        type="text" 
        value={value} 
        onChange={(e) => onValueChange(e.target.value)}
        />
        /hr
        </td>
  ) : (
    <td>{formatCurrency(value)}/hr</td>
  )
}

export default EditableRateCell