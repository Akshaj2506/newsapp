import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0,
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d&pageSize=6&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }
  handlePrevClick = async () => {
    console.log("Previous clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d&pageSize=6&page=${this.state.page - 1}`;
    let data = await fetch(url);
    console.log(url)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }
  handleNextClick = async () => {
    console.log("Next clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d&pageSize=6&page=${this.state.page + 1}`;
    let data = await fetch(url);
    console.log(url)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Top headlines of the week</h1>
        <div className="row">
          {this.state.articles.map((newsElement) => {
            let {url, title, description, urlToImage} = newsElement;
            return (
              <div className="col-md-4 my-3" key={url}>
                <NewsItem title={title ? title.slice(0, 70) : ""} description={description ? description.slice(0, 80) : ""} newsUrl={url} imgUrl={urlToImage ? urlToImage : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}/>
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className='btn btn-light' disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className='btn btn-light' disabled={(this.state.totalResults - (this.state.page * 6)) > 0 ? false : true} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News