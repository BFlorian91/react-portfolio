import React, { useContext } from 'react';

import Card from '../../Components/Card/Card';
import { ThemeContext } from '../../Context/ThemeContext';

import { posts } from '../../data/posts.json';

import './Posts.css';

export default function Posts() {

  const { themePreference } = useContext(ThemeContext)

  return (
    <div className='posts-container'>
      <h1>Posts</h1>
      <div className='card-grid'>
        {posts.map((item, index) => {
          return (
            <a className={themePreference.darkmode ? 'darkmode' : 'lightmode'} href={item.urlPost} target="_blank" rel="noreferrer">
              <Card
                key={index}
                image={item.image}
                title={item.title}
                // description={item.description}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
