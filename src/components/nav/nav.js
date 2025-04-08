import React, { useRef } from 'react'
import './nav.css';
import {Link} from "react-scroll"
function Nav() {
    let Mobile=useRef()
    
  return (
    <>
    
    <nav>
        
        <h1>PORTFOLIO</h1>
        <ul className='desktop'>
            <Link to="home" smooth={true} activeClass='active' spy="true"><li>Home</li></Link>
            <Link to="about"smooth={true} activeClass='active'spy="true"><li>About</li></Link>
            <Link to="project"smooth={true} activeClass='active'spy="true"><li>Projects</li></Link>
            <Link to="contact"smooth={true} activeClass='active'spy="true"><li>Contacts</li></Link>
        </ul>
        <div className='hamburger' onClick={()=>{
            Mobile.current.classList.toggle("activemobile")
            
        }}>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
        </div>
        <ul className='mobile' ref={Mobile}>
            <Link to="home" smooth={true} activeClass='active' spy="true"><li>Home</li></Link>
            <Link to="about"smooth={true} activeClass='active'spy="true"><li>About</li></Link>
            <Link to="project"smooth={true} activeClass='active'spy="true"><li>Projects</li></Link>
            <Link to="contact"smooth={true} activeClass='active'spy="true"><li>Contacts</li></Link>
        </ul>
    </nav>
    </>
  )
}

export default Nav
