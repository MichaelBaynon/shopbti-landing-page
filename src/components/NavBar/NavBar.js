import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/it-products">IT Products</Link>
      <Link to="/security-products">Security Products</Link>
      <Link to="/wireless-solutions">Wireless Solutions</Link>
    </div>
  );
};

export default NavBar;
