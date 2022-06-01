import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'

import { datas } from '../../data/data.json'

import './Workcase.css'

export default function Workscase() {
  const { id } = useParams()
  const { themePreference } = useContext(ThemeContext)

  const worksClicked = datas.findIndex(
    (obj) => `${obj.id}-${obj.title.toLowerCase()}` === id
  )

  return (
    <div className="workscase">
      <h3 className='workscase__path--title'>
        <Link
          className={
            themePreference.darkmode ? 'darkmode-pink' : 'lightmode-blue'
          }
          to="/works"
        >
          Works
        </Link>{' '}
        {`> ${datas[worksClicked].title}`}
      </h3>
      <h1>{datas[worksClicked].title}</h1>
      <div className="workcase__description">
        <p>
          {datas[worksClicked].description}
        </p>
      </div>
      <ul className="workcase__product--info">
        <li>
          <span className="badge">Website</span>
          <a
            className="workcase__url--website"
            href={datas[worksClicked].url}
            target="_blank"
            rel="noreferrer"
          >
            {datas[worksClicked].url ? datas[worksClicked].url : 'Not uploaded'}
          </a>
        </li>
        <li>
          <div className="stack-used">
            <span className="badge">Stack</span>
              {datas[worksClicked].stacks.map((item, index) => {
                return <div key={index}>{index ? ',' : ''} {item}</div>
              })}
          </div>
        </li>
      </ul>
      <div className="workscase-img">
        {datas[worksClicked].images.map((item, index) => {
          return <img key={index} src={process.env.PUBLIC_URL + `/` + item} alt="" />
        })}
      </div>
    </div>
  )
}
