/* eslint-disable no-unused-vars */
import React from 'react'
import './content.css'
import { assets } from "../../assets/assets"

const Content = () => {
  return(
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      
      <div className="mainContainer">
        <div className="greet">
          <p><span>Hellow</span></p>
          <p>How can I help you today</p>
        </div>
        
      <div className="card">
         
        <div className="cards">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <img src={assets.compass_icon} alt="" />
        </div>

        <div className="cards">
          <p>Briefly summarize this concept: urban planning</p>
          <img src={assets.bulb_icon} alt="" />
        </div>

        <div className="cards">
          <p>Brainstrom team bonding activities for our work retreat</p>
          <img src={assets.message_icon} alt="" />
        </div>
        
        <div className="cards">
          <p>Improve the readability of ther following code</p>
          <img src={assets.code_icon} alt="" />
        </div>
        </div>

        <div className="mainBottom">
          <div className="searchBox">
            <input type="text" placeholder='Enter a prompt here' />

           <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
           </div>
          </div>
         <p className='bottomInfo'>
          Gemini may included incorrect info , about the people so double-check its responses
         </p>
        </div>

      </div>
     

    </div>
  )
}

export default Content