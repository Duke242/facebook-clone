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

  const deleteRequest = () => {

  }

  // console.log(response.json())
  // console.log({ r: response })
  // console.log({ o: Object.keys(response.data) })
  console.log({ 8: response.data })
  // console.log({ r: response.data[0] })

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
        return response.data.map((request, idx, _id) => (
          <div className='friend-req-div' key={idx}>
            {console.log({ i: request._id })}
            From: {request.from.firstName} {request.from.lastName}<br />
            To: {request.to.firstName} {request.to.lastName}
            <form method='POST' action={`/api/friendRequests/add/${request._id}`}>
              <input type='hidden' name='' />
              <button>Accept</button>
            </form>
            <form method='POST' action={`/api/friendRequests/delete/${request._id}`}>
              <input type="hidden" name="_method" value="DELETE" />
              <button>Decline</button>
            </form>
          </div>
        ))
        // return <div>{response.data.id}</div>
      })()}
    </div >
  )
}
// <form method='post' action={`/api/posts/${id}/comments`}>
// <input type='text' placeholder='Submit your first comment...' name='text' />
// <button>&#xf061;</button>
// </form>
export default FriendsPageFeed
