import React from 'react'
import zodiac_data from './Assets/zodiacs'
import './ZodiacList.css' 

const ZodiacList = ({ zodiac_data}) => {
  return (
    <div className='zodiac-list'>
    <ul>
      {zodiac_data.map((zodiac) => (
        <li key={zodiac.id} className='zodiac-item'>
          <h2>{zodiac.name}</h2>
          <img className="zodiac-image" src={zodiac.image} alt={zodiac.name} />
          <p><strong>Dates:</strong> {zodiac.dates}</p>
          <p><strong>Element:</strong> {zodiac.element}</p>
          <p><strong>Ruling Planet:</strong> {zodiac.ruling_planet}</p>
          <p><strong>Traits:</strong> {zodiac.traits.join(', ')}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ZodiacList;