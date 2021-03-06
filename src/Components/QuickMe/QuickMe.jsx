import React from 'react';

import WelcomeToast from '../WelcomeToast/WelcomeToast';

import me from './me.jpg';
import './QuickMe.css';

export default function QuickMe() {

  return (
    <div className="quickme">
      <div className='quickme__image'></div>
      <div className='quickme__my-self'>
        <div className='toast'>
          <WelcomeToast />
        </div>
        <div className='contents'>
          <div className='quick-desc'>
            <h1>Florian Beaumont</h1>
            <p>Digital Passionate [ Javascript, ReactJS, ...OtherProps ]</p>
          </div>
          <div className='pp-container'>
            <img className='pp-image' src={me} alt='profile' />
          </div>
        </div>
      </div>
    </div>
  );
}
