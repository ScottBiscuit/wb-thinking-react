import './InvoiceTable.css';
import React, { useState } from 'react'
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './InvoiceTableRow';
import generateId from '../utils/idGenerator';

function InvoiceTable() {
  const[initialInvoiceData, setInitialInvoiceData] = useState([
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ])

  
  const addInvoiceRow = () => {
    const newInvoiceList = [...initialInvoiceData, {
      id:generateId(),
      description:'Description',
      rate:'',
      hours:'',
      isEditing:true
    }]
    setInitialInvoiceData(newInvoiceList)
  }
  
  const deleteInvoiceRow = (id) => {
    const newInvoiceListCopy = [...initialInvoiceData]
    const newInvoiceList = newInvoiceListCopy.filter(invoiceItem => {
      return invoiceItem.id !== +id
    })
    setInitialInvoiceData(newInvoiceList)
  }
  
  const rows = initialInvoiceData.map(invoiceItem => {
    const {id, description, rate, hours} = invoiceItem

    return (
      <InvoiceTableRow 
      key={id} 
      initialInvoiceData={{description, hours, rate}} 
      initialIsEditing={false}
      onDeleteRow={() => deleteInvoiceRow(id)}
      />
    )
  })

  return (
    <table>
      <thead>
        <InvoiceTableHeader />
      </thead>
      <tbody>
       {rows}
      </tbody>
        <tfoot>
          <InvoiceTableAddButton 
          onAddRow={addInvoiceRow}
          />
        </tfoot>
    </table>
  )
}

export default InvoiceTable