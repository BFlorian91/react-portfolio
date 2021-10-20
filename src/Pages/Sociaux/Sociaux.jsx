import React from 'react';

import insta from './insta.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

import './Sociaux.css';

export default function Sociaux() {
  return (
    <div className='sociaux-container'>
      <h3>On the web</h3>
      <hr />
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
        href='https://www.instagram.com/fb_visuals/'
        target='_blank'
        rel='noreferrer'
      >
        <div className='ligne'>
          <img width='22' src={insta} alt='instagram' />
          <p>@fb_visuals</p>
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
