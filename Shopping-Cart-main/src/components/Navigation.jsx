import React from 'react'

import CartItems from './CartItems';


const Navigation = ({ brand, links, cartCount,carAddItems,cartTotal, handleRemoveItem}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">{brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        {links.map((link, index) => {
                            return link.subLinks ? (
                                <li className="nav-item dropdown" key={index}>
                                    <a
                                        className="nav-link dropdown-toggle"
                                        id={`navbarDropdown${index}`}
                                        href="..."
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"

                                    >
                                        {link.text}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                                        {link.subLinks.map((subLink, subIndex) => (
                                            <li key={subIndex}>
                                                <a className="dropdown-item" href={subLink.url}>
                                                    {subLink.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item" key={index}>
                                    <a className={`nav-link ${link.active ? 'active' : ''}`} href={link.url}>
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <CartItems cartCount={cartCount} carAddItems={carAddItems} cartTotal={cartTotal}  handleRemoveItem={handleRemoveItem} />

                </div>
            </div>
        </nav>
    )
}

export default Navigation