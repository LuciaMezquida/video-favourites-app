import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    //Emulación de llamada a API externa
    setTimeout(() => {
      this.setState({
        isLoading: false,
        videos: [
          {
            id: 0,
            title:
              "¿Qué es CodelyTV? 🍄🔝 - Formación para programadores y divulgación del mundo del desarrollo",
            url: "https://www.youtube.com/watch?v=rpMQd2DazTc",
            thumbnail:
              "https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg",
          },
          {
            id: 1,
            title:
              "Introducción a PHP: Cómo configurar tu entorno de desarrollo 🐘",
            url: "https://www.youtube.com/embed/watch?v=v2IjMrpZog4",
            thumbnail:
              "https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg",
          },
        ],
      });
    }, 2000);
  }
  render() {
    const { isLoading, videos } = this.state;
    if (isLoading) {
      return <Loading message="Loading..." />;
    }
    return (
      <>
        <Header onClickAdd={this.handleAdd} />
        <main className="main">
          <div className="main__container">
            {videos && //si videos es true, se hace el map
              videos.map((video, i) => {
                return <Item key={i} data={video} />;
              })}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
List.propTypes = {};
export default List;
