import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {SignInContext} from "../Contexts/SignInContext"


const Header = () => {
  const [Username, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState("false")
  return (
    <div>
      <SignInContext.Provider value={{Username, setUserName, setShowProfile}}>
      <ul className='nav'>
        {showProfile ?  <li>
         <Link to="/Profile"> Profile</Link>
        </li> : 
         <li>
         <Link to="/"> SignIn</Link>
        </li> }
      </ul>
      </SignInContext.Provider>
    </div>
  )
}

export default Header;
