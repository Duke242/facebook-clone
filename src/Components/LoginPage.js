import React from 'react'
import './LoginPage.css'
import LoginDiv from './LoginDiv'

function LoginPage() {
  return (
    <div className='background'>
        <div className='leftDiv'>
          <h1 className='facebookHeader'>facebook</h1>
          <p className='p1'>Connect with friends and the world <br /> around you on Facebook.</p>
        </div>
        <div className='rightDiv'>
          <LoginDiv />
          <p className='p2'><b>Create a Page</b> for a celebrity, brand or business.</p>
        </div>
    </div>
  )
}

export default LoginPage
