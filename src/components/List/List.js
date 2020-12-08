import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Loading message="Loading..." />;
  }
}
List.propTypes = {};
export default List;
