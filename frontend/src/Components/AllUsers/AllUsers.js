import React from 'react'
import './AllUsers.css'
import DashboardHeader from '../DashboardHeader'
import { useQuery } from '@tanstack/react-query'
import { FaUserAlt } from 'react-icons/fa'

function AllUsers() {

  const userResponse = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await fetch('/api/users/current')
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`)
      }
      return response.json()
    },
  })

  const currentUser = userResponse.data

  const response = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await fetch('/api/users')
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`)
      }
      return response.json()
    },
  })

  // console.log(response)
  const users = response.data
  return (
    <div className='all-users-container'>
      <DashboardHeader />
      <h1>Users</h1>
      {users?.map((user) =>
        <ul>
          <li className='all-users-name'><FaUserAlt size={30} /> {user.firstName} {user.lastName}</li>
          <li>
            <form method='post' action={`/api/users/${currentUser._id}/requests`}>
              <input type='hidden' name='friendId' value={user._id} />
              <button>Add friend</button>
            </form>
          </li>
        </ul>
      )}

    </div>
  )
}

export default AllUsers
