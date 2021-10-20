import React, { useContext } from 'react';

import { ThemeContext } from '../../Context/ThemeContext';

import sun from './icons8-soleil.svg';
import moon from './moon.svg';

import './ChangeThemeBtn.css';

export default function ChangeThemeBtn() {

 const { theme, dispatch } = useContext(ThemeContext)

  const toggleTheme = () => {
     theme.darkmode
      ? dispatch({ type: 'LIGHTMODE' })
      : dispatch({ type: 'DARKMODE' })
  }

  return (
    <div>
      {theme.darkmode ? (
        <button onClick={toggleTheme} className='btn light'>
          <img src={sun} alt='light theme' />
        </button>
      ) : (
        <button onClick={toggleTheme} className='btn dark'>
          <img width='25' src={moon} alt='dark theme' />
        </button>
      )}
    </div>
  );
}
