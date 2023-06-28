import React from 'react'
import './Feed.css'
import { FaPlus, FaUserAlt, FaVideo, FaPhotoVideo, FaSmile } from 'react-icons/fa'


function Feed() {
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
          <FaUserAlt size={40}/> 
          <span className='post-text-container'>
            What's on your mind, User?
          </span>
        </div>
        <div className='post-container-bottom'>
          <button><FaVideo size={30}/>Live Video</button>
          <button><FaPhotoVideo size={30}/> Photo/video</button>
          <button><FaSmile size={30}/> Feeling/activity</button>
        </div>
      </div>
    </div>
  )
}

export default Feed
