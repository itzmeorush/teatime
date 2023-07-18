import React from 'react'
import Video from '../assets/MBA Chai Wala.mp4'

const Intro = () => {
  return (
    <div className='intro'>
      <video src={Video} autoPlay muted controlsList='nodownload' loop></video>
      <div></div>
    </div>
  )
}

export default Intro
