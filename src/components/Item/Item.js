import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Item.scss";

const Item = ({ data }) => {
  return (
    <article className="main__item">
      <img
        className="main__item--image"
        src={data.thumbnail}
        alt={data.title}
      />
      <p className="main__item--title">{data.title}</p>
    </article>
  );
};
Item.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Item;
