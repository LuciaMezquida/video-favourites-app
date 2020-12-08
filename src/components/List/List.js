import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  render() {
    return <Loading message="Loading..." />;
  }
}
List.propTypes = {};
export default List;
