import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className='navtext'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='navtext'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='navtext'><Link to="experience" smooth={true} duration={500}>Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
