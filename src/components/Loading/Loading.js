import React from "react";
import propTypes from "prop-types";
import { SyncLoader } from "react-spinners";
import "./Loading.scss";

const Loading = props => {
  if (props.isLoading) {
    return (
      <div className="loadingContainer">
        <div className="loadingBox">
          <div className="loader">
            <h1>{props.loaderText}</h1>
            <SyncLoader
              color="#26A65B"
              sizeUnit={"px"}
              size={10}
              margin="4px"
              loading={props.isLoading}
            />
          </div>
          <div className="loadingMessages">
            {props.messages.map(item => {
              return <div key={item}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    );
  } 
  return null;
};

Loading.propTypes = {
  isLoading: propTypes.bool.isRequired,
  loaderText: propTypes.string,
  messages: propTypes.array
};

Loading.defaultProps = {
  isLoading: true,
  loaderText: "Loading",
  messages: []
};

export default Loading;
