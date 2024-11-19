import React from 'react'
import './Zodiac.css'


const Zodiac = ({zodiac}) => {
  return (
    <div className='zodiac-item'>
       <img src={zodiac.image} alt ={zodiac.name || 'Zodiac Sign'}/>
       <h2>{zodiac.name}</h2> 
       <p>{zodiac.dates}</p>
       <p>Element:{zodiac.element}</p>
       <p>Ruling Planet: {zodiac.ruling_planet}</p>
        <ul>
            {zodiac.traits.map((trait,index)=> (
                <li key={index}>{trait}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default Zodiac;