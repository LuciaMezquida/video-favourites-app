import "./Add.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { addVideo } from "../../api";

const parseYoutubeUrl = (url) => {
  const match = url.match(/[?&]([^=#]+)=([^&#]*)/);
  return match && match[2];
};

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      showSending: false,
      title: "",
      url: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value,
      });
    };
  }

  validation(app) {
    if (
      app.title.length > 0 &&
      app.url.length > 0 &&
      app.description.length > 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit(ev) {
    ev.preventDefault();
    const { handleCloseAdd } = this.props;
    const token = parseYoutubeUrl(this.state.url || "");
    if (this.validation(this.state) && token) {
      this.setState({ showSending: true });
      addVideo({
        title: this.state.title,
        description: this.state.description,
        url: this.state.url,
        thumbnail: `https://img.youtube.com/vi/${token}/maxresdefault.jpg`,
        embed: `https://www.youtube.com/embed/${token}`,
      }).then(
        handleCloseAdd(true)
      ); /*para cerrar la modal una vez se envie el formulario */
    } else {
      this.setState({
        hasError: true,
      });
    }
  }
  render() {
    const { showSending, title, url, description, hasError } = this.state;
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
          {showSending && <span className="success"> Enviando .... </span>}
          {hasError && (
            <div className="warning">
              {" "}
              Algunos campos están vacíos o contienen datos erróneos.{" "}
            </div>
          )}
          <form className="modal__form">
            <label className="modal__form--label">Título</label>
            <input
              className="modal__form--input"
              type="text"
              value={title}
              onChange={this.handleChange("title")}
              placeholder="Ej: Grid vs Flex"
              minLength="3"
              maxLength="200"
              required
            />
            <label className="modal__form--label">Url</label>
            <input
              className="modal__form--input"
              type="text"
              value={url}
              onChange={this.handleChange("url")}
              placeholder="Ej: https://www.youtube.com/watch?v=5ATR5FKPb_U&feature=youtu.be"
              minLength="3"
              maxLength="200"
              required
            />
            <label className="modal__form--label">Descripción</label>
            <textarea
              className="modal__form--textarea"
              value={description}
              onChange={this.handleChange("description")}
              placeholder="Ej: Descripción del video"
              required
            />
            <input
              className="modal__form--submit"
              type="submit"
              onClick={this.handleSubmit}
              value="Crear"
              disabled={showSending}
            />
            {/*deshabilita el botón una vez se ha enviado el form*/}
          </form>
        </div>
      </section>
    );
  }
}
Add.propTypes = {
  handleCloseAdd: PropTypes.func.isRequired,
};
export default Add;
