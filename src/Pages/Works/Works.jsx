import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { ThemeContext } from '../../Context/ThemeContext'

import { datas } from '../../data/data.json'

import './Works.css'

export default function Works() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className="works">
      <div className="works__card--grid">
        {datas.map((item, index) => {
          return (
            <Link
              key={index}
              className={
                themePreference.darkmode
                  ? 'darkmode works__card--vertical-slide'
                  : 'lightmode works__card--vertical-slide'
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
                <img
                  className={
                    themePreference.darkmode
                      ? 'works__card--img'
                      : 'works__card--img lightmode'
                  }
                  effect="blur"
                  src={item.images[0]}
                  alt={item.images_credentials}
                />
              </div>
              <p className="works__card--title">{item.title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
