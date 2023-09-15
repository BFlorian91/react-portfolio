import React, { useContext } from 'react'

import Card from '../../Components/Card/Card'
import { ThemeContext } from '../../Context/ThemeContext'

import { posts } from '../../data/posts.json'

import './Posts.css'

export default function Posts() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className="posts">
      <div className="posts__card--grid">
        {posts.map((item, index) => {
          return (
            <a
              key={index}
              className={
                themePreference.darkmode
                  ? 'darkmode posts__card--vertical-slide'
                  : 'lightmode posts__card--vertical-slide'
              }
              href={item.urlPost}
              target="_blank"
              rel="noreferrer"
            >
              <Card
                image={item.image}
                title={item.title}
                // description={item.description}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
