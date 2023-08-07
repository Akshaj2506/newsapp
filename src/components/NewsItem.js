import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishTime, source, author } = this.props;
    return (
      <>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "90%"}}>
          {source.name}
        </span>
          <img src={imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}{(title.length === 70 ? "..." : "")}</h5>
            <p className="card-text">{description}{(description.length >= 80 ? "..." : "")}</p>
            <p className="card-text"><small className="text-body-secondary">Uploaded by {author} at {publishTime}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary">Read More...</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem