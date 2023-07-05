import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import Rightside from './Rightside'
import Feed from './Feed'
import CreatePost from './CreatePost'
import { useQuery } from '@tanstack/react-query'
import Markdown from 'react-markdown'

function Dashboard() {
  
  const [createPost, setCreatePost] = useState(false)

  const togglePost = (e) => {
    e.preventDefault()
    setCreatePost(!createPost)
    console.log('toggle post')
  };
 
  return (
    <main className='dashboard-main'>
      {createPost && <CreatePost handlePopup={togglePost}/>} 
      <DashboardHeader />  
      <div className='main-page-container'>
        <Sidebar />
        <Feed handlePopup={togglePost}/>
        <Rightside />
      </div>
    </main>
  )
}



export default Dashboard
