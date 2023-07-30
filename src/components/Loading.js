import React, { Component } from 'react'
import loadingImg from "./loading.gif"
export class Loading extends Component {
  render() {
    return (
      <div style={{height : "200px"}} className='text-center'>
         <img src={loadingImg} alt="" />
      </div>
    )
  }
}

export default Loading