import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../Context/ThemeContext'

import { datas } from '../../data/data.json'

import './Works.css'

export default function Works() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className="works-container vertical-slide">
      <h1 className="vertical-slide">Works</h1>
      <div className="card-grid vertical-slide">
        {datas.map((item, index) => {
          return (
            <Link
              key={index}
              className={themePreference.darkmode ? 'darkmode' : 'lightmode'}
              to={`/works/${item.id}-${item.title.toLowerCase()}`}
            >
              <div
                className={
                  themePreference.darkmode
                    ? 'card darkmode'
                    : 'card lightmode'
                }
              >
                <img src={item.images[0]} />
                <p>{item.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
