import React, { Component } from "react";
import { Tag } from "@blueprintjs/core";
import "./Layout.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <main className="main">
        <Toolbar />
        <div className="container">
        <div className="page">
        <div className="pageHeader">
          <h1>HTML to PDF</h1>
          <h2>Convert HTML codes or HTML files to PDF documents</h2>
          <Tag>Version 0.1.0</Tag>
        </div>
        {this.props.children}</div></div>
      </main>
    );
  }
}

export default Layout;
