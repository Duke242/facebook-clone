import React from 'react'
import './Post.css'
import {
  FaPlus, FaUserAlt, FaVideo, FaPhotoVideo, FaSmile, FaCamera,
  FaEllipsisH, FaTimes, FaThumbsUp, FaComment, FaShare, FaUser
} from 'react-icons/fa'


function Post({
  author,
  text,
  timestamp,
  likes,
}) {
  return (
    <div>
      <div className='other-post-container'>
        <div className='other-post-container-author'>
          <FaUserAlt size={35} color='#0092ED' />
          <div className='other-post-name-time'>
            <h5>{author}</h5>
            <p>{timestamp}</p>
          </div>
          <div className='other-post-icons'>
            <button><FaEllipsisH size={25} color='gray' /></button>
            <button><FaTimes size={25} color='gray' /></button>
          </div>
        </div>
        <div className='other-post-textarea'>
          <p>{text}</p>
        </div>
        <div className='other-post-media'>
          media
        </div>
        <div className='other-post-likes'>
          <div>{likes}</div>
          <div>
            <span>0 comments</span>
            <span>0 shares</span>
          </div>
        </div>
        <div className='other-posts-buttons'>
          <button><FaThumbsUp />Like</button>
          <button><FaComment />Comments</button>
          <button><FaShare />Share</button>
        </div>
        <div className='other-post-comment-box'>
          <FaUserAlt size={25} />
          <form method='post' action='/api/posts/comments'>
            <input type='text' placeholder='Submit your first comment...' />
            <button>&#xf061;</button>
          </form>
        </div>
        <div className='other-post-comments'>
          <FaUserAlt size={25} />
          <div>
            <div className='other-post-comments-header'>
              <span>
                <span className='other-post-comments-author'>Other User</span>
                This is another user comment
              </span>
            </div>
            <div className='other-post-like-share'>
              <button>Like</button>
              <button>Reply</button>
              <button>Share</button>
              <span>53m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
