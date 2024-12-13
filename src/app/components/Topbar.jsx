"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Search, PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import { MoonIcon, SunIcon } from "lucide-react";
import "tailwindcss/tailwind.css";
import AuthCard from "./Utils/AuthCard";

const Topbar = () => {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const [authCardVisible, setAuthCardVisible] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const languages = [
    { code: "en", name: "Eng", flag: "https://flagcdn.com/ng.svg" },
    { code: "fr", name: "Fr", flag: "https://flagcdn.com/ci.svg" },
    { code: "sw", name: "Sw", flag: "https://flagcdn.com/ke.svg" },
    { code: "am", name: "Am", flag: "https://flagcdn.com/et.svg" },
  ];

  return (
    <div className="bg-white text-black px-4 py-2 flex flex-col sm:flex-row items-center justify-between font-slab relative">
      {/* Desktop/Laptop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* ODARA Logo */}
        <div className="text-2xl font-bold">ODARA</div>

        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative w-[1000px] ml-[190px]">
            <input
              type="search"
              className="w-full rounded-md border border-solid border-gray-400 bg-white px-4 py-2 pr-10 text-base font-normal text-black placeholder:text-gray-500 placeholder:text-sm outline-none focus:ring-0 focus:border-gray-400"
              placeholder="Search for any products"
            />
            <div className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <Search className="text-gray-800" />
            </div>
          </div>

          <button
            className="bg-emerald-600 text-white rounded-md px-4 py-2 shadow-lg text-md font-medium transition duration-150 ease-in-out focus:outline-none"
            type="button"
          >
            SEARCH
          </button>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Sign In/Up Section */}
            <div
              className="relative flex items-center gap-2"
              onMouseEnter={() => setAuthCardVisible(true)}
              onMouseLeave={() => setAuthCardVisible(false)}
            >
              <IconButton aria-label="sign in/signup" className="text-gray-900">
                <PersonOutline className="text-black" fontSize="large" />
              </IconButton>
              <div className="flex flex-col items-start cursor-pointer">
                <span className="text-xs text-gray-600">Welcome</span>
                <span className="text-sm text-gray-800 font-bold">Sign in/Sign up</span>
              </div>

              {/* Auth Card */}
              {authCardVisible && (
                <div className="absolute top-full left-0 mt-2 z-10">
                  <AuthCard />
                </div>
              )}
            </div>

            {/* Cart Section */}
            <div className="flex items-center gap-2">
              <IconButton aria-label="cart" className="text-black">
                <ShoppingCartOutlined className="text-black" fontSize="large" />
              </IconButton>
              <div className="flex flex-col items-start">
                <span className="text-xs text-white w-7 text-center rounded-full bg-black">0</span>
                <span className="text-sm text-gray-800 cursor-pointer font-bold">Cart</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative flex items-center">
              <img
                src={languages.find((lang) => lang.code === language)?.flag}
                alt="Selected language flag"
                className="w-5 h-5 mr-2"
              />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 ease-in-out"
            >
              {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full">
        <div className="flex justify-between items-center mb-4 w-full">
          <div className="text-1xl font-bold">ODARA</div>
          
          {/* Mobile Icons Container */}
          <div className="flex items-center gap-2">
            <IconButton aria-label="sign in/signup" className="text-gray-900 p-1">
              <PersonOutline className="text-gray-600" fontSize="medium" />
            </IconButton>
            <IconButton aria-label="cart" className="text-gray-500 p-1">
              <ShoppingCartOutlined className="text-gray-600" fontSize="medium" />
            </IconButton>
            <button 
              onClick={toggleDarkMode} 
              className="p-1 rounded-full bg-emerald-500 text-white"
            >
              {darkMode ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="relative w-full">
          <input
            type="search"
            className="w-full rounded-full border border-solid border-gray-200 bg-gray-200 px-4 py-2 pr-10 text-base font-normal text-black placeholder:text-gray-500 placeholder:text-sm outline-none focus:ring-0 focus:border-gray-100"
            placeholder="Search for any products"
          />
          <div className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            <Search className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;