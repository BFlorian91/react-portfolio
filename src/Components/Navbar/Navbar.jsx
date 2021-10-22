import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../../Context/ThemeContext';

import './Navbar.css';

export default function Navbar() {
  const { themePreference } = useContext(ThemeContext);

  return (
    <nav>
      <NavLink
        activeClassName={
          themePreference.darkmode
            ? 'is-active darkmode'
            : 'is-active lightmode'
        }
        className={
          themePreference.darkmode
            ? 'navbar-link darkmode'
            : 'navbar-link lightmode'
        }
        to='/works'
      >
        Works
      </NavLink>
      <NavLink
        activeClassName='is-active'
        className={
          themePreference.darkmode
            ? 'navbar-link darkmode'
            : 'navbar-link lightmode'
        }
        to='/posts'
      >
        Posts
      </NavLink>
    </nav>
  );
}
