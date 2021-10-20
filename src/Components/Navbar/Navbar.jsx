import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../Context/ThemeContext';


import './Navbar.css';

export default function Navbar() {
  const { themePreference } = useContext(ThemeContext);

  return (
    <nav>
      <Link className={themePreference.darkmode ? 'darkmode' : 'lightmode'} to='/work'>
        Works
      </Link>
      <Link className={themePreference.darkmode ? 'darkmode' : 'lightmode'} to='/post'>
        Posts
      </Link>
    </nav>
  );
}
