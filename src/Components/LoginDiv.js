import React from 'react'
import './LoginDiv.css'

function LoginDiv() {
  return (
    <div className='container'>
      <form className='form'>
        <input type='text' placeholder='Email or phone number' className='emailInput'/>
        <input type='password' placeholder='Password' className='passwordInput'/>
        <button className='loginButton'>Log In</button>
        <p className='forgotPassword'><a>Forgot password?</a></p>
        <button className='newAccount'>Create new account</button>
      </form>
    </div>
  )
}

export default LoginDiv
