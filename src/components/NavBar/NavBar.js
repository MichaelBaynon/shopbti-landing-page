import React from "react";
import { Link } from "react-router-dom";

import BTI from "../../imgs/android-chrome-512x512.png";
import "../../App.css";

const NavBar = () => {
  return (
    <div className='nav'>
      <div className="toolbar_logo">
        <Link to="/">
          <img src={BTI} />
        </Link>
      </div>
      <Link to="/">Home</Link>
      <Link to="/policies">Policies</Link>
      <Link to="/it-products">IT Products</Link>
      <Link to="/security-products">Security Products</Link>
      <Link to="/wireless-solutions">Wireless Solutions</Link>
    </div>
  );
};

export default NavBar;
