"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCart, Star, Image as ImageIcon, ChevronRight } from "lucide-react";
import products from "./Utils/product";

const ProductCardSkeleton = () => (
  <div className="w-[165px] xs:w-[165px] sm:w-[250px] lg:w-full h-[280px] xs:h-[300px] sm:h-[320px] flex-shrink-0 sm:flex-shrink p-1">
    <div className="animate-pulse bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-sm h-full">
      <div className="h-[140px] xs:h-[160px] sm:h-[180px] bg-gray-200 dark:bg-gray-700 rounded-t flex items-center justify-center">
        <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300 dark:text-gray-600" />
      </div>
      <div className="p-2 space-y-1">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (<div key={i} className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded" />))}
        </div>
        <div className="flex justify-between">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
        </div>
      </div>
    </div>
  </div>
);

const ProductCardItem = ({ product }) => {
  const [timer, setTimer] = useState(3600);
  
  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev > 0 ? prev - 1 : 0), 3000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = t => `${Math.floor(t/3600)}:${String(Math.floor((t%3600)/60)).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`;

  const truncateText = (text, maxLength = 20) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-[165px] xs:w-[165px] sm:w-[250px] lg:w-full h-[280px] xs:h-[300px] sm:h-[320px] flex-shrink-0 sm:flex-shrink p-1">
      <div className="bg-transparent dark:bg-gray-800 border dark:border-gray-700 rounded hover:shadow-md dark:hover:shadow-gray-700 transition-shadow duration-200 h-full">
        <div className="h-[140px] xs:h-[160px] sm:h-[180px] relative overflow-hidden rounded-t">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900">
              <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300 dark:text-gray-600" />
            </div>
          )}
          <div className="absolute top-1 right-1 bg-black text-white dark:bg-gray-700 px-1.5 py-0.5 rounded text-[10px] xs:text-xs">
            {product.discount || "10"}% OFF
          </div>
        </div>
        <div className="p-2 xs:p-3 space-y-1.5 xs:space-y-2">
          <div className="flex justify-between items-start gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold flex-1 text-gray-800 dark:text-gray-200">
              {truncateText(product.name || "Product", 20)}
            </h3>
            <button className="rounded-full border border-gray-800 dark:border-gray-200 p-1 sm:p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0">
              <ShoppingCart size={12} className="text-gray-800 dark:text-gray-200" />
            </button>
          </div>  
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (<Star key={i} className="text-yellow-500" size={10} />))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-red-500 dark:text-red-400 font-bold text-[10px] xs:text-xs flex items-center">
              ₦{product.price || "0"}
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" alt="NGN" className="ml-1 w-2.5 h-1.5 xs:w-3 xs:h-2" />
            </span>
            {product.originalPrice && <span className="text-gray-400 dark:text-gray-500 line-through text-[10px] xs:text-xs">₦{product.originalPrice}</span>}
          </div>
          <div className="flex justify-between text-[10px] xs:text-xs text-gray-400 dark:text-gray-500">
            <span>{formatTime(timer)}</span>
            <span>Sold: {product.soldCount || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const [loading, setLoading] = useState(true);
  const ITEMS_PER_SECTION = 36;

  useEffect(() => {
    if (products.length) setLoading(false);
    const timer = setTimeout(() => setLoading(false), 40000);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = (title, data) => (
    <div>
      <div className="bg-red-900 dark:bg-red-800 text-white py-3 rounded-t px-4 flex justify-between items-center">
        <h2 className="text-xs sm:text-sm">{title}</h2>
        <button className="flex items-center text-xs hover:text-gray-200 transition-colors duration-200">
          See More
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
      <div className="w-full">
        {/* Mobile view with two centered cards */}
        <div className="block sm:hidden w-full overflow-x-auto no-scrollbar bg-transparent">
          <div className="flex gap-0 w-max pl-5 pr-4">
            {loading 
              ? [...Array(6)].map((_, i) => <ProductCardSkeleton key={i} />)
              : data.slice(0, ITEMS_PER_SECTION).map(product => <ProductCardItem key={product.id} product={product} />)
            }
          </div>
        </div>
        
        {/* Desktop view */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full gap-x-1 gap-y-2">
          {loading 
            ? [...Array(ITEMS_PER_SECTION)].map((_, i) => <ProductCardSkeleton key={i} />)
            : data.slice(0, ITEMS_PER_SECTION).map(product => <ProductCardItem key={product.id} product={product} />)
          }
        </div>
      </div>
    </div>
  );

  const updatedProducts = products.map((product, index) => ({
    ...product,
    image: `https://picsum.photos/300/300?random=${index}`,
  }));

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="space-y-6 px-1 sm:px-2">
      {renderSection("Newest Products", updatedProducts.slice(0, ITEMS_PER_SECTION))}
      {renderSection("Latest Arrivals", updatedProducts.slice(ITEMS_PER_SECTION, ITEMS_PER_SECTION * 2))}
    </div>
  );
};

export default ProductCard;