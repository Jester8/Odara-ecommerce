"use client";

import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Menu as MuiMenu,
  MenuItem,
} from "@mui/material";
import {
  Search,
  PersonOutline,
  ShoppingCartOutlined,
  Menu,
  HelpOutline,
  KeyboardArrowDown,
} from "@mui/icons-material";
import * as lucideReact from "lucide-react";
import "tailwindcss/tailwind.css";
import AuthCard from "./Utils/AuthCard";
import { Sidebar } from "./Sidebar";
import { useDarkMode } from "../components/context/Darkmode";
import lightlogo from '../assets/img/Odara png.png'
import darklogo from "../assets/img/Odara invert.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [language, setLanguage] = useState("ng");
  const [authCardVisible, setAuthCardVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showLanguages, setShowLanguages] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLanguages(false);
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

  const navigateToSignin = () => {
    router.push('/signin');
  };

  const languages = [
    { code: "ng", name: "NG", fullName: "Nigeria", flag: "https://flagcdn.com/ng.svg" },
    { code: "za", name: "ZA", fullName: "South Africa", flag: "https://flagcdn.com/za.svg" },
    { code: "ke", name: "KE", fullName: "Kenya", flag: "https://flagcdn.com/ke.svg" },
    { code: "gh", name: "GH", fullName: "Ghana", flag: "https://flagcdn.com/gh.svg" },
    { code: "eg", name: "EG", fullName: "Egypt", flag: "https://flagcdn.com/eg.svg" },
    { code: "ma", name: "MA", fullName: "Morocco", flag: "https://flagcdn.com/ma.svg" },
    { code: "tz", name: "TZ", fullName: "Tanzania", flag: "https://flagcdn.com/tz.svg" },
    { code: "et", name: "ET", fullName: "Ethiopia", flag: "https://flagcdn.com/et.svg" },
    { code: "ci", name: "CI", fullName: "Côte d'Ivoire", flag: "https://flagcdn.com/ci.svg" },
    { code: "sn", name: "SN", fullName: "Senegal", flag: "https://flagcdn.com/sn.svg" },
  ];

  // Find current language
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
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
                  className={`w-full rounded-full border border-solid   ${
                    darkMode
                      ? "border-gray-200 bg-gray-700 text-white  placeholder:text-gray-400"
                      : "border-none bg-gray-100 text-black placeholder:text-gray-500"
                  } px-4 py-2 pr-10 text-base font-normal outline-none focus:ring-0`}
                  placeholder="Search for any products"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <Search
                    className={darkMode ? "text-gray-200" : "text-gray-800"}
                  />
                </div>
              </div>
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
                  onClick={navigateToSignin}
                >
                  <PersonOutline
                    className={darkMode ? "text-white" : "text-black"}
                    fontSize="medium"
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
                      darkMode ? "text-gray-200" : "text-black"
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
                    fontSize="medium"
                  />
                </IconButton>
                <div className="hidden lg:flex flex-col items-start">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-black bg-white" : "text-white bg-black"
                    } w-6 text-center rounded-full`}
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
              
              {/* Support */}
              <div className="hidden md:flex items-center space-x-1 cursor-pointer">
                <IconButton
                  aria-label="support"
                  className={darkMode ? "text-gray-200" : "text-gray-900"}
                >
                  <HelpOutline
                    className={darkMode ? "text-white" : "text-black"}
                    fontSize="medium"
                  />
                </IconButton>
                <div className="hidden lg:flex flex-col items-start">
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } font-bold`}
                  >
                    Support
                  </span>
                </div>
              </div>
              
              {/* Dark Mode Toggle */}
              {/* <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full ${
                  darkMode ? "bg-purple-900" : "bg-purple-900"
                } text-white`}
              >
                {darkMode ? <lucideReact.SunIcon size={16} /> : <lucideReact.MoonIcon size={16} />}
              </button> */}
              
              {/* Language Selector - Hover style */}
              <div className="relative">
                <div 
                  className="flex items-center space-x-2 cursor-pointer p-1"
                  onMouseEnter={() => setShowLanguages(true)}
                  onMouseLeave={() => setShowLanguages(false)}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full overflow-hidden border-2 border-gray-100 flex items-center justify-center">
                      <img 
                        src={currentLanguage.flag} 
                        alt={currentLanguage.fullName}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <span className={`text-sm  font-bold hidden md:block ${darkMode ? "text-gray-200" : "text-gray-800"} font-boldd`}>
                      {currentLanguage.name}
                    </span>
                  </div>
                  
                  {/* Hover dropdown */}
                  {showLanguages && (
                    <div className={`absolute top-full right-0 mt-2 ${darkMode ? "bg-gray-700" : "bg-white"} shadow-lg rounded-lg p-2 z-20 w-48`}>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <div 
                            key={lang.code} 
                            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${lang.code === language ? (darkMode ? "bg-gray-600" : "bg-gray-100") : ""} hover:${darkMode ? "bg-gray-600" : "bg-gray-100"}`}
                            onClick={() => handleLanguageChange(lang.code)}
                          >
                            <div className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center">
                              <img 
                                src={lang.flag} 
                                alt={lang.fullName}
                                className="h-full w-full object-cover" 
                              />
                            </div>
                            <span className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                              {lang.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          <div className="flex justify-between items-center mb-4 w-full">
            <div className="text-1xl font-bold flex items-center">
              <IconButton className="mr-2 block sm:hidden md:block lg:hidden" onClick={toggleSidebar}>
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
                onClick={navigateToSignin}
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
              {/* Dark Mode Toggle in Mobile */}
              {/* <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full ${
                  darkMode ? "bg-purple-700" : "bg-purple-700"
                } text-white`}
              >
                {darkMode ? <lucideReact.SunIcon size={16} /> : <lucideReact.MoonIcon size={16} />}
              </button> */}
              
              {/* Mobile Language Selector with hover */}
              <div className="relative">
                <div 
                  className="cursor-pointer"
                  onMouseEnter={() => setShowLanguages(true)}
                  onMouseLeave={() => setShowLanguages(false)}
                >
                  <div className="h-6 w-6 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
                    <img 
                      src={currentLanguage.flag} 
                      alt={currentLanguage.fullName}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  
                  {/* Mobile Hover dropdown */}
                  {showLanguages && (
                    <div className={`absolute top-full right-0 mt-2 ${darkMode ? "bg-gray-700" : "bg-white"} shadow-lg rounded-lg p-2 z-20 w-40`}>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <div 
                            key={lang.code} 
                            className={`flex items-center gap-2 p-1 rounded-md cursor-pointer ${lang.code === language ? (darkMode ? "bg-gray-600" : "bg-gray-100") : ""} hover:${darkMode ? "bg-gray-600" : "bg-gray-100"}`}
                            onClick={() => handleLanguageChange(lang.code)}
                          >
                            <div className="h-5 w-5 rounded-full overflow-hidden flex items-center justify-center">
                              <img 
                                src={lang.flag} 
                                alt={lang.fullName}
                                className="h-full w-full object-cover" 
                              />
                            </div>
                            <span className={`text-xs ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                              {lang.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
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