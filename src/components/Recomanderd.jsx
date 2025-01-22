import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-48 object-cover object-center"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 font-bold mb-2">CREATOR: {item.creator.name}</p>
              <p className="text-gray-800 font-semibold">👍{item.like_count}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const Recomanderd = ({ categoryName }) => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.thingiverse.com/categories/${categoryName}/things?access_token=ddbcb3d302545f30df1bfa1d5d56107d`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setVehicleData(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-4">Recommendation</h2>
      <Cards data={vehicleData} />
    </div>
  );
};

export default Recomanderd;
