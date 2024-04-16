import React, { useState } from 'react';
import './Login.css';
import { GoogleLogin } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track whether login or signup form is displayed

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const navigate = useNavigate();
  const handleLogin = () => { 
    navigate('/details');
  }
 
  return (
    <>
      <div className='main'>
        <div className='heading'>
          <div class="nine">
            <h1>An Ai Platform<span>For Mock Interview Experience</span></h1>
          </div>
          <div className="three"><h1>SkillReviews AI</h1></div>
        </div>
        <div className="login-page">
          <div className="form">
            <div className='text'>
              <h1>SkillReview 💻 AI</h1>
              <h2>Welcome to SkillReview AI 👋</h2>
            </div>
            {isLogin ? (
              <form className='login-form'>
                <input type="text" name="" id="" placeholder='username' className='in'/>
                <input type="password" name="" id="" placeholder='password' className='in'/>
                <button className='log' onClick={handleLogin}>Login</button>
                <p className='message'>Not Registered? <a onClick={toggleForm} style={{cursor: "pointer"}}> Create an account</a></p>
              </form>
            ) : (
              <form className='signup-form'>
                <input type="text" name="" id="" placeholder='username' style={{height:"1.5rem"}} />
                <input type="password" name="" id="" placeholder='password' style={{height:"1.5rem"}}/>
                <input type="password" name="" id="" placeholder='confirm password' style={{height:"1.5rem"}}  />
                <button className='sign'>Sign Up</button>
                <p className='message'>Already have an account? <a onClick={toggleForm} style={{cursor: "pointer"}}> Sign in</a></p>
              </form>
            )}
            <div className="loginit">
              <GoogleLogin 
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;