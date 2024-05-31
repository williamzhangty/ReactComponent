// src/components/Banner.js
import React from 'react';


const Banner = ({ title, text, primaryButtonText, secondaryButtonText }) => {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="primary">{primaryButtonText}</button>
      <button className="secondary">{secondaryButtonText}</button>
    </div>
  );
}

export default Banner;
