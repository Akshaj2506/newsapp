import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'

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
  static defaultProps = {
    country : "in",
    topic : "general",
    pageSize : 6
  }
  static propTypes = {
    country : PropTypes.string,
    topic : PropTypes.string,
    pageSize : PropTypes.number
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.topic}&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d&pageSize=${this.props.pageSize}&page=1`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  handlePrevClick = async () => {
    console.log("Previous clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.topic}&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    this.setState({
      loading : true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  handleNextClick = async () => {
    console.log("Next clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.topic}&apiKey=b2c1db18082d4e2e92471dfd2d5fca3d&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Top headlines of the week</h1>
        <div className="row">
          {this.state.loading && <Loading/>}
          {!this.state.loading && this.state.articles.map((newsElement) => {
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
          <button className='btn btn-light' disabled={(this.state.totalResults - (this.state.page * this.props.pageSize)) > 0 ? false : true} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News