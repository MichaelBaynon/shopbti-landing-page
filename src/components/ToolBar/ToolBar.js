import React from "react";

import "./ToolBar.css";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import BTI from "../../imgs/android-chrome-512x512.png";

import { Link } from "react-router-dom";
import drawerToggleButton from "../SideDrawer/DrawerToggleButton";

const ToolBar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo">
        <Link to="/">
          <img src={BTI} />
        </Link>
      </div>
      <div className="spacer" />
      <div className='nav-items'>
        <Link to="/">Home</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/it-products">IT Products</Link>
        <Link to="/security-products">Security Products</Link>
        <Link to="/wireless-solutions">Wireless Solutions</Link>
      </div>
      <div className="hamburger">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default ToolBar;
