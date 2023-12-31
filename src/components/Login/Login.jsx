import React from 'react'
import clockimg from '../../assests/bro.png'
import { Link } from 'react-router-dom';
import "./login.css";
import Form from './Form';
const Login = () => {
  return (
    <div className='home'>
    <div className='logoflex'>
    <img className='clockimg' src={clockimg} alt=''/>
    <p className='p11'>Day<span className='p21'>Task</span></p>  
    </div>
    <p className='Create_your_account'>Create Your Account</p>
    <Form/>
    <p className='have_an_account'>Already have an account?<Link to='/signin'><span>Log In</span></Link></p>
    </div>
  )
}

export default Login