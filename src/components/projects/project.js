import React from 'react'
import "./project.css"
import Card from '../card/card'
import dit from "./Screenshot 2025-04-08 183732.png"
import cric from "./Screenshot 2025-04-08 184353.png"
function project() {
  return (
    <div id="project">
      <h1>HERE ARE SOME PROJECTS</h1>
      <div className='slider'>
      <Card title={"HAND CRICKET"} image={cric}/>
      <Card title={"DITCOM"} image={dit}/>
        <Card title={"COMING SOON..!"}/>
        
        <Card title={"COMING SOON..!"}/>
        <Card title={"COMING SOON..!"}/>
        
        <Card title={"COMING SOON..!"}/>
        <Card title={"COMING SOON..!"}/>
        
        <Card title={"COMING SOON..!"}/>
        
        
      </div>
    </div>
  )
}

export default project
