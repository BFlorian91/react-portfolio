import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

import './Hobbies.css';

export default function Hobbies() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className='hobbies-container'>
      <h3>What I ❤️</h3>
      <hr className={themePreference.darkmode ? 'separator darkmode' : 'separator lightmode'} />
      <p>Photography, Literature, Music, Learn about everything.</p>
    </div>
  );
}
