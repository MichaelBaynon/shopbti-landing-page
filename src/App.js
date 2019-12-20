import React, { Component } from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";

import Earth from "./imgs/Rotation of The Planet Earth.mp4";

import HomeScreen from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import ITproduct from "./screens/ITproducts";
import SecurityProducts from "./screens/SecurityProducts";
import WirelessSolutions from "./screens/WirelessSolutions";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div style={{ height: "100%" }}>
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <NavBar className="nav-bar" />

          <Route exact path="/" component={HomeScreen} />
          <Route path="/policies" component={AboutUs} />
          <Route path="/it-products" component={ITproduct} />
          <Route path="/security-products" component={SecurityProducts} />
          <Route path="/wireless-solutions" component={WirelessSolutions} />
        </div>
      </Router>
    );
  }
}

export default App;
