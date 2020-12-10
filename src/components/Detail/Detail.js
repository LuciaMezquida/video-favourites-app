import React, { Component } from "react";
import { withRouter } from "react-router";
import { getVideoDetail } from "../../api";
import Loading from "../Loading/Loading";
import Video from "../Video/Video";
import { Link } from "react-router-dom";
import "./Detail.scss";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    this.setState({ isLoading: true });
    getVideoDetail({ idVideo: this.props.match.params.id })
      .then((data) => this.setState({ video: data, isLoading: false }))
      .catch((err) => this.setState({ error: err, isLoading: false }));
  }
  render() {
    const { isLoading, error, video } = this.state;
    if (error) return <p className="error">{error.message}</p>;
    if (isLoading || !video)
      return (
        <Loading
          message={`Cargando video (#${this.props.match.params.id}) .... `}
        />
      );

    return (
      <>
        <div className="detail">
          <Video title={video.title} embed={video.embed} />
          <div className="detail__summary">
            <h2 className="detail__title">{video.title}</h2>
            <p className="detail__description">{video.description}</p>
            <Link className="link" to="/" title="Página de inicio">
              <button className="detail__button">Volver</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Detail);
