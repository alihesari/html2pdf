import React, { Component } from "react";

import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <main className="main">{this.props.children}</main>
    );
  }
}

export default Layout;
