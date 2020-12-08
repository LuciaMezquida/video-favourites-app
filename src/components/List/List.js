import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    //Emulación de llamada a API externa
    setTimeout(() => {
      this.setState({
        isLoading: false,
        videos: [{ id: 1 }, { id: 2 }, { id: 3 }],
      });
    }, 2000);
  }
  render() {
    const { isLoading, videos } = this.state;
    if (isLoading) {
      return <Loading message="Loading..." />;
    }
    return (
      <>
        <div className="container">
          <div className="grid-container">
            {videos && //si videos es true, se hace el map
              videos.map((video, i) => {
                return <span>#{video.id}</span>;
              })}
          </div>
        </div>
      </>
    );
  }
}
List.propTypes = {};
export default List;
