import React from 'react'
import './LoginDiv.css'

function LoginDiv({toggleSignup}) {
  return (
    <div className='container'>
      <form className='form' action='/api/login' method='POST'>
        <input type='email' placeholder='Email' className='emailInput' name='email'/>
        <input type='password' placeholder='Password' className='passwordInput' name='password'/>
        <button className='loginButton'>Log In</button>
        <p className='forgotPassword'><a href='http://localhost:3002/forgotPassword'>Forgot password?</a></p>
        <button className='newAccount' onClick={toggleSignup}>Create new account</button>
      </form>
    </div>
  )
}

export default LoginDiv
