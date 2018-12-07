import React, { Component } from "react";
import { Button } from "@blueprintjs/core";

import "./Home.scss";
import HTMLCode2PDF from "../../components/HTMLCode2PDF/HTMLCode2PDF";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="pageHeader">
          <h1>HTML to PDF</h1>
          <h2>Convert web pages or HTML files to PDF documents</h2>
        </div>
        <div className="htmlcode2pdf">
            <HTMLCode2PDF />
        </div>
      </div>
    );
  }
}

export default Home;
