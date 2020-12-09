import React from "react";
import PropTypes from "prop-types";
import "./Loading.scss";

class Loading extends React.Component {
  render() {
    return <div className="loading">{this.props.message || "Loading..."}</div>;
  }
}
Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Loading;
