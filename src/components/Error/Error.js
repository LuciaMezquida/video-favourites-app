import "./Error.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Error = ({ error, about }) => {
  return (
    <div className="error-container">
      <p className={`error ${about == "about" ? "hidden" : ""}`}>{error}</p>
      <Link className="link" to="/">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};
Error.propTypes = {};
export default Error;
