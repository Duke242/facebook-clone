import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Markdown from 'react-markdown'
import { useQuery } from '@tanstack/react-query'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import Rightside from './Rightside'
import Feed from './Feed'
import CreatePost from './CreatePost'

function Dashboard() {

  const [createPost, setCreatePost] = useState(false)

  const togglePost = (e) => {
    e.preventDefault()
    setCreatePost(!createPost)
    console.log('toggle post')

  };



  const response = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('/api/posts')
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`)
      }
      return response.json()
    },
  })

  return (
    <main className='dashboard-main'>
      {createPost && <CreatePost handlePopup={togglePost}/>} 
      <DashboardHeader />  
      <div className='main-page-container'>
        <Sidebar />
        <Feed handlePopup={togglePost}/>
        <Rightside />
      </div>
      
      {/* {response.isLoading ? (
        <div>Loading</div>
      ) : (
        response.isError ? (
          <div>{response.error.message}</div>
        ) : (
          <ul>
            {response.data.posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <Markdown>{post.text}</Markdown>
              </li>
            ))}
          </ul>
        )
      )} */}
    </main>
  )
}



export default Dashboard
