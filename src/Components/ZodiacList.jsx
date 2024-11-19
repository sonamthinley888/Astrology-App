import React from 'react'
import './ZodiacList.css' 
import zodiacs from './Assets/zodiac_data'
import Zodiac from './Zodiac';



const ZodiacList = () => {
  return (
    <div className='zodiac-list'>
      {zodiacs.map((zodiac) => (
        <Zodiac key ={zodiac.id} zodiac={zodiac} />  /* Pass the zodiac object to the Zodiac component */
      ))}
    </div>
  );
};

export default ZodiacList;