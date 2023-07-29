import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../screens/Cart';
import Model from '../Model';

export default function Navbar() {
  const [cartview, setcartview] = useState(false); // State to control the visibility of the cart view
  const navigate = useNavigate(); // Hook from 'react-router-dom' to navigate between routes

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("authtoken"); // Remove the authentication token from local storage
    navigate('/login'); // Navigate to the login page
  };

  // Function to handle click on the "My Cart" button
  const handleCartClick = () => {
    setcartview(true); // Show the cart view
  };

  // Function to handle closing the cart view
  const handleCloseCart = () => {
    setcartview(false); // Hide the cart view
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient-primary">
        <div className="container-fluid">
          {/* Brand logo */}
          <Link className="text-white bg-dark btn btn-outline-info navbar-brand fs-1 fst-italic font-weight-bold" id='foodie' to="/">
            <span className='fancy' style={{letterSpacing:'7px'}}>Foodies  {"..."}</span>
          </Link>

          {/* Navbar toggler for mobile view */}
          <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4">
        <span class="navbar-toggler-icon"></span>
    </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse m-1" id="collapsingNavbar4">
            <ul className="navbar-nav me-auto">
              {/* Uncomment and add links here if needed */}
              {/* <li className="nav-item  ">
                <Link className="text-muted nav-link active fs-4 fst-italic font-weight-bold" aria-current="page" to="/">Home</Link>
              </li> */}
              {/* {
                (localStorage.getItem('authtoken')) ?
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
                    </li>
                  </div>
                  : ""
              } */}
            </ul>

            {/* Conditional rendering based on user authentication */}
            {(!localStorage.getItem('authtoken')) ?
              // If the user is not logged in
              <div className='d-flex '>
                <Link className="btn bg-info text-white mx-3" to="/login">Login</Link>
                <Link className="btn bg-info text-white mx-3" to="signup">SignUp</Link>
              </div>
              :
              // If the user is logged in
              <div>
                {/* Button to view and manage the cart */}
                <div className="btn bg-info text-white mx-3" onClick={handleCartClick}>My Cart</div>
                {cartview ? <Model onClose={handleCloseCart}><Cart /></Model> : null} {/* Show the cart view as a modal when cartview is true */}
                {/* Button to logout */}
                <div className="btn bg-info text-white mx-3" onClick={logout}>LogOut</div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
