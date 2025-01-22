import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recommanded from '../components/Recomanderd';
import { UserDatacontext } from './context/usercontext';

const Product = ({ product, categoryName }) => {

  const { user } = React.useContext(UserDatacontext);
  console.log(user);
  const {
    id,
    name,
    creator,
    like_count,
    collect_count,
    added,
    modified,
    is_published,
    is_wip,
    is_featured,
    is_nsfw,
    is_winner,
    is_edu_approved,
    is_printable,
    comment_count,
    thumbnail
  } = product;

  const handleBuyNow = () => {
    // Construct the download URL
    const downloadUrl = `https://api.thingiverse.com/files/${id}/download?access_token=ddbcb3d302545f30df1bfa1d5d56107d`;
    
    // Trigger the download
    window.open(downloadUrl, '_blank');
  };

  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={thumbnail} alt={name} />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{name}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              <strong>Creator:</strong> {creator.name} ({creator.location})<br />
              <strong>Likes:</strong> {like_count}<br />
              <strong>Collects:</strong> {collect_count}<br />
              <strong>Added:</strong> {added}<br />
              <strong>Modified:</strong> {modified}<br />
              <strong>Published:</strong> {is_published ? 'Yes' : 'No'}<br />
              <strong>Work in Progress:</strong> {is_wip ? 'Yes' : 'No'}<br />
              <strong>Featured:</strong> {is_featured ? 'Yes' : 'No'}<br />
              <strong>NSFW:</strong> {is_nsfw ? 'Yes' : 'No'}<br />
              <strong>Winner:</strong> {is_winner ? 'Yes' : 'No'}<br />
              <strong>Education Approved:</strong> {is_edu_approved ? 'Yes' : 'No'}<br />
              <strong>Printable:</strong> {is_printable ? 'Yes' : 'No'}<br />
              <strong>Comments:</strong> {comment_count}
            </p>

            <button onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <Recommanded categoryName={categoryName} />
    </>
  );
};

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(`https://api.thingiverse.com/things/${id}?access_token=ddbcb3d302545f30df1bfa1d5d56107d`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();

        setProduct(productData);
        const categoryResponse = await fetch(`https://api.thingiverse.com/things/${id}/categories?access_token=ddbcb3d302545f30df1bfa1d5d56107d`);
        if (!categoryResponse.ok) {
          throw new Error('Failed to fetch category');
        }
        const categoryData = await categoryResponse.json();
        if (categoryData.length > 0) {
          setCategoryName(categoryData[0].name);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return product ? <Product product={product} categoryName={categoryName} /> : <div>No product found</div>;
};

export default Products;
