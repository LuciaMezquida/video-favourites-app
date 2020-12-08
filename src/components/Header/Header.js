import React, { useState } from "react";
import PropTypes from "prop-types";
const Header = () => {
  return (
    <div className="header-content">
      <div className="header-title-text">Mis vídeos favoritos</div>
      <input type="button" value="Añadir Video" className="header-button-add" />
    </div>
  );
};
Header.propTypes = {};
export default Header;
