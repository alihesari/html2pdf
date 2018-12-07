import React, { Component } from "react";

import "./Layout.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <main className="main">
        <Toolbar />
        <div className="container">{this.props.children}</div>
      </main>
    );
  }
}

export default Layout;
