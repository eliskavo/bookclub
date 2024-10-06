import React from 'react';
import "../Styling/floatingletters.css";

export const FloatingLetters = () => {
  const letters = [
    { char: 'b', style: { top: '10%', left: '20%', transform: 'rotate(-40deg)' } },
    { char: 'u', style: { top: '22%', left: '30%', transform: 'rotate(35deg)' } },
    { char: 'k', style: { top: '9%', left: '40%', transform: 'rotate(-30deg)', color: '#FFD700' } },
    { char: 'k', style: { top: '32%', left: '20%', transform: 'rotate(30deg)' } },
    { char: 'l', style: { top: '32%', left: '40%', transform: 'rotate(-45deg)' } },
    { char: 'a', style: { top: '22%', left: '50%', transform: 'rotate(-15deg)' } },
    { char: 'b', style: { top: '47%', left: '35%', transform: 'rotate(44deg)', color: '#FFD700' } },
  ];

  return (
    <div className="floating-letters-container">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="floating-letter"
          style={{
            ...letter.style, // Inline style specific to each letter
          }}
        >
          {letter.char}
        </span>
      ))}
    </div>
  );
};
