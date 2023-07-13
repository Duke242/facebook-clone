import React from 'react'
import './GroupsPage.css'
import DashboardHeader from '../DashboardHeader'
import GroupsSidebar from './GroupsSidebar'
import GroupsPageFeed from './GroupsPageFeed'

function GroupsPage() {
  return (
    <div className='groups-main'>
      <DashboardHeader />
      <div>
        <GroupsSidebar />
        <GroupsPageFeed />
      </div>
    </div>
  )
}

export default GroupsPage
