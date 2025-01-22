import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-lg leading-relaxed text-gray-700">
            <p>
              Welcome to our 3D printing digital file marketplace! We are passionate about bringing innovative and creative designs to life through the power of 3D printing technology.
            </p>
            <p className="mt-4">
              Our platform connects talented designers with enthusiasts and professionals looking for high-quality 3D printable files. Whether you're a hobbyist, a maker, or a business, you'll find a wide range of designs to suit your needs.
            </p>
            <p className="mt-4">
              At our marketplace, we prioritize user experience and customer satisfaction. We strive to provide a seamless browsing and purchasing experience, backed by excellent customer support.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="https://th.bing.com/th/id/R.bebda161ca8afb22aeb42fb6db9b8907?rik=tF%2fc8LkbWiHuHA&riu=http%3a%2f%2fwww.sterileindia.com%2fimg%2fAboutUs.jpg&ehk=9sJZPpvnfuz9MRaab0lyy1DafWnr1BXv30ODSjpDgzE%3d&risl=&pid=ImgRaw&r=0" alt="About Us" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
