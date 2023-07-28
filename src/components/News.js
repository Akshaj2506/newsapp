import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top headlines of the week</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="myDesc1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="myDesc1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="myDesc1" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="myDesc1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="myDesc1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="myDesc1" />
          </div>
        </div>
      </div>
    )
  }
}

export default News