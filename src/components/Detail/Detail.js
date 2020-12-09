import "./Detail.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <>HOLA {this.props.match.params.id}</>;
  }
}
Detail.propTypes = {};
export default Detail;
