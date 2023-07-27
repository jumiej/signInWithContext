import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import {SignInContext} from "../Contexts/SignInContext"


const Header = () => {
const {showProfile} = useContext(SignInContext)
  return (
    <div>
      <ul className='nav'>
        {showProfile ?  <li>
         <Link to="/Profile"> Profile</Link>
        </li> : 
         <li>
         <Link to="/"> SignIn</Link>
        </li> }
      </ul>
    </div>
  )
}

export default Header;
