import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  let navigate = useNavigate()
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
        <button className='registerRegisterButton' onClick={()=> {
          navigate("/login")
        }}>Login</button>
    </div>
  )
}
