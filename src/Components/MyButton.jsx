import React from 'react'
import './MyButton.css' 

const MyButton = ({ text, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
