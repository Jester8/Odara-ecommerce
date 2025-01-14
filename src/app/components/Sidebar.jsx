import React from 'react';
import { useDarkMode } from "../components/context/Darkmode";
import { Language, LocationOn, Home, Category, Settings, Info, ContactMail, Help, Star, Close } from '@mui/icons-material';
import Image from 'next/image';
import lightlogo from '../assets/img/Odara png.png';
import darklogo from "../assets/img/Odara invert.png";

export const Sidebar = ({ open, onClose }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full z-50 transition-all duration-300
        ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}
        ${open ? 'block' : 'hidden'}`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 p-2 text-2xl transition-colors duration-300
          ${darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}
      >
        <Close />
      </button>

      {/* Logo Section */}
      <div className="flex justify-start items-center p-4">
        <Image
          src={darkMode ? lightlogo : darklogo}
          alt="Odara Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Categories Section */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="overflow-y-auto max-h-[50vh]">
          <ul className="space-y-2">
            {/* Popular Categories */}
            {['Category 1', 'Category 2', 'Category 3'].map((category, index) => (
              <li
                key={index}
                className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-300
                  ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <Category className={`mr-2 ${darkMode ? 'text-white' : 'text-black'}`} />
                <span>{category}</span>
              </li>
            ))}
          </ul>

          {/* Additional Categories */}
          {[...Array(8)].map((_, index) => (
            <li
              key={`additional-category-${index}`}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-300
                ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <Star className={`mr-2 ${darkMode ? 'text-white' : 'text-black'}`} />
              <span>{`Category ${index + 1}`}</span>
            </li>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t my-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>

      {/* Settings Section */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <ul className="space-y-2">
          {[
            { id: 'language', name: 'Language', icon: <Language /> },
            { id: 'location', name: 'Location', icon: <LocationOn /> },
            { id: 'settings', name: 'General Settings', icon: <Settings /> },
          ].map((setting) => (
            <li
              key={setting.id}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-300
                ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <span className={`mr-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                {setting.icon}
              </span>
              <span>{setting.name}</span>
            </li>
          ))}

          {/* Additional Settings */}
          {[
            { icon: <Help />, text: 'Help & Support' },
            { icon: <Info />, text: 'About' },
            { icon: <ContactMail />, text: 'Contact Us' },
          ].map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-300
                ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <span className={`mr-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                {item.icon}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
