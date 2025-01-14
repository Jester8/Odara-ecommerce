"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from "@mui/material";
import { 
  Smartphone as PhoneIcon, 
  Kitchen as ApplianceIcon, 
  LocalHospital as HealthIcon,
  Computer as ComputingIcon,
  HomeWork as HomeOfficeIcon,
  Memory as ElectronicsIcon,
  Checkroom as FashionIcon, 
  SportsEsports as GamingIcon, 
  Store as SupermarketIcon,
  MusicNote as MusicIcon,
  Toys as BabyIcon,
  ImageNotSupported as ImagePlaceholderIcon
} from "@mui/icons-material";
import { useDarkMode } from "../components/context/Darkmode";

const Carousel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [products.length]);

  const categories = [
    { icon: <PhoneIcon fontSize="small" className="text-black font-bold" />, name: "Phones & Tablets" },
    { icon: <ApplianceIcon fontSize="small" className="text-black font-bold" />, name: "Appliances" },
    { icon: <HealthIcon fontSize="small" className="text-black font-bold" />, name: "Health & Beauty" },
    { icon: <HomeOfficeIcon fontSize="small" className="text-black font-bold" />, name: "Home & Office" },
    { icon: <ElectronicsIcon fontSize="small" className="text-black font-bold" />, name: "Electronics" },
    { icon: <FashionIcon fontSize="small" className="text-black font-bold" />, name: "Fashion" },
    { icon: <SupermarketIcon fontSize="small" className="text-black font-bold" />, name: "Supermarket" },
    { icon: <ComputingIcon fontSize="small" className="text-black font-bold" />, name: "Computing" },
    { icon: <BabyIcon fontSize="small" className="text-black font-bold" />, name: "Baby Products" },
    { icon: <GamingIcon fontSize="small" className="text-black font-bold" />, name: "Gaming" },
    { icon: <MusicIcon fontSize="small" className="text-black font-bold" />, name: "Musical Instruments" },
  ];

  return (
    <div className="relative w-full h-[400px] overflow-hidden  hidden lg:flex">

      {/* Sidebar Section */}
      <div className="hidden md:block w-64 bg-transparent z-10 h-full mr-4">
        <Card className="w-full h-full">
          <CardContent className="p-0">
            <Typography variant="subtitle1" className="mb-2 font-bold text-sm px-4 pt-4">
              Categories
            </Typography>
            <List 
              dense 
              className="max-h-[calc(100%-50px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            >
              {categories.map((category, index) => (
                <ListItem key={index} className="hover:bg-gray-100 py-1 px-4">
                  <ListItemIcon className="min-w-[40px]">{category.icon}</ListItemIcon>
                  <ListItemText 
                    primary={category.name} 
                    primaryTypographyProps={{ 
                      variant: 'body2', 
                      className: 'whitespace-nowrap overflow-hidden text-ellipsis font-semibold'
                    }}
                    className="ml-[-20px]"  
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>

      {/* Carousel Section */}
      <div className="relative flex-grow h-full w-full md:w-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <ImagePlaceholderIcon 
                    className="text-gray-500" 
                    style={{ fontSize: '4rem' }} 
                  />
                </div>
              )}
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority={index === 0}
                className={`object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </div>
        ))}

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-red-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileCarousel = () => {
  const phones = [
    { id: 1, name: "iPhone 5", price: "$199", imageUrl: "https://picsum.photos/id/1/400/200" },
    { id: 2, name: "iPhone 6", price: "$299", imageUrl: "https://picsum.photos/id/2/400/200" },
    { id: 3, name: "iPhone 7", price: "$399", imageUrl: "https://picsum.photos/id/3/400/200" },
    { id: 4, name: "iPhone 8", price: "$499", imageUrl: "https://picsum.photos/id/4/400/200" },
    { id: 5, name: "iPhone X", price: "$599", imageUrl: "https://picsum.photos/id/5/400/200" },
    { id: 6, name: "iPhone 11", price: "$699", imageUrl: "https://picsum.photos/id/6/400/200" },
    { id: 7, name: "iPhone 12", price: "$799", imageUrl: "https://picsum.photos/id/7/400/200" },
    { id: 8, name: "iPhone 13", price: "$899", imageUrl: "https://picsum.photos/id/8/400/200" },
    { id: 9, name: "iPhone 14", price: "$999", imageUrl: "https://picsum.photos/id/9/400/200" },
    { id: 10, name: "iPhone 15", price: "$1099", imageUrl: "https://picsum.photos/id/10/400/200" },
    { id: 11, name: "iPhone 16", price: "$1199", imageUrl: "https://picsum.photos/id/11/400/200" },
  ];

  return (
    <div className="block lg:hidden mt-1">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 p-2" style={{ width: 'max-content' }}>
          {phones.map((phone) => (
            <div key={phone.id} className="flex-shrink-0" style={{ width: '400px', height: '200px' }}>
              <div className="relative w-full h-full">
                <Image
                  src={phone.imageUrl}
                  alt={phone.name}
                  fill
                  className="object-cover rounded-sm"
                />
                <div className="absolute bottom-2 left-2 text-white">
                  <Typography variant="caption" className="font-bold">
                    {phone.name}
                  </Typography>
                  <Typography variant="caption" className="block">
                    {phone.price}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const exampleProducts = Array.from({ length: 10 }, (_, id) => ({
  id,
  name: `Product ${id + 1}`,
  imageUrl: `https://picsum.photos/id/${id + 10}/600/400`,
}));

export default function App() {
  return (
    <div>
      <Carousel products={exampleProducts} />
      <MobileCarousel />
    </div>
  );
}
