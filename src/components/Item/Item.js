import React, { useState } from "react";
import PropTypes from "prop-types";

const Item = ({ data }) => {
  return (
    <div className="grid-item">
      <img className="preview-image" src={data.thumbnail} alt={data.title} />
      <div className="preview-title">{data.title}</div>
    </div>
  );
};
Item.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Item;
