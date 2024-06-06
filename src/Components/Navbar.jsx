import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar';
const Navbar = () => {
  return (
 <Wrapper>
    <div className="nav-center">
        <span className="logo">MisxMastar</span>
        <div className="nav-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/Newsletter'>NewsLetter</NavLink>

        </div>
    </div>
    </Wrapper>
  )
}

export default Navbar
