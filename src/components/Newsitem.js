import React, { Component } from "react";
import kaushik from "./news.png";
//
export class newsitem extends Component {
  render() {
    let { title, description, imgUrl, url, author, date, name } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "80%", alignContent: "center" }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {name}
          </span>
          <img
            src={!imgUrl ? { kaushik } : imgUrl}
            className="card-img-top"
            style={{ height: "300px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a href={url} className="btn btn-info btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default newsitem;
