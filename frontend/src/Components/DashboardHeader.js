import React, { useState } from 'react'
import './DashboardHeader.css'
import { SocialIcon } from 'react-social-icons';
import {
  FaSearch, FaHome, FaUserFriends, FaUsers, FaCommentDots, FaBell,
  FaBars, FaUserAlt
} from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";


function DashboardHeader() {

  const location = useLocation()
  console.log({ location })
  const dashboard = location.pathname === '/dashboard'
  const friends = location.pathname === '/friends'
  const groups = location.pathname === '/groups'

  return (
    <header className='dashboard-header'>
      {/* <FaSearch /> */}
      <div className="leftside-container">
        <SocialIcon url="https://facebook.com" bgColor='#0092ED' />
        <input type="text" placeholder='&#xf002; Search Facebook' className='dashboard-search fa-search' />      </div>
      <div className="center-container">
        <Tooltip>
          <TooltipTrigger>
            <FaHome
              size={45}
              color={dashboard ? 'var(--facebook-color)' : 'lightgray'}
              className={`${dashboard ? 'active' : ''} dashboard-icon`}
            />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">Home</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <FaUserFriends
              size={45}
              color={friends ? 'var(--facebook-color)' : 'lightgray'}
              className={`${friends ? 'active' : ''} dashboard-icon`}
            />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">Friends</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <FaUsers
              size={45}
              color={groups ? 'var(--facebook-color)' : 'lightgray'}
              className={`${groups ? 'active' : ''} dashboard-icon`}
            />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">Groups</TooltipContent>
        </Tooltip>


      </div>
      <div className="rightside-container">
        <button className='rightside-findfriends'>Find Friends</button>
        <button className='rightside-menu'><FaBars size={18} /></button>
        <button className='rightside-messages'><FaCommentDots size={18} /></button>
        <button className='rightside-notifactions'><FaBell size={18} /></button>
        <button className='rightside-user'><FaUserAlt size={18} /></button>
      </div>
    </header>
  )
}
export default DashboardHeader
