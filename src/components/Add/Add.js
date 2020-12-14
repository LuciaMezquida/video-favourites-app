import "./Add.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
class Add extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClose } = this.props;
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose(false)}>
            &times;
          </span>
          <h2> Crear nuevo Vídeo </h2>
          AQUÍ VA NUESTRO EL FORMULARIO
        </div>
      </div>
    );
  }
}
Add.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Add;
