import React from 'react'
import './GroupsSidebar.css'

function GroupsSidebar() {
  return (
    <div className='groups-sidebar'>
      <h2>Groups</h2>
      <input type="text" placeholder='&#xf002; Search groups' />
      <ul>
        <li>Your feed</li>
        <li>Discover</li>
        <li>Your groups</li>
      </ul>
      <button>+ Create new group</button>
      <div>
        <h3>Groups you've joined</h3>
        <button>See all</button>
      </div>
    </div>
  )
}

export default GroupsSidebar
