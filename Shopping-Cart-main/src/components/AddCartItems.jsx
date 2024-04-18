import React from 'react'
import { TrashFill } from 'react-bootstrap-icons'

const AddCartItems = ({addListItems, handleRemoveItem}) => {
  return (
    
          <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{addListItems.title}</div>
            <span>Price of Item: </span>
          <span className="badge bg-primary">{addListItems.newprice}</span>
          </div>
          <button type="button" className="btn btn-sm btn-danger align-slef-center" onClick={()=> handleRemoveItem(addListItems)}  aria-label="Close"> <TrashFill /> </button>
        </li>
  )
}

export default AddCartItems