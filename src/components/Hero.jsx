import React, { useState, useEffect } from 'react';

const images = [
  'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1715033132422-023b77e191c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D',

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
      className='relative bg-cover bg-center h-96 flex items-center justify-center image-container'
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
