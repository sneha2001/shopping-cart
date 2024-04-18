import React from 'react'
import { CartFill } from 'react-bootstrap-icons';
import AddCartItems from './AddCartItems';



const CartItems = ({ cartCount, carAddItems,cartTotal, handleRemoveItem}) => {
    return (
        <form className="d-flex">
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i className="bi-cart-fill me-1">
                    <CartFill />
                </i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 " id="staticBackdropLabel">Added Cart Items</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                cartCount > 0 ?
                                <ol className="list-group list-group-numbered ">
                                     {
                                        carAddItems.map((item, index) => {
                                            return <AddCartItems key={index} addListItems={item}  handleRemoveItem={ handleRemoveItem} />
                                            
                                        })
                                    }
                                   </ol> : 'No items'
                            }



                        </div>
                        <div className="modal-footer">
                            <h3 className='text-center'>Total:${cartTotal}</h3>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CartItems