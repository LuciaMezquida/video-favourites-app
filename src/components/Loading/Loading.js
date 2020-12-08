import React, { Component } from "react";
import PropTypes from "prop-types";

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return <div className="loading">{this.props.message || "Loading..."}</div>;
  }
}
Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Loading;
