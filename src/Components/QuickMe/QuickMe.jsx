import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import WelcomeToast from '../WelcomeToast/WelcomeToast'

import me from './me_.jpg'
import './QuickMe.css'

export default function QuickMe() {
  return (
    <div className="quickme">
      <div className="quickme__image"></div>
      <div className="quickme__my-self">
        <div className="toast">
          <WelcomeToast />
        </div>
        <div className="contents">
          <div className="quick-desc">
            <h1>Florian Beaumont</h1>
            <p>Digital Passionate [ Javascript, ReactJS, ...OtherProps ]</p>
          </div>
          <div className="pp-container">
            <LazyLoadImage
              className="pp-image"
              effect="blur"
              src={me}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
