import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

import './Navbar.css';

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      <a className={theme.darkmode ? 'darkmode' : 'lightmode'} href='/work'>
        Works
      </a>
      <a className={theme.darkmode ? 'darkmode' : 'lightmode'} href='/post'>
        Posts
      </a>
    </nav>
  );
}
