import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="title">
            Winter Clothing Shop
        </div>
        <div className="navbar-links">
            <Link to="/"> Shop </Link>
            <Link to="/cart"> Cart </Link>
        </div>
    </div>
  )
}

