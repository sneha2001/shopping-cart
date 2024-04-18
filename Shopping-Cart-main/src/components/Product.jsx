import React from 'react';
import { StarFill } from "react-bootstrap-icons";

const Product = ({ product, handleAddItem, handleRemoveItem, isInCart }) => {


    const handleClick = () => isInCart() ? handleRemoveItem(product) : handleAddItem(product);

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{product.sale}</div>
                <img className="card-img-top" src={product.img}  alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{product.title}</h5>

                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {
                                Array.from({ length: product.rating }, (_, i) => <StarFill key={i} />)
                            }
                        </div>


                        <span className={product.oldprice ? "text-muted text-decoration-line-through" : ''}>{product.oldprice ? `$${product.oldprice}` : ''}</span>
                        ${product.newprice}

                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button className={isInCart() ? "btn btn-danger mt-auto" : "btn btn-outline-dark mt-auto"} onClick={handleClick}>
                            {isInCart() ? "Remove from cart" : "Add to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product