import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import Rightside from './Rightside'
import Feed from './Feed'
import CreatePost from './CreatePost'
import { useQuery } from '@tanstack/react-query'

function Dashboard() {

  const response = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await fetch('/api/users/current')
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`)
      }
      // console.log({ json: await response.json() })
      return response.json()
    },
  })
  const user = response.data
  console.log(user)
  const [createPost, setCreatePost] = useState(false)

  const togglePost = (e) => {
    e.preventDefault()
    setCreatePost(!createPost)
    console.log('toggle post')
  };

  return (
    <main className='dashboard-main'>
      {createPost && <CreatePost handlePopup={togglePost} {...{ user }} />}
      <DashboardHeader />
      <div className='main-page-container'>
        <Sidebar {...{ user }} />
        <Feed handlePopup={togglePost} />
        <Rightside />
      </div>
    </main>
  )
}



export default Dashboard
