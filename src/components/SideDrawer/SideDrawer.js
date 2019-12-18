import React from "react";

import { Link } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = props => {

let drawerClasses = 'side-drawer'
if(props.show) {
    drawerClasses = 'side-drawer open'
}

  return (
    <nav className={drawerClasses}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/it-products">IT Products</Link>
        <Link to="/security-products">Security Products</Link>
        <Link to="/wireless-solutions">Wireless Solutions</Link>
      </div>
    </nav>
  );
};

export default sideDrawer;
