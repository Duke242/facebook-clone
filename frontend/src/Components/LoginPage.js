import React, { useState } from 'react'
import './LoginPage.css'
import LoginDiv from './LoginDiv'
import SignupDiv from './SignupDiv'

function LoginPage() {

  const [signupDivDisplayed, setSignupDivDisplayed] = useState(false)

  const toggleSignup = (e) => {
    console.log('toggle')
    e.preventDefault()
    setSignupDivDisplayed(!signupDivDisplayed)
  };

  return (
    <div className='background'>
      <div className='leftDiv'>
        <h1 className='facebookHeader'>facebook</h1>
        <p className='p1'>Connect with friends and the world <br /> around you on Facebook.</p>
      </div>
      <div className='rightDiv'>
        <LoginDiv toggleSignup={toggleSignup}/>
        <p className='p2'><b>Create a Page</b> for a celebrity, brand or business.</p>
      </div>
      {signupDivDisplayed && <SignupDiv handlePopup={toggleSignup}/>} 

    </div>
  )
}

export default LoginPage
