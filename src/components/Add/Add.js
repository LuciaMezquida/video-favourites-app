import "./Add.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { addVideo } from "../../api";

class Add extends Component {
  render() {
    const { handleCloseAdd } = this.props;
    return (
      <section className="modal">
        <div className="modal__container">
          <span
            className="modal__container--close"
            onClick={handleCloseAdd(false)}
          >
            {/*pasamos false para evitar que la página se refresque*/}
            &times;
          </span>
          <h2 className="modal__container--title"> Crear nuevo Vídeo </h2>
          AQUÍ VA NUESTRO FORMULARIO
        </div>
      </section>
    );
  }
}
Add.propTypes = {
  handleCloseAdd: PropTypes.func.isRequired,
};
export default Add;
