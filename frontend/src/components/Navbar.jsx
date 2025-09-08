import React from 'react'
import {button } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function navBar() {
  const navigate = useNavigate();
  const loginPressed = () => {
    navigate("/login")
  }
  const registerPressed = () => {
    navigate("/register")
  }

  return (
    <div className="navBar">
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Product Page</li></Link>
            <Link to='/cart'><li>Cart Page</li></Link>
            <Link to='/details'><li>ProductDetailPage</li></Link>
            <button className="loginButton" onClick={loginPressed}>Login</button>
            <button className="RegisterButton" onClick={registerPressed}>Register</button>
        </ul>
    </div>
  )
}
export default navBar;
