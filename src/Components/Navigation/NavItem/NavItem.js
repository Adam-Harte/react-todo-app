import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

const NavItem = (props) => {
   return (
      <li className="NavItem">
         <NavLink to={props.path} exact activeClassName="active">{props.label}</NavLink>
      </li>
   );
};

export default NavItem;