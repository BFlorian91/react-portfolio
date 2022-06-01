import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../Context/ThemeContext'

import { datas } from '../../data/data.json'

import './Works.css'

export default function Works() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className="works">
      <h1 className="works__title">Works</h1>
      <div className="works__card--grid">
        {datas.map((item, index) => {
          return (
            <Link
              key={index}
              className={
                themePreference.darkmode
                  ? 'darkmode works__card--vertical-slide'
                  : 'lightmode'
              }
              to={`/works/${item.id}-${item.title.toLowerCase()}`}
            >
              <div
                className={
                  themePreference.darkmode
                    ? 'works__card darkmode'
                    : 'works__card lightmode'
                }
              >
                <img className="works__card--img" src={item.images[0]} />
                <p>{item.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
