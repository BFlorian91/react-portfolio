import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

import './Card.css'

export default function Card({ title }) {
  const { themePreference } = useContext(ThemeContext)
  return (
    <div className="card-container">
      <div className={themePreference.darkmode ? "card-image-dark" : "card-image-light"}>
        <div className="card-body">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
