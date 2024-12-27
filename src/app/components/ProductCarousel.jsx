"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Clock, ChevronLeft, ChevronRight, Hourglass } from "lucide-react";

const ProductSkeleton = () => (
  <div className="hidden md:flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 flex-shrink-0 p-0.5">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse h-[260px]">
      <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-t-lg" />
      <div className="p-1.5">
        <div className="mt-1 h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="mt-1 h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        <div className="mt-1 flex justify-between">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
        </div>
      </div>
    </div>
  </div>
);

const ProductCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60);
  const [mounted, setMounted] = useState(false);

  const products = Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: `Category ${Math.ceil((index + 1) / 4)}`,
    image: `https://picsum.photos/400/400?random=${index + 1}`,
    discountPercentage: Math.floor(Math.random() * 30) + 10,
    soldCount: Math.floor(Math.random() * 500) + 50,
    price: (Math.random() * 100).toFixed(2),
    originalPrice: (Math.random() * 150).toFixed(2),
  }));

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 5 * 60 * 60));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxVisible = window.innerWidth < 768 ? 2 
        : window.innerWidth < 1024 ? 3 
        : window.innerWidth < 1280 ? 4 
        : window.innerWidth < 1536 ? 5 
        : 6;
      return prevIndex === products.length - maxVisible ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxVisible = window.innerWidth < 768 ? 2 
        : window.innerWidth < 1024 ? 3 
        : window.innerWidth < 1280 ? 4 
        : window.innerWidth < 1536 ? 5 
        : 6;
      return prevIndex === 0 ? products.length - maxVisible : prevIndex - 1;
    });
  };

  if (!mounted) return null;

  return (
    <div className="hidden md:block relative w-full group px-1">
      <button onClick={handlePrev} className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100">
        <ChevronLeft className="w-4 h-4 dark:text-white" />
      </button>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out gap-0"
          style={{
            transform: `translateX(-${currentIndex * (
              window.innerWidth < 768 ? 50 
              : window.innerWidth < 1024 ? 33.333 
              : window.innerWidth < 1280 ? 25 
              : window.innerWidth < 1536 ? 20 
              : 16.666
            )}%)`,
          }}>
          {isLoading
            ? Array(4).fill(null).map((_, index) => <ProductSkeleton key={index} />)
            : products.map((product) => (
                <div key={product.id} className="hidden md:block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 flex-shrink-0 p-0.5">
                  <div className="bg-white dark:bg-gray-800 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 h-[260px]">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-none">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16.666vw"
                        className="object-cover"
                      />
                      <div className="absolute top-1 right-1 bg-black text-white px-1 py-0.5 rounded text-[10px]">
                        {product.discountPercentage}% OFF
                      </div>
                    </div>

                    <div className="p-1.5 space-y-0.5">
                      <h3 className="font-semibold text-xs hover:text-blue-600 dark:text-white transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-[10px]">{product.category}</p>

                      <div className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-0.5">
                          <Hourglass className="w-2.5 h-2.5 text-yellow-500" />
                          <span className="dark:text-gray-300">{formatTime(timeLeft)}</span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {product.soldCount} sold
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-red-600 dark:text-red-400 font-bold text-xs">₦{product.price}</span>
                        <span className="text-gray-400 dark:text-gray-500 line-through text-[10px]">₦{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <button onClick={handleNext} className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100">
        <ChevronRight className="w-4 h-4 dark:text-white" />
      </button>
    </div>
  );
};

export default ProductCarousel;