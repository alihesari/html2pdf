import React, { Component } from "react";
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
import IframeLoader from "../IframeLoader/IframeLoader";
import Loading from "../Loading/Loading";
import "./HTMLCode2PDF.scss";
import print from "../../utils/utils";

const initialState = {
  htmlcode: "",
  isLoading: false
};

class HTMLCode2PDF extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleLoadHTML = this.handleLoadHTML.bind(this);
  }

  async handleLoadHTML() {
    this.setState({
      isLoading: true
    });
  }

  render() {
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
            style={{ width: "100%" }}
          />
        </FormGroup>
        <Button intent={Intent.PRIMARY} onClick={this.handleLoadHTML} disabled={this.state.isLoading}>
          Load HTML
        </Button>

        <div className="preview">
          <Loading isLoading={this.state.isLoading} />
          <IframeLoader
            width="100%"
            height="500"
            onLoad={() => this.setState({ isLoading: false })}
          />
        </div>
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
