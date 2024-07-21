/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './SideBar.css'
import {assets} from '../../assets/assets'

const SideBar = () => {
  
  const [extended,setExtended] = useState(false);

  return (
    <div className="sideBar">
     <div className="top">
      <img className='menu' src={assets.menu_icon} onClick={()=>setExtended(prev=>!prev)} />
      <div className="newChat">
        <img src={assets.plus_icon} alt="" />
        {extended?<p>New Chat</p>:null}
      </div>
      { extended? 
      <div className="recent">
        <div className="recentTitle">Recent</div>
        <div className="recentEntry">
        <img src={assets.message_icon} alt="" />
        <p>What is React ..</p>
        </div>
      </div>
      :null
      }
      
     </div>

     <div className="bottom">
     <div className="bootomItem recentEntry">
      <img src={assets.question_icon} alt="" />
      {extended?<p>Help</p>:null}
     </div>

     <div className="bootomItem recentEntry">
      <img src={assets.history_icon} alt="" />
      {extended?<p>Activity</p>:null}
     </div>

     <div className="bootomItem recentEntry">
      <img src={assets.setting_icon} alt="" />
      {extended?<p>Setting</p>:null}
     </div>

     </div>

    </div>
  )
}

export default SideBar;