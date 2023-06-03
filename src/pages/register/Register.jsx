import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input type="text" placeholder='Enter username' className='registerInput'/>
            <label>Email</label>
            <input type="text" placeholder='Enter your email' className='registerInput'/>
            <label>Password</label>
            <input type="password" placeholder='Create new password' className='registerInput'/>
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerRegisterButton'>Login</button>
    </div>
  )
}
