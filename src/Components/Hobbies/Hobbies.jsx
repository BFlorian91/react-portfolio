import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

import './Hobbies.css';

export default function Hobbies() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className='hobbies-container'>
      <h3>What I ❤️</h3>
      <hr className={themePreference.darkmode ? 'separator darkmode' : 'separator lightmode'} />
      <p>Music, Photography, Playing Piano, Astronomy, Learning about everything and nothing</p>
    </div>
  );
}
