"use client";

import React, { useState } from 'react';
import { MenuOutlined } from '@mui/icons-material';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: 'Latest Deals', link: '/latest-deals' },
    { name: 'Clothing', link: '/clothing' },
    { name: 'Accessories', link: '/accessories' },
    { name: 'Electronics', link: '/electronics' },
    { name: 'Home & Kitchen', link: '/home-kitchen' },
    { name: 'Beauty & Personal Care', link: '/beauty' },
    { name: 'Sports & Outdoors', link: '/sports' },
  ];

  return (
    <nav className="bg-white ">
      <div className="container mx-auto mr-9 px-4 py-3 flex items-center justify-between">
        {/* Categories Dropdown */}
        <div className="relative flex items-center space-x-4">
          {/* <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-full w-50 hover:bg-gray-300 transition duration-300 
            max-[430px]:hidden"
          >
            <MenuOutlined className="mr-2" />
            All Categories
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-50 bg-gray-200 rounded-md shadow-lg z-50 
            max-[430px]:hidden">
              <ul className="py-2">
                {categories.map((category, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-300 transition duration-300 
                  max-[430px]:hidden">
                    <a href={category.link} className="block text-black">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 
            max-[1024px]:block 
            max-[768px]:block 
            max-[430px]:hidden">
            {categories.filter(category => 
              ['Latest Deals', 'Clothing', 'Accessories', 'Electronics'].includes(category.name)
            ).map((category, index) => (
              <a 
                key={index} 
                href={category.link} 
                className="text-gray-800 hover:text-red-600 transition duration-300"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;