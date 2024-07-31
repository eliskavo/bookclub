import React, { useState } from 'react';
import '../App.css';

export const HoverText = ({ text }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div id="text-container">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`stroke-text ${hoverIndex === index ? 'hover-fill' : ''}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
