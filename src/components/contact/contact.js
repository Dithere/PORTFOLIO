import React from 'react'
import "./contact.css"
function contact() {
  return (
    <div id="contact">
      <div className='leftc'>
        <a href="https://www.instagram.com/dity.10/" target="_main"><button className='insta'>INSTAGRAM</button></a>
        <a href="http://www.linkedin.com/in/aditya-narayan-mishra-b66011309" target="_main"><button className='linkedin'>LINKEDIN</button></a>
        <a href='https://github.com/Dithere' target="_main"><button className='wa'>GITHUB</button></a>
        
      </div>
      <div className='rightc'>
        <form action="https://formspree.io/f/meoapwvo" method='POST'>
          <input name='username' type='text' placeholder='   Name'/>
          <input name='Email' type="email" placeholder='  Email'/>
          <textarea name='message' id="textarea" placeholder='  
          Write here'></textarea>
          <input type='submit' id='btn'/>
        </form>
      </div>
    </div>
  )
}

export default contact
