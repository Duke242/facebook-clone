import React from 'react'
import './Feed.css'
import { FaPlus, FaUserAlt, FaVideo, FaPhotoVideo, FaSmile, FaCamera } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import Post from './Post.js'



function Feed({ handlePopup }) {


  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)sid\s*\=\s*([^;]*).*$)|^.*$/, "\$1");

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
    <div className='feed-container'>
      <div className='create-story'>
        <div className='create-story-container'>
          <button><FaPlus /></button>
          <div className='create-story-header'>
            <h2>Create story</h2>
            <p>Share a photo or write something</p>
          </div>
        </div>
      </div>
      <div className='post-container'>
        <div className='post-container-top'>
          <FaUserAlt size={40} color='#0092ED' />
          <span className='post-text-container' onClick={handlePopup}>
            What's on your mind, User?
          </span>
        </div>
        <div className='post-container-bottom'>
          <button><FaVideo size={30} />Live Video</button>
          <button><FaPhotoVideo size={30} /> Photo/video</button>
          <button><FaSmile size={30} /> Feeling/activity</button>
        </div>
      </div>
      <div className='post-container-room'>
        <button><FaCamera size={30} />Create room</button>
      </div>

      {(() => {
        if (response.isLoading) {
          return <div>Loading</div>
        }
        if (response.isError) {
          return <div>{response.error.message}</div>
        }
        if (response.data.length === 0) {
          return <div>No posts posted.</div>
        }
        return response.data.map((post, idx) => (
          <Post
            id={post._id}
            key={idx}
            text={post.text}
            author={post.author.firstName}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
          />
        ))
      })()}
    </div>
  )
}

export default Feed
