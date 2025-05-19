"use client";

import { useState } from 'react';

export default function ServiceHeroBackground({ coverImage, slug }) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = imageError ? `/services/${slug}.jpg` : (coverImage || `/services/${slug}.jpg`);
  
  return (
    <div 
      className=" relative h-[70vh] bg-cover bg-bottom text-black px-4"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: 'top', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight:'60vh'
      }}
    >
      <div className="  bg-opacity-100"></div>
    </div>
  );
} 
