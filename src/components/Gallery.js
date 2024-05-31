// src/components/Gallery.js
import React from 'react';


const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Gallery  ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
