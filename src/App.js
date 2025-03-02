import React from 'react';
import './App.css';
import MyButton from './Components/MyButton';
import ZodiacList from './Components/ZodiacList';



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
      <div> 
        <nav>
          Nav bar
        </nav>

      </div>
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
        <ZodiacList/>

      </div>

      <div>
        footer
      </div>

    </div>
    
  )
}

