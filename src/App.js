import React from 'react';
import './App.css';
import MyButton from './Components/MyButton';
import ZodiacList from './Components/ZodiacList';
import zodiac_data from './Components/Assets/zodiacs';


export default function App() {

  // Handle Button Clicks
  const handleClick = (action) => {
    switch(action) {
      case 'alert': 
        alert('Keep coding!');
        break;
      
      default:  
        console.log('Unknown action');
      }};



  return (
    <div className ="container" >
      <div className='header'>
        <h1>
          Welcome to my Horoscope App <br/> Read now.
        </h1>
      </div>

      <div className='input'>       
        <input placeholder='Enter your birth month'/>          
        <MyButton text="Press me" onClick={() => handleClick('alert')} />
        
      </div>

      <div className='all-zodiacs'>
        <ZodiacList zodiac_data={zodiac_data} />;

      </div>

    </div>
    
  )
}

