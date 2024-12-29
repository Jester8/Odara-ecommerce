import { useState } from 'react';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductPage({ product }) {
  const [favorites, setFavorites] = useState(false);

  // Handle "Add to Favorites"
  const handleFavorite = () => {
    setFavorites(true);
    alert('You added this product to favorites!');
  };

  return (
    <div className="min-h-screen p-5 bg-gray-100 flex flex-col items-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Product Images */}
        <div className="lg:w-2/3 grid grid-cols-2 gap-2 p-4">
          {product.images.map((image, index) => (
            <div key={index} className="relative group">
              <Image
                src={image}
                alt={`Product view ${index + 1}`}
                width={300}
                height={300}
                className="rounded-lg object-cover cursor-pointer"
                onClick={() => window.open(image, '_blank')}
              />
              <p className="text-center mt-2 text-sm font-medium">
                {index + 1 === 1
                  ? 'First View'
                  : index + 1 === 2
                  ? 'Second View'
                  : index + 1 === 3
                  ? 'Third View'
                  : 'Fourth View'}
              </p>
            </div>
          ))}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/3 p-4 flex flex-col justify-between">
          {/* Favorite Icon */}
          <div className="flex justify-end">
            <FavoriteIcon
              onClick={handleFavorite}
              className="cursor-pointer text-red-500 hover:text-red-700"
              fontSize="large"
            />
          </div>

          {/* Product Info */}
          <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-600 mb-4">Vendor: {product.vendor}</p>

          {/* Price */}
          <p className="text-lg font-bold text-gray-800">₦{product.price}</p>

          {/* Star Rating */}
          <div className="flex items-center my-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-5 w-5 rounded-full ${
                  i < product.rating ? 'bg-red-700' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-red-800">
            <ShoppingCartIcon fontSize="small" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Fetch paths for pre-rendering
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Mock data
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = {
    id: params.id,
    name: `Product ${params.id}`,
    vendor: `Vendor ${params.id}`,
    price: (Math.random() * 5000 + 1000).toFixed(2),
    rating: Math.floor(Math.random() * 5) + 1,
    images: [
      `https://picsum.photos/300?random=${params.id}1`,
      `https://picsum.photos/300?random=${params.id}2`,
      `https://picsum.photos/300?random=${params.id}3`,
      `https://picsum.photos/300?random=${params.id}4`,
    ],
  };

  return { props: { product } };
}
