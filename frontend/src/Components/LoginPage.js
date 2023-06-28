import React, { useState, useEffect } from 'react'
import './LoginPage.css'
import LoginDiv from './LoginDiv'
import SignupDiv from './SignupDiv'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

  const [signupDivDisplayed, setSignupDivDisplayed] = useState(false)

  const toggleSignup = (e) => {
    console.log('toggle')
    e.preventDefault()
    setSignupDivDisplayed(!signupDivDisplayed)
  };

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const msg = params.get('msg')
    if (msg) {
      toast.error(msg)
    }
  },[]);

  return (
    <div className='background'>
      <div className='leftDiv'>
        <h1 className='facebookHeader'>facebook</h1>
        <ToastContainer />
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
