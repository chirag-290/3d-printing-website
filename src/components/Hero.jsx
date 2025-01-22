import React, { useState, useEffect } from 'react';

const images = [
  'https://f.hubspotusercontent10.net/hubfs/2699713/3D-Printer-Banner.png',
  'https://inlanddigital.com.au/wp-content/uploads/2016/12/banner-3d-printing.jpg',
  'https://i.ytimg.com/vi/O1xvCZ_y6l8/maxresdefault.jpg',

];

const Dot = ({ active }) => {
  return (
    <span className={`h-3 w-3 rounded-full inline-block mx-1 ${active ? 'bg-blue-500' : 'bg-red-300'}`}></span>
  );
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div
      className='relative bg-cover bg-center h-96 flex items-center justify-center'
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <button
        className='bg-transparent hover:bg-blue-600 text-white font-semibold py-8 px-3 rounded-lg shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-10'
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className='bg-transparent hover:bg-blue-600 text-white font-semibold py-8 px-3 rounded-lg shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-10'
        onClick={nextImage}
      >
        &gt;
      </button>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentImageIndex} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
