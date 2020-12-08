import PropTypes from "prop-types";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Mis vídeos favoritos</h1>
      <input type="button" value="Añadir Video" className="header__button" />
    </header>
  );
};
Header.propTypes = {};
export default Header;
