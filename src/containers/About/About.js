import React, { Component } from "react";
import { Text } from "@blueprintjs/core";

import "./About.scss";

class About extends Component {
  render() {
    return (
      <>
        <h1>About</h1>
        <Text>HTML2PDF converter is an open source React JS project. HTML2PDF helps you convert HTML codes and HTML files to PDF.</Text>

        <h2>Features</h2>
        <ul className="features">
          <li>Convert HTML code to PDF</li>
          <li>Convert HTML file to PDF</li>
          <li>Save PDF file</li>
        </ul>
        
        <h2>License</h2>
        <Text>This software is released under the MIT License.</Text>
      </>
    );
  }
}

export default About;
