import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchResults = ({ data }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      <div className="flex flex-col space-y-4">
        {data.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 p-4 flex items-center">
              <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 font-bold mb-2">CREATOR: {item.creator.name}</p>
                <p className="text-gray-800 font-semibold">👍{item.like_count}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SearchResult = () => {
  const [artData, setArtData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.thingiverse.com/tags/${searchTerm}/things?access_token=ddbcb3d302545f30df1bfa1d5d56107d`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setArtData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(searchTerm.trim());
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-3 pr-12 rounded-full focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 px-4 py-3 bg-transparent text-black rounded-full hover:bg-blue-600 focus:outline-none"
        >
          <FaSearch />
        </button>
      </div>
      <SearchResults data={artData} />
    </div>
  );
};

export default SearchResult;
