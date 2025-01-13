"use client";

import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  Search,
  PersonOutline,
  ShoppingCartOutlined,
  Menu,
} from "@mui/icons-material";
import { MoonIcon, SunIcon } from "lucide-react";
import "tailwindcss/tailwind.css";
import AuthCard from "./Utils/AuthCard";
import { Sidebar } from "./Sidebar";
import { useDarkMode } from "../components/context/Darkmode";
import lightlogo from '../assets/img/Odara png.png'
import darklogo from "../assets/img/Odara invert.png"
import Image from 'next/image';


const mockData = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Shirts" },
  { id: 6, name: "Smartwatch" },
  { id: 7, name: "Bag" },
  { id: 8, name: "Furniture" },
];

const Topbar = () => {
  const [language, setLanguage] = useState("en");
  const [authCardVisible, setAuthCardVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = mockData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setResults(filteredResults);
  };

  const handleButtonClick = () => {
    alert(`Searching for "${query}"`);
  };

  const languages = [
    { code: "en", name: "Eng", flag: "https://flagcdn.com/ng.svg" },
    { code: "fr", name: "Fr", flag: "https://flagcdn.com/ci.svg" },
    { code: "sw", name: "Sw", flag: "https://flagcdn.com/ke.svg" },
    { code: "am", name: "Am", flag: "https://flagcdn.com/et.svg" },
  ];

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black shadow-md"
        } px-4 py-2 flex flex-col sm:flex-row items-center justify-between font-slab relative`}
      >
        {/* Desktop/Laptop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold min-w-max mr-4">
          <Image 
    src={darkMode ? lightlogo : darklogo}
    alt="Odara Logo"
    width={120}
    height={40}
    className="object-contain"
  />
            </div>

          <div className="flex items-center w-full space-x-4">
            {/* Search Input Container */}
            <div className="flex-grow flex items-center space-x-2 max-w-[800px] mx-auto relative">
              <div className="relative w-full">
                <input
                  type="search"
                  value={query}
                  onChange={handleSearch}
                  className={`w-full rounded-md border border-solid ${
                    darkMode
                      ? "border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
                      : "border-gray-400 bg-white text-black placeholder:text-gray-500"
                  } px-4 py-2 pr-10 text-base font-normal outline-none focus:ring-0`}
                  placeholder="Search for any products"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <Search
                    className={darkMode ? "text-gray-200" : "text-gray-800"}
                  />
                </div>
              </div>

              <button
                className={`min-w-max ${
                  darkMode
                    ? "bg-red-800 text-white"
                    : "bg-red-800 text-white"
                } rounded-md px-4 py-2 shadow-lg text-md font-medium transition duration-150 ease-in-out focus:outline-none`}
                onClick={handleButtonClick}
              >
                SEARCH
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 lg:space-x-4 md:space-x-2">
              <div
                className="relative flex items-center space-x-2 md:space-x-0"
                onMouseEnter={() => setAuthCardVisible(true)}
                onMouseLeave={() => setAuthCardVisible(false)}
              >
                <IconButton
                  aria-label="sign in/signup"
                  className={darkMode ? "text-gray-200" : "text-gray-900"}
                >
                  <PersonOutline
                    className={darkMode ? "text-white" : "text-black"}
                    fontSize="large"
                  />
                </IconButton>
                <div className="hidden lg:flex flex-col items-start cursor-pointer">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Welcome
                  </span>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } font-bold`}
                  >
                    Sign in/Sign up
                  </span>
                </div>
                {authCardVisible && (
                  <div className="absolute top-full left-0 mt-2 z-10">
                    <AuthCard />
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2 md:space-x-0">
                <IconButton
                  aria-label="cart"
                  className={darkMode ? "text-white" : "text-black"}
                >
                  <ShoppingCartOutlined
                    className={darkMode ? "text-white" : "text-black"}
                    fontSize="large"
                  />
                </IconButton>
                <div className="hidden lg:flex flex-col items-start">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-black bg-white" : "text-white bg-black"
                    } w-7 text-center rounded-full`}
                  >
                    0
                  </span>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } cursor-pointer font-bold`}
                  >
                    Cart
                  </span>
                </div>
              </div>

              <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full ${
                  darkMode ? "bg-red-800" : "bg-red-800"
                } text-white`}
              >
                {darkMode ? <SunIcon size={16} /> : <MoonIcon size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          <div className="flex justify-between items-center mb-4 w-full">
          <div className="text-1xl font-bold flex items-center">
  <IconButton className="mr-2  block sm:hidden md:block lg:hidden" onClick={toggleSidebar}>
    <Menu className={darkMode ? "text-white" : "text-black"} />
  </IconButton>
  <Image 
    src={darkMode ? lightlogo : darklogo}
    alt="Odara Logo"
    width={100}
    height={35}
    className="object-contain mb-2"
  />
</div>
            <div className="flex items-center gap-2">
              <IconButton
                aria-label="sign in/signup"
                className={darkMode ? "text-white" : "text-gray-900"}
              >
                <PersonOutline
                  className={darkMode ? "text-white" : "text-gray-600"}
                  fontSize="medium"
                />
              </IconButton>
              <IconButton
                aria-label="cart"
                className={darkMode ? "text-white" : "text-gray-500"}
              >
                <ShoppingCartOutlined
                  className={darkMode ? "text-white" : "text-gray-600"}
                  fontSize="medium"
                />
              </IconButton>
              <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full ${
                  darkMode ? " bg-red-700" :  "bg-red-700"
                } text-white`}
              >
                {darkMode ? <SunIcon size={16} /> : <MoonIcon size={16} />}
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              value={query}
              onChange={handleSearch}
              className={`w-full rounded-full border border-solid ${
                darkMode
                  ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                  : "border-gray-200 bg-gray-200 text-black placeholder:text-gray-500"
              } px-4 py-2 pr-10 text-base font-normal outline-none focus:ring-0`}
              placeholder="Search for any products"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <Search
                className={darkMode ? "text-gray-300" : "text-gray-500"}
              />
            </div>
          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Topbar;
