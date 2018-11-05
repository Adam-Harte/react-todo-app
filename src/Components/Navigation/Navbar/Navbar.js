import React from 'react';

import './Navbar.css';

import NavItem from '../NavItem/NavItem';

const Navbar = () => {
   return (
      <nav className="Navbar">
         <ul>
            <NavItem path="/" label="Tasks" />
            <NavItem path="/completed" label="Completed" />
         </ul>
      </nav>
   );
};

export default Navbar;