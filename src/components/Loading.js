import React from 'react'
import loadingImg from "./loading.gif"
const Loading = () => {
  return (
    <div style={{ height: "200px" }} className='text-center'>
      <img src={loadingImg} alt="" height="50" />
    </div>
  )
}

export default Loading