import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    // <div classNameNameName="navbar">
    //     <div classNameNameName="title">
    //         Winter Clothing Shop
    //     </div>
    //     <div classNameNameName="navbar-links">
    //         
    //         
    //     </div>
    // </div>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fake React Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ms-3">
              <Link to="/" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

