import React from 'react'
import './CreatePost.css'
import { FaTimes, FaUserAlt } from 'react-icons/fa'

function CreatePost({handlePopup}) {
  return (
    <div className='create-post-overlay'>
      <div className='create-post-container'>
        <div className='create-post-top'>
          <h2> Create post</h2>
          <button><FaTimes size={25} color='gray' onClick={handlePopup}/></button>
        </div>
        <div className='create-post-profile'>
          <FaUserAlt size={35} color='#0092ED' />
          <div>
            <h5>author name</h5>
          </div>
        </div>
        <div className='create-post-text'>
          <form action='/api/post' id='post-form' method='POST'>
           <textarea type='text' placeholder="What's on your mind, User?" name='text'/>
          </form>
        </div>
        <button className='create-post-button' form='post-form'>
          Post
        </button>
      </div>
    </div> 
  )
}

export default CreatePost
