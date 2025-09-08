import React from 'react'
import { Link } from 'react-router-dom';

function navBar() {
  return (
    <div className="navBar">
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Product Page</li></Link>
            <Link to='/cart'><li>Cart Page</li></Link>
            <Link to='/details'><li>ProductDetailPage</li></Link>
        </ul>
    </div>
  )
}
export default navBar;
