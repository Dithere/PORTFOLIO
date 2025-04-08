import React from 'react'
import "./home.css"
import { Typewriter } from 'react-simple-typewriter';
import man from "./471189453_2002632346917130_3569065574065900739_n.jpg"
function home() {
  return (
    <div id="home">
        <div className='left'>
          <div className='homedetails'>
            <div className='line1'>I'M</div>
            <div className='line2'>ADITYA NARAYAN MISHRA</div>
            <div className='line3'>
              <Typewriter
              words={['WEB DEVLOPER', 'JAVA DEVLOPER','POET']}
              loop={50}
              cursor
              cursorStyle="!"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              /> 
            {/* text={["WEB DEVLOPER","JAVA DEVLOPER","POET"]}
            speed={500}
            eraseSpeed={500}
            eraseDelay={500}
            cursor='!'
             */}
            </div>
            <a href="mailto:dithere10@gmail.com"><button>HIRE ME</button></a>
          </div>
        </div>
        <div className='right'>
            <img src={man} alt=''/>
        </div>
    </div>
  )
}

export default home
