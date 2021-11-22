import React from 'react'

import QuickMe from '../../Components/QuickMe/QuickMe'
import Work from '../../Components/Work/Work'
import Bio from '../../Components/Bio/Bio'
import Hobbies from '../../Components/Hobbies/Hobbies'
import Socials from '../../Components/Socials/Socials'

import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="sections">
        <QuickMe />
      </div>
      <div className="sections">
        <Work />
      </div>
      <div className="sections">
        <Bio />
      </div>
      <div className="sections">
        <Hobbies />
      </div>
      <div className="sections">
        <Socials />
      </div>
    </div>
  )
}
