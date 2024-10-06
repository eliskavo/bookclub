import React, { useState } from 'react';
import '../Styling/navbar.css'; // Ensure the path is correct

export const HoverText = ({ text }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="logo">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`logo ${hoverIndex === index ? 'hover-color' : ''}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
        </span>
      ))}
    </div>
  );
};