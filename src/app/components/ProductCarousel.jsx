"use client"

import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      category: "shoes",
      price: 129.99,
      originalPrice: 199.99,
      soldCount: 234,
      discountPercentage: 35,
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Denim Jacket",
      category: "clothes",
      price: 89.99,
      originalPrice: 149.99,
      soldCount: 189,
      discountPercentage: 40,
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Pearl Necklace",
      category: "necklaces",
      price: 299.99,
      originalPrice: 499.99,
      soldCount: 56,
      discountPercentage: 40,
      image: "/api/placeholder/200/200",
    },
    {
      id: 4,
      name: "iPhone 15 Pro",
      category: "phones",
      price: 999.99,
      originalPrice: 1299.99,
      soldCount: 423,
      discountPercentage: 23,
      image: "/api/placeholder/200/200",
    },
    {
      id: 5,
      name: "Running Shorts",
      category: "clothes",
      price: 34.99,
      originalPrice: 49.99,
      soldCount: 678,
      discountPercentage: 30,
      image: "/api/placeholder/200/200",
    },
    {
      id: 6,
      name: "Gold Chain",
      category: "necklaces",
      price: 599.99,
      originalPrice: 899.99,
      soldCount: 89,
      discountPercentage: 33,
      image: "/api/placeholder/200/200",
    },
    {
      id: 7,
      name: "Samsung Galaxy S24",
      category: "phones",
      price: 899.99,
      originalPrice: 1199.99,
      soldCount: 345,
      discountPercentage: 25,
      image: "/api/placeholder/200/200",
    },
    {
      id: 8,
      name: "Adidas Ultraboost",
      category: "shoes",
      price: 159.99,
      originalPrice: 219.99,
      soldCount: 567,
      discountPercentage: 27,
      image: "/api/placeholder/200/200",
    },
    {
      id: 9,
      name: "Summer Dress",
      category: "clothes",
      price: 59.99,
      originalPrice: 89.99,
      soldCount: 234,
      discountPercentage: 33,
      image: "/api/placeholder/200/200",
    },
    {
      id: 10,
      name: "Diamond Pendant",
      category: "necklaces",
      price: 799.99,
      originalPrice: 1299.99,
      soldCount: 45,
      discountPercentage: 38,
      image: "/api/placeholder/200/200",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m left`;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-4">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
                      {product.discountPercentage}% OFF
                    </div>
                  </div>
                  
                  <h3 className="mt-3 font-semibold text-lg hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500">{product.category}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{formatTime(timeLeft)}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.soldCount} sold
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-red-600 font-bold">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: products.length - 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-red-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;