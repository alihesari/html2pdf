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
import "./HTMLCode2PDF.scss";
import { print, injectHTML } from "../../utils/utils";

const initialState = {
  htmlcode: "",
  isLoading: false,
  isConverting: false,
  iframeLoaded: false
};

class HTMLCode2PDF extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleLoadHTML = this.handleLoadHTML.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }

  changeLoadingStatus() {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  async handleLoadHTML() {
    this.changeLoadingStatus();

    injectHTML(this.state.htmlcode);
  }

  handleConvert() {
    this.setState({
      isConverting: true
    });
    print().then(() => {
      this.setState({
        isConverting: false
      });
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
        <Button
          intent={Intent.PRIMARY}
          onClick={this.handleLoadHTML}
          loading={this.state.isLoading}
          icon="refresh"
        >
          Load HTML
        </Button>
        <Button
          intent={Intent.SUCCESS}
          onClick={this.handleConvert}
          disabled={this.state.isLoading}
          className="convertButton"
          disabled={!this.state.iframeLoaded}
          icon="build"
          loading={this.state.isConverting}
        >
          Convert HTML to PDF
        </Button>

        <div className="preview">
          <IframeLoader
            id="previewIframe"
            width="100%"
            height="500"
            onLoad={() =>
              this.setState({ isLoading: false, iframeLoaded: true })
            }
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
