import React from 'react'

import './Card.css'

export default function Card({ image, title, description }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="project" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
