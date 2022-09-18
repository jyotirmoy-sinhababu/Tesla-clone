import React from 'react';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='nav-cnt'>
      <div className='nav-logo'>
        <Logo />
      </div>
      <div className='nav-navlinks-firstset'>
        <NavLink className='nav-link'>Model 3</NavLink>
        <NavLink className='nav-link'>Model X</NavLink>
        <NavLink className='nav-link'>Solar panel</NavLink>
        <NavLink className='nav-link'>Solar Roof</NavLink>
      </div>
      <div className='nav-navlinks-secondset'>
        <NavLink className='nav-link-sec'>Account</NavLink>
        <NavLink className='nav-link-sec'>Menu</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
