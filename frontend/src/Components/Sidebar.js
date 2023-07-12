import React from 'react'
import './Sidebar.css'

function Sidebar({ user }) {

  console.log(user)
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-list'>
        <li>{user?.firstName} {user?.lastName}</li>
        <li>Find friends</li>
        <li>Feeds (Most Recent)</li>
        <li>Welcome</li>
        <li>Groups</li>
        <li>Marketplace</li>
        <li>Watch</li>
        <li>Memories</li>
        <li>Saved</li>
        <li>Pages</li>
        <li>News</li>
        <li>See more</li>
      </ul>
    </div>
  )
}

export default Sidebar
