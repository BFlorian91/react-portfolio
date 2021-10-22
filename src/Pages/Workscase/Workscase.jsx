import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

import { datas } from '../../data/data.json';

import './Workcase.css';

export default function Workscase() {
  const { id } = useParams();
  const { themePreference } = useContext(ThemeContext);

  const worksClicked = datas.findIndex(
    obj => `${obj.id}-${obj.title.toLowerCase()}` === id
  );

  return (
    <div className='workscase-container'>
      <h3>
        <Link
          className={
            themePreference.darkmode ? 'darkmode-pink' : 'lightmode-blue'
          }
          to='/works'
        >
          Works
        </Link>{' '}
        {`> ${datas[worksClicked].title}`}
      </h3>
      <div className='description'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sequi, accusantium suscipit aliquid soluta quis porro, culpa quisquam
          enim doloribus amet ea quod adipisci quae unde, ab ratione commodi
          nulla.
        </p>
      </div>
      <div className='stacks'>
        <div>
          <span className='badges'>Website</span>
          <a href={datas[worksClicked].url} target='_blank' rel='noreferrer'>
            {datas[worksClicked].url}
          </a>
        </div>
        <div className='contents'>
          <span className='badges'>Stacks</span>
          <p>GatsbyJS, ReactJS, Graphql, Markown</p>
        </div>
      </div>
      <div className='workscase-img'>
        <img
          src={process.env.PUBLIC_URL + `/` + datas[worksClicked].image}
          alt=''
        />
      </div>
      {/* <p>{datas[worksClicked].title}</p> */}
    </div>
  );
}
