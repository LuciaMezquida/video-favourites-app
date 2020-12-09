import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Loading.scss";

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="loading">{this.props.message || "Loading..."}</div>;
  }
}
Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Loading;
