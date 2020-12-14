import "./Header.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ onClickAdd }) => {
  return (
    <header className="header">
      <h1 className="header__title">Mis vídeos favoritos</h1>
      <div className="header__container">
        <input
          onClick={onClickAdd}
          title="Añadir nuevo vídeo"
          type="button"
          value="Añadir Video"
          className="header__button"
        />
        <Link className="link" to="/about" title="Sobre esta web">
          <p className="header__about">About</p>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};

export default Header;
