import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Components/Card/Card';
import { ThemeContext } from '../../Context/ThemeContext';

import { datas } from '../../data/data.json';

import './Works.css';

export default function Works() {
  const { themePreference } = useContext(ThemeContext);

  return (
    <div className='works-container'>
      <h1>Works</h1>
      <div className='card-grid'>
        {datas.map((item, index) => {
          return (
            <Link
              key={index}
              className={themePreference.darkmode ? 'darkmode' : 'lightmode'}
              to={`/works/${item.id}-${item.title.toLowerCase()}`}
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
