import React, { useState } from 'react'

import sun from './icons8-soleil.svg'
import moon from './moon.svg'

import './ChangeThemeBtn.css'

export default function ChangeThemeBtn() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div>
      {
        isDark 
        ? <button className="btn light"><img src={sun} alt="dark theme icon" /></button>
        : <button className="btn dark"><img src={moon} alt="" /></button>
      }
    </div>
  )
}
