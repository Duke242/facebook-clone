import React from 'react'
import './FriendsPageSidebar.css'

function FriendsPageSidebar() {
  return (
    <div className='friends-sidebar-container'>
      <h2 className='friends-heading'>Friends</h2>
      <ul className='friends-sidebar-list'>
        <li className='friends-li'>Home</li>
        <li className='friends-li'>Friend Requests</li>
        <li className='friends-li'>Suggestions</li>
        <li className='friends-li'>All friends</li>
        <li className='friends-li'>Birthdays</li>
        <li className='friends-li'>Custom Lists</li>
      </ul>
    </div>
  )
}

export default FriendsPageSidebar
