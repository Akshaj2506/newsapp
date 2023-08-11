import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const useNavButtons = false;
  const capitalizeFirstLetter = (phrase) => {
    return phrase.slice(0,1).toUpperCase() + phrase.slice(1, phrase.length); 
  }
  document.title = `NewsMonkey - ${capitalizeFirstLetter(props.topic)}`
  const handleNewsAPI = async (isNext = null) => {
    let url;
    if (isNext === null) {
      url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.topic}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=1`;
    }
    else {
      url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.topic}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${(isNext === true) ? page + 1 : page - 1}`;
    }
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    if (isNext === null) {
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false)
    } else {
      setArticles(parsedData.articles);
      setPage((isNext === true) ? page + 1 : page - 1);
      setLoading(false);
    }
  }
  const fetchNextData = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.topic}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(90);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page + 1)
    props.setProgress(100)
  }
  useEffect(() => {
    fetchNextData();
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <h1 className='text-center' style={{marginTop : "80px"}}>Top Headlines - {capitalizeFirstLetter(props.topic)}</h1>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchNextData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {loading && <Loading />}
            {articles.map((newsElement) => {
              let { url, title, description, urlToImage, publishedAt, source, author } = newsElement;
              return (
                <div className="col-md-4 my-3" key={url}>
                  <NewsItem
                    title={title ? title.slice(0, 70) : ""}
                    description={description ? description.slice(0, 80) : ""}
                    newsUrl={url}
                    imgUrl={urlToImage ? urlToImage : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
                    publishTime={new Date(publishedAt).toUTCString()}
                    source={source}
                    author={author}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button className='btn btn-light' disabled={(useNavButtons) ? this.state.page <= 1 : true} onClick={() => { handleNewsAPI(false) }}>&larr; Previous</button>
          <button className='btn btn-light' disabled={(useNavButtons) ? ((this.state.totalResults - (this.state.page * this.props.pageSize)) > 0 ? false : true) : true} onClick={() => { handleNewsAPI(true) }}>Next &rarr;</button>
        </div>
      </InfiniteScroll >
    </>
  )
}

News.defaultProps = {
  country: "in",
  topic: "general",
  pageSize: 6
}
News.propTypes = {
  country: PropTypes.string,
  topic: PropTypes.string,
  pageSize: PropTypes.number
}

export default News