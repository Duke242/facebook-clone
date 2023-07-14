import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router'


function Sidebar({ user }) {

  const navigate = useNavigate()

  console.log(user)
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-list'>
        <li className='sidebar-li'>{user?.firstName} {user?.lastName}</li>
        <li className='sidebar-li' onClick={() => { navigate('/allUsers') }}>Find friends</li>
        <li className='sidebar-li'>Feeds (Most Recent)</li>
        <li className='sidebar-li'>Welcome</li>
        <li className='sidebar-li'>Groups</li>
        <li className='sidebar-li'>Marketplace</li>
        <li className='sidebar-li'>Watch</li>
        <li className='sidebar-li'>Memories</li>
        <li className='sidebar-li'>Saved</li>
        <li className='sidebar-li'>Pages</li>
        <li className='sidebar-li'>News</li>
        <li className='sidebar-li'>See more</li>
      </ul>
    </div>
  )
}

export default Sidebar
