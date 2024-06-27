import React from 'react'

function InvoiceTableAddButton({onAddRow}) {
  return (
    <tr>
      <td></td>
      <td colSpan="4">
        <button onClick={onAddRow}>Add</button>
      </td>
    </tr>
  )
}

export default InvoiceTableAddButton