import React, { Component } from "react";
import { Intent, Button } from "@blueprintjs/core";
import "./HTMLCode2PDF.scss";
import { print } from "../../utils/utils";

class Convert2PDF extends Component {
  handleConvert() {
    print();
  }

  render() {
    return (
      <Button
        intent={Intent.SUCCESS}
        onClick={this.handleConvert}
        className="convertButton"
        icon="build"
        large={true}
      >
        Convert to PDF
      </Button>
    );
  }
}

export default Convert2PDF;
