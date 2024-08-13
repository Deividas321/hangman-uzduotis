import React from 'react';

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
      {parts.map((part, idx) => (
        <div key={part} className={`hangman-part ${incorrectGuesses > idx ? part : ''}`}></div>
      ))}
    </div>
  );
}

export default HangmanDrawing;
