import React from 'react'
import './sign.css'

export const Sign = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
        <input type="text" placeholder="UserName" />
        </div>
        <div className="input">
        <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
        <input type="password" placeholder="password" />
        </div>
        </div>
        <div className="submit-container">
            <div className="submit">sign up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}
