import React from 'react';
import kartuves from '/kartuves.jpg'


function HangmanDrawing({ incorrectGuesses }) {
  const parts = [
    'head',
    'body',
    'left-arm',
    'right-arm',
    'left-leg',
    'right-leg'
  ];

  return (
    <div className="hangman-drawing">
      <div>
      <img className="hangman-image" src={kartuves} alt="Kartuves" />
      </div>
      {parts.map((part, idx) => (
        <div key={part} className={`hangman-part ${incorrectGuesses > idx ? part : ''}`}></div>
      ))}
    </div>
  );
}

export default HangmanDrawing;
