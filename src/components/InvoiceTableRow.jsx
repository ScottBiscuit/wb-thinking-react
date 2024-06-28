import axios from 'axios';
import React, {useState} from 'react'
import formatCurrency from '../utils/formatCurrency'
import EditableDescriptionCell from './EditableDescriptionCell';
import EditableHoursCell from './EditableHoursCell';
import EditableRowModeButtons from './EditableRowModeButtons';
import EditableRateCell from './EditableRateCell'

function InvoiceTableRow({initialInvoiceData, initialIsEditing, onDeleteRow}) {

  const [isEditing, setIsEditing] = useState(initialIsEditing)
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  const setEditMode = () => setIsEditing(true)
  const setNormalMode = async () => {
    const {data} = await axios.put(`/api/invoice/${initialInvoiceData.id}`, {
      description, rate, hours
    })
    
    if (!data.error){
      setDescription(data.description);
      setRate(data.rate);
      setHours(data.hours)
    }
    
    setIsEditing(false)

  }

  return (
    <tr>
          <EditableRowModeButtons 
          isEditing={isEditing} 
          onSaveClick={setNormalMode} 
          onEditClick={setEditMode}
          onDeleteRow={onDeleteRow}
          />
          <EditableDescriptionCell 
          isEditing={isEditing} 
          value={description}
          onValueChange={setDescription}
          />
          <EditableRateCell 
          isEditing={isEditing} 
          value={rate}
          onValueChange={setRate}
          />
          <EditableHoursCell 
          isEditing={isEditing} 
          value={hours}
          onValueChange={setHours}
          />
          <td>{formatCurrency(rate * hours)}</td>
      </tr>
  )
}

export default InvoiceTableRow