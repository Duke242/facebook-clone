import React from 'react'
import './DashboardHeader.css'
import { SocialIcon } from 'react-social-icons';
import { FaSearch, FaHome } from 'react-icons/fa'
 

function DashboardHeader() {
  return (
    <header className='dashboard-header'>
      <div className="leftside-container">
        <SocialIcon url="https://facebook.com" bgColor='#0092ED' />
        <input type="text" placeholder= '&#128269; Search Facebook' className='dashboard-search'/>
      </div>
      <div className="center-container">
        <FaHome size={45} className='dashboard-home-icon' />
      </div>
      <div className="rightside-container">
        Right
      </div>
    </header>
  )
}

export default DashboardHeader
