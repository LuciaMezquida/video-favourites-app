import React from "react";
import PropTypes from "prop-types";
import "./Video.scss";

const Video = ({ title, embed }) => (
  <div className="video-container">
    <iframe
      title={title}
      className="player"
      type="text/html"
      width="100%"
      height="500px"
      src={embed}
      frameBorder="0"
    />
  </div>
);

Video.propTypes = {
  name: PropTypes.string.isRequired,
  embed: PropTypes.string.isRequired,
};

export default Video;
