import React, { useContext } from 'react';

import { ThemeContext } from '../../Context/ThemeContext';

import insta from './insta.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

import './Socials.css';

export default function Socials() {
  const { themePreference } = useContext(ThemeContext);
  return (
    <div className='socials-container'>
      <h3>On the web</h3>
      <hr
        className={
          themePreference.darkmode
            ? 'separator darkmode'
            : 'separator lightmode'
        }
      />
      <a
        href='https://www.instagram.com/fb_develop/'
        target='_blank'
        rel='noreferrer'
      >
        <div className='ligne'>
          <img width='22' src={insta} alt='instagram' />
          <p>@fb_develop</p>
        </div>
      </a>
      <a
        href='https://www.instagram.com/flb__photography/'
        target='_blank'
        rel='noreferrer'
      >
        <div className='ligne'>
          <img width='22' src={insta} alt='instagram' />
          <p>@flb__photography</p>
        </div>
      </a>
      <a href='https://github.com/BFlorian91' target='_blank' rel='noreferrer'>
        <div className='ligne'>
          <img width='22' src={github} alt='github' />
          <p>@BFlorian91</p>
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/florianbeaumont/'
        target='_blank'
        rel='noreferrer'
      >
        <div className='ligne'>
          <img width='20' src={linkedin} alt='linkedin' />
          <p>@florianbeaumont</p>
        </div>
      </a>
    </div>
  );
}
