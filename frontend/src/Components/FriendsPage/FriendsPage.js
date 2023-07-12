import React from 'react'
import './FriendsPage.css'
import DashboardHeader from '../DashboardHeader'
import FriendsPageSidebar from './FriendsPageSidebar'
import FriendsPageFeed from './FriendsPageFeed'

function FriendsPage() {
  return (
    <div className='friends-page-container'>
      <DashboardHeader />
      <div>
        <FriendsPageSidebar />
        <FriendsPageFeed />
      </div>
    </div>
  )
}

export default FriendsPage
