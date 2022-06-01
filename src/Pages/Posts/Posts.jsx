import React, { useContext } from 'react'

import Card from '../../Components/Card/Card'
import { ThemeContext } from '../../Context/ThemeContext'

import { posts } from '../../data/posts.json'

import './Posts.css'

export default function Posts() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className="posts">
      <h1 className='posts__title posts__vertical-slide'>Posts</h1>
      <div className="posts__card--grid posts__vertical-slide">
        {posts.map((item, index) => {
          return (
            <a
              key={index}
              className={themePreference.darkmode ? 'darkmode' : 'lightmode'}
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
