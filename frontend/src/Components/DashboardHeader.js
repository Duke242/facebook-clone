import React, { useState } from 'react'
import './DashboardHeader.css'
import { SocialIcon } from 'react-social-icons';
import { FaSearch, FaHome, FaUserFriends, FaUsers, FaCommentDots, FaBell,
  FaBars, FaUserAlt
 } from 'react-icons/fa'
 

function DashboardHeader() {

  const [active, setActive] = useState(true)

  return (
    <header className='dashboard-header'>
      <div className="leftside-container">
        <SocialIcon url="https://facebook.com" bgColor='#0092ED' />
        <input type="text" placeholder= '&#128269; Search Facebook' className='dashboard-search'/>
      </div>
      <div className="center-container">
        <FaHome size={45} color='lightgray' active className='dashboard-home-icon' />
        <FaUserFriends size={45} color='lightgray' className='dashboard-friends-icon' />
        <FaUsers size={45} color='lightgray' className='dashboard-groups-icon' />
        {/* className={`sidebarOption ${active && 'sidebarOption--active'}` */}
      </div>
      <div className="rightside-container">
        <button className='rightside-findfriends'>Find Friends</button>
        <button className='rightside-menu'><FaBars size={18}/></button>
        <button className='rightside-messages'><FaCommentDots size={18}/></button>
        <button className='rightside-notifactions'><FaBell size={18}/></button>
        <button className='rightside-user'><FaUserAlt size={18}/></button>
      </div>
    </header>
  )
}
export default DashboardHeader
