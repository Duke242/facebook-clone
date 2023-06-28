import React, { useEffect } from 'react'
import './Dashboard.css'
import Markdown from 'react-markdown'
import { useQuery } from '@tanstack/react-query'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import Rightside from './Rightside'
import Feed from './Feed'

function Dashboard() {

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
console.log({ response })

  return (
    <main className='dashboard-main'>
      <DashboardHeader /> 
      <div className='main-page-container'>
        <Sidebar />
        <Feed />
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
