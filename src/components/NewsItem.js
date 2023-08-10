import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, publishTime, source, author } = props;
    return (
      <>
        <div className="card">
          <div style={{display: "flex",position: "absolute", right: "0"}}>
            <span className="badge rounded-pill bg-danger" style={{ left: "90%" }}>
              {source.name}
            </span>
          </div>
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

export default NewsItem