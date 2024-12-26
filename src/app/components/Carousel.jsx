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
    <div className="relative w-full h-[400px] overflow-hidden flex">
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
      <div className="relative flex-grow h-full">
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

// Example usage with Picsum images
const exampleProducts = Array.from({ length: 10 }, (_, id) => ({
  id,
  name: `Product ${id + 1}`,
  imageUrl: `https://picsum.photos/id/${id + 10}/600/400`,
}));

export default function App() {
  return <Carousel products={exampleProducts} />;
}
