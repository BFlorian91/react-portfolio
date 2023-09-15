import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext';

import Navbar from '../Navbar/Navbar';
import ChangeThemeBtn from '../ChangeThemeBtn/ChangeThemeBtn';

import './Header.css'

export default function Header() {
  const [navBlur, setNavBlur] = useState(false);
  
  const { themePreference } = useContext(ThemeContext)

   const blurNavbar = () => {
     window.scrollY >= 30 ? setNavBlur(true) : setNavBlur(false);
   };

   window.addEventListener('scroll', blurNavbar);

  return (
      <header className={navBlur ? 'header active' : 'header'}>
        <div className='left-part'>
          <Link className={themePreference.darkmode ? 'darkmode' : 'lightmode'} to='/'>
            <p className='logo'>FB</p>
          </Link>
          <Navbar />
        </div>
        <ChangeThemeBtn />
      </header>
  );
}
