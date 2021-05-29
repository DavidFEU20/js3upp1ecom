import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../shoppingcart/ShoppingCart';

const Navbar = () => {

  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)

  return (
<div>
{/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <!-- Container wrapper --> */}
    <div className="container">
      {/* <!-- Toggle button --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* <!-- Collapsible wrapper --> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <!-- Navbar brand --> */}
        <Link className="navbar-brand" to="/">e-Commerce.se
      </Link>
        {/* <!-- Left links --> */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <NavLink className="nav-link"  to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About Us</NavLink>
          </li>

        </ul>
        {/* <!-- Left links --> */}
      </div>
      {/* <!-- Collapsible wrapper --> */}

      {/* <!-- Right elements --> */}
      
        {/* <!-- Icon --> */}
        <ul className="navbar-nav">
          <li className="nav-item dropdown me-3">
            <span
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-dark"> { totalCartQuantity } </span>
            </span>
          
            <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
              <ShoppingCart />
            </ul>
          </li>

          <li className="nav-item dropdown" v-if="loggedIn">
            <span
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user"></i>
            </span>
          
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item">My Orders</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <span  href="#" className="dropdown-item" >Logout</span>
              </li>
            </ul>
          </li>
          
          <li className="nav-item dropdown" v-if="!loggedIn">
            <NavLink
              className="nav-link"
              to="login"
              id="navbarDropdown"
              role="button"
              
              aria-expanded="false"
            >Login
              
            </NavLink>
          
            
          </li>
          </ul>
      
      {/* <!-- Right elements --> */}
    </div>
    {/* <!-- Container wrapper --> */}
  </nav>
{/* <!-- Navbar --> */}
</div>
  )
}

export default Navbar