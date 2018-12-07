import React, { Component } from "react";

import "./Layout.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <main className="main">
        <Toolbar />
        {this.props.children}
      </main>
    );
  }
}

export default Layout;
