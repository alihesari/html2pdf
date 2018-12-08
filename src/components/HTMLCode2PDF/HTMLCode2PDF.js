import React, { Component } from "react";
import { FormGroup, TextArea } from "@blueprintjs/core";
import { handleFormChange } from "../Base/Base";
import "./HTMLCode2PDF.scss";
import { injectHTML } from "../../utils/utils";

class HTMLCode2PDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlcode: ""
    };
  }

  render() {
    return (
      <FormGroup label="HTML Code" labelFor="htmlcode">
        <TextArea
          id="htmlcode"
          placeholder="Past your HTML code here..."
          value={this.state.htmlcode}
          onChange={this.handleChange}
          name="htmlcode"
          rows={10}
          style={{ width: "100%" }}
        />
      </FormGroup>
    );
  }

  handleChange = async event => {
    await handleFormChange(event.target.name, (fieldName, value) =>
      this.setState({ [fieldName]: value })
    );
    
    injectHTML(this.state.htmlcode);
  };
}

export default HTMLCode2PDF;
