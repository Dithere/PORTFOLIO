import React from 'react'
import "./about.css"
import Card from '../card/card.js'
import mern from "../../logo.svg"
import ja from "./731_java.jpg"
import dsa from "./channels4_profile.jpg"
function about() {
  return (
    <div id="about">
      <div className='leftab'>
        <div className='circle-line'>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
        </div>
        <div className='details'>
          <div className='personalinfo'>
            <h1>Personcal Info</h1>
            <ul>
              <li><span>Name:</span>Aditya Narayan Mishra</li>
              <li><span>Age:</span>20 Years</li>
              <li><span>Gender:</span>Male</li>
              <li><span>Language:</span>Hindi,English</li>
            </ul>
          </div>
          <div className='education'>
            <h1>Education</h1>
            <ul>
              <li><span>Degree:</span>BTECH</li>
              <li><span>BRANCH:</span>CONMPUTER SCIENCE & ENGINEERING</li>
            </ul>
          </div>
          <div className='skills'>
            <h1>Skills</h1>
            <ul>
              <li>HTML CSS & JS</li>
              <li>DSA IN JAVA</li>
            </ul>
          </div>
        </div>

      </div>
      <div className='rightab'>
        <Card title={"REACT"} image={mern}/>
        <Card title={"DSA" } image={dsa}/>
        <Card title={"JAVA"} image={ja}/>
      </div>
    </div>
  )
}

export default about
