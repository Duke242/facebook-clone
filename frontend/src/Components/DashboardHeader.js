import React, { useState } from 'react'
import './DashboardHeader.css'
import { SocialIcon } from 'react-social-icons';
import {
  FaSearch, FaHome, FaUserFriends, FaUsers, FaCommentDots, FaBell,
  FaBars, FaUserAlt
} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";



function DashboardHeader() {

  const navigate = useNavigate()

  const location = useLocation()
  console.log({ location })
  const dashboard = location.pathname === '/dashboard'
  const friends = location.pathname === '/friends'
  const groups = location.pathname === '/groups'

  return (
    <header className='dashboard-header'>
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
              onClick={() => { navigate('/dashboard') }}

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
              onClick={() => { navigate('/friends') }}
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
        <button id='rightFindFriends' className={`${friends ? 'active' : ''} rightside-findfriends`}>Find Friends</button>
        <button id='rightButtons' className='rightside-menu'><FaBars size={18} /></button>
        <button id='rightButtons' className='rightside-messages'><FaCommentDots size={18} /></button>
        <button id='rightButtons' className='rightside-notifactions'><FaBell size={18} /></button>
        <button id='rightButtons' className='rightside-user'><FaUserAlt size={18} /></button>
      </div>
    </header>
  )
}
export default DashboardHeader
