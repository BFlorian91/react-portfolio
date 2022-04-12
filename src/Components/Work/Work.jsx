import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../Context/ThemeContext'

import './Work.css'

export default function Work() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className="work-container">
      <h3>Work</h3>
      <hr
        className={
          themePreference.darkmode
            ? 'separator darkmode'
            : 'separator lightmode'
        }
      />
      <p>
        Hey I’m a former student of{' '}
        <a
          className="information-42"
          href="https://42.fr/en/what-is-42/42-program-explained/"
          target="_blank"
        >
          42
        </a>{' '}
        school specializing in web application creation as a front-end (at
        first), I’m based in Paris, and what I love most of all is solving
        real-life problems with lines of code. When I’m not online, I like going
        out with my camera or doing music.
      </p>
      <Link className="button-49" to="/works">
        My Porfolio {'>'}
      </Link>
    </div>
  )
}
