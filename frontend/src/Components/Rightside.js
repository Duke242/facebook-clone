import React from 'react'
import './Rightside.css'
import { FaPlus } from 'react-icons/fa'

function Rightside() {
  return (
    <div className='dashboard-rightside-container'>
      <h2 className="group-conversations">Group conversations</h2>
      <div className="create-new-group">
        <button className="create-new-group-button"><FaPlus /></button>
        <p className="create-new-group-p">Create new group</p>
      </div>
    </div>
  )
}

export default Rightside
