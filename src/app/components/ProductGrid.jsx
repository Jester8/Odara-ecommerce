"use client"

import { useState, useEffect } from 'react';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import pic1 from '../Images/Xiaomi_712x384_FS.jpg';
import pic2 from '../Images/pic1.jpg';
import pic3 from '../images/pic2.jpg';

const ProductGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    { id: 1, image: pic1 },
    { id: 2, image: pic2 },
    { id: 3, image: pic3 },
    { id: 4, image: pic1 },
  ];

  return (
    <div className="w-full p-0.5">
      <h2 className="text-2xl text-center font-bold mb-2">Newest Products</h2>
      {/* Desktop Grid */} 
      <div className="hidden sm:grid grid-cols-4 gap-[1.05rem]">
        {products.map((product) => (
          <div key={product.id} className="relative">
            {isLoading ? (
              <div className="w-[572px] h-[250px] bg-gray-200 animate-pulse flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
            ) : (
              <Image
                src={product.image}
                alt={`Product ${product.id}`}
                width={572}
                height={250}
                className="object-cover"
                priority={product.id <= 2}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 p-1">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              {isLoading ? (
                <div className="w-[712px] h-[384px] bg-gray-200 animate-pulse flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
              ) : (
                <Image
                src={product.image}
                alt={`Product ${product.id}`}
                width={372}
                height={250}
                className="object-cover"
                priority={product.id <= 2}
              />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
