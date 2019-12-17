import React from "react";

import "./ToolBar.css";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import { Link } from "react-router-dom";
import drawerToggleButton from "../SideDrawer/DrawerToggleButton";

const ToolBar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo">
        <Link to="/">Shop Bti</Link>
      </div>
      <div className="spacer" />
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default ToolBar;
