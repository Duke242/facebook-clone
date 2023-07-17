import React from 'react'
import './FriendsPageFeed.css'
import { useQuery } from '@tanstack/react-query'

function FriendsPageFeed() {

  const response = useQuery({
    queryKey: ['friendRequests'],
    queryFn: async () => {
      const response = await fetch('/api/users/friendRequests')
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`)
      }
      // console.log(response.json())
      return response.json()
    },
  })

  console.log({ r: response.data })

  return (
    <div className='friends-page-feed'>
      {(() => {
        if (response.isLoading) {
          return <div>Loading</div>
        }
        if (response.isError) {
          return <div>{response.error.message}</div>
        }
        if (response.data.length === 0) {
          return <p>When you have friend requests or suggestions, you'll see them here.</p>
        }
        // return response.data.id.map((request, idx) => (
        //   <div key={idx}>
        //     {request}
        //   </div>
        // ))
        return <div>{response.data.id}</div>
      })()}
    </div>
  )
}

export default FriendsPageFeed
