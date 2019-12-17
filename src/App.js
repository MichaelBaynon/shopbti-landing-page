import React, { Component } from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

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
    this.setState({sideDrawerOpen: false})
  }

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

          <main style={{ marginTop: "64px" }}>
            <p>This is the page content</p>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
