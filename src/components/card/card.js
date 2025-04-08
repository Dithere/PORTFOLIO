import React from 'react'
import "./card.css"
import mern from "../../logo.svg"
function card({title,image}) {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div className='hovercard'>
        <img src={image} className='image'></img>
      </div>
    </div>
  )
}

export default card
