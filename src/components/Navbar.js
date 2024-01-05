import React from 'react';
import { Link } from 'react-scroll';
import maple from '../assets/maple.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={maple} alt="Logo" className="logo" />
      <ul>
        <li className='navtext'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='navtext'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='navtext'><Link to="experience" smooth={true} duration={500}>Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
