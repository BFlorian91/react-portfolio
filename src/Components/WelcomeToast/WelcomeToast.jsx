import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

import './WelcomeToast.css';

export default function WelcomeToast() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={ theme.darkmode ? 'toast darkmode' : 'toast lightmode'}>
      <p>Hey, I'm a front-end developer based in Paris!</p>
    </div>
  );
}
