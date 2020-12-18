import React from "react";
import PropTypes from "prop-types";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  console.log("render item, id: " + data.id);
  return (
    <Link className="link" to={`/${data.id}`}>
      <article className="main__item">
        <img
          className="main__item--image"
          src={data.thumbnail}
          alt={data.title}
        />
        <p className="main__item--title">{data.title}</p>
      </article>
    </Link>
  );
};
Item.propTypes = {
  data: PropTypes.object.isRequired,
};
export default React.memo(Item);
