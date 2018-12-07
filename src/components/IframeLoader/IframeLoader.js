import React, { Component } from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";

import "./IframeLoader.scss";

class IframeLoader extends Component {
  constructor(props) {
    super(props);

    this.iframe = React.createRef();
  }

  componentDidMount() {
    let iframe = ReactDOM.findDOMNode(this.iframe);
    if(iframe) {
      iframe.addEventListener('load', this.props.onLoad);
    }
  }

  render() {
    return <iframe {...this.props} ref={node => this.iframe = node}/>;
  }
}

IframeLoader.propTypes = {
  src: PropTypes.string,
  onLoad: PropTypes.func
};

export default IframeLoader;
