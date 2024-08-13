import React from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function Keyboard({ guessedLetters, handleGuess, word }) {
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          className={`key ${guessedLetters.includes(letter) ? (word.includes(letter) ? 'correct' : 'incorrect') : ''}`}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
