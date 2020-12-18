import React, { Component } from "react";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import Item from "../Item/Item";
import Add from "../Add/Add";
import Footer from "../Footer/Footer";
import "./List.scss";
import { getVideos } from "../../api";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
      error: null,
      showAdd: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
  }
  //Events

  handleAdd(ev) {
    this.setState({ showAdd: true });
  }
  handleCloseAdd(reload) {
    return () => {
      if (reload) {
        this.setState({ isLoading: true, showAdd: false });
        getVideos()
          .then((data) =>
            this.setState({ videos: data, isLoading: false, showAdd: false })
          )
          .catch((error) =>
            this.setState({ error, isLoading: false, showAdd: false })
          );
      } else {
        this.setState({ showAdd: false });
      }
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    // Promises example
    // getVideos()
    //   .then(data => this.setState({ videos: data, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));

    try {
      const videos = await getVideos();
      this.setState({ videos: videos, isLoading: false });
    } catch (error) {
      this.setState({ error: error, isLoading: false });
    }
  }
  render() {
    const { isLoading, videos, error, showAdd } = this.state;
    if (isLoading) {
      return <Loading message="Loading..." />;
    }
    if (error) {
      return <p className="error">{error.message}</p>;
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
        {showAdd && (
          <Add
            handleCloseAdd={
              this.handleCloseAdd //Si showAdd es true, se pasa por props el evento a Add
            }
          />
        )}
        <Footer />
      </>
    );
  }
}
export default List;
