import React from 'react'
import './LoginDiv.css'

function LoginDiv({toggleSignup}) {

   
  return (
    <div className='container'>
      <form className='form' action='/api/login' method='POST'>
        <input type='email' placeholder='Email' className='emailInput'/>
        <input type='password' placeholder='Password' className='passwordInput'/>
        <button className='loginButton'>Log In</button>
        <p className='forgotPassword'><a>Forgot password?</a></p>
        <button className='newAccount' onClick={toggleSignup}>Create new account</button>
      </form>
    </div>
  )
}

export default LoginDiv
