import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Top headlines of the week</h1>
        <div className="row">
          {this.state.articles.map((newsElement) => {
            let {url, title, description, urlToImage} = newsElement;
            return (
              <div className="col-md-4 my-2" key={url}>
                <NewsItem title={title ? title.slice(0, 70) : ""} description={description ? description.slice(0, 80) : ""} newsUrl={url} imgUrl={urlToImage}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News