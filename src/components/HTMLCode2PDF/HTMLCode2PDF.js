import React, { Component } from "react";
import { Redirect } from "react-router";
import {
  Intent,
  Icon,
  Button,
  Classes,
  FormGroup,
  InputGroup,
  Switch,
  Alignment,
  TextArea
} from "@blueprintjs/core";
import { handleFormChange } from "../Base/Base";
import "./HTMLCode2PDF.scss";

const initialState = {
  htmlcode: "",
  redirect: false
};

class HTMLCode2PDF extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm() {
    const url = this.state.hasLogin ? this.state.dataPage : this.state.pageUrl;

    this.setState({
      targetUrl: encodeURIComponent(url),
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/extractors/handler`,
            search: `?url=${this.state.targetUrl}`,
            state: this.state
          }}
        />
      );
    }

    return (
      <>
        <FormGroup label="HTML Code" labelFor="htmlcode">
          <TextArea
            id="htmlcode"
            placeholder="Past your HTML code here..."
            value={this.state.htmlcode}
            onChange={this.handleChange}
            name="htmlcode"
            rows={10}
            style={{width: "100%"}}
          />
        </FormGroup>
        <Button intent={Intent.PRIMARY} onClick={this.handleForm}>
          Load HTML
        </Button>
      </>
    );
  }

  handleChange = event => {
    handleFormChange(event.target.name, (fieldName, value) =>
      this.setState({ [fieldName]: value })
    );
  };
}

export default HTMLCode2PDF;
