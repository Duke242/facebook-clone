import React from 'react'
import './Feed.css'
import { FaPlus, FaUserAlt, FaVideo, FaPhotoVideo, FaSmile, FaCamera,
  FaEllipsisH, FaTimes, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'


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
          <FaUserAlt size={40} color='#0092ED'/> 
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
      <div className='post-container-room'>
        <button><FaCamera size={30}/>Create room</button>
      </div>
      <div className='other-post-container'>
        <div className='other-post-container-author'>
          <FaUserAlt size={35} color='#0092ED' />
          <div class='other-post-name-time'>
            <h5>author name</h5>
            <p>time posted</p>
          </div>
          <div className='other-post-icons'>
          <button><FaEllipsisH size={25} color='gray'/></button>
          <button><FaTimes size={25} color='gray'/></button>
          </div>
        </div>
        <div className='other-post-textarea'>
          <p>Post text</p>
        </div>
        <div className='other-post-media'>
          media
        </div>
        <div className='other-post-likes'>
        <div>0 likes</div>
        <div>
          <span>0 comments</span>
          <span>0 shares</span>
        </div>
        </div>
        <div className='other-posts-buttons'>
          <button><FaThumbsUp/>Like</button>
          <button><FaComment/>Comments</button>
          <button><FaShare/>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Feed
