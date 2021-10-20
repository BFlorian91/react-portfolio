import React from 'react'

import './Bio.css'

export default function Bio() {
  return (
    <div className='bio-container'>
      <h3>Bio</h3>
      <hr />
      <div className='ligne ligne-1'>
        <p>
          <span>1991</span>Born near Paris, France.
        </p>
      </div>
      <div className='ligne ligne-2'>
        <p>
          <span>2017</span>OpenClassRoom, Mobile development with Apple Swift
          technologie
        </p>
      </div>
      <div className='ligne ligne-3'>
        <p>
          <span>2018</span>42, Software Architect mainly using C language and
          PHP
        </p>
      </div>
      <div className='ligne ligne-4'>
        <p>
          <span>2020 to present</span>Working at home using mostly Javascript,
          ReactJS 🏡
        </p>
      </div>
    </div>
  );
}
