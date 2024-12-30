"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ChevronLeft, ShoppingCart, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [showPopup, setShowPopup] = useState(false);
  const { theme } = useTheme();
  
  const images = [
    `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/400`,
    `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/400`,
    `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/400`,
    `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/400`,
    `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/400`,
    `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/400`
  ];

  const specifications = [
    { label: "Brand", value: "KILIAN ETHAN" },
    { label: "Model", value: "Rotary Hammer Drill" },
    { label: "Power Source", value: "Cordless" },
    { label: "Voltage", value: "20V" },
    { label: "Chuck Size", value: "10mm" },
    { label: "Battery Type", value: "Lithium-Ion" }
  ];

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-2 z-50">
          <span>Product added to cart successfully!</span>
          <button onClick={() => setShowPopup(false)} className="text-white">
            <X size={20} />
          </button>
        </div>
      )}

      <Link href="/" className="inline-flex items-center text-red-700 mb-4 hover:text-red-600">
        <ChevronLeft size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Product Images */}
          <div className="md:w-1/2">
            <div className="relative aspect-square mb-4">
              <img
                src={images[selectedImage]}
                alt="KILIAN ETHAN Drill"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`aspect-square relative border rounded cursor-pointer ${
                    selectedImage === index ? 'border-red-700' : 'border-gray-200 dark:border-gray-700'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="md:w-1/2">
            <div className="relative">
              <Heart className="absolute right-0 top-0 text-gray-400 cursor-pointer" />
              <h1 className="text-xl font-medium mb-2 dark:text-white">
                KILIAN ETHAN Rotary Hammer Drill Cordless Screwdriver 10mm And Tools
              </h1>
              <div className="text-sm mb-4 dark:text-gray-300">
                <span>Brand: </span>
                <Link href="#" className="text-red-700 hover:text-red-600">KILIAN ETHAN</Link>
                <span> | </span>
                <Link href="#" className="text-red-700 hover:text-red-600">
                  Similar products from KILIAN ETHAN
                </Link>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold dark:text-white">₦ 53,000</span>
                <span className="text-gray-500 line-through">₦ 64,000</span>
                <span className="text-orange-500">-17%</span>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>In stock</p>
                <p>+ shipping from ₦ 1,080 to LEKKI-AJAH (SANGOTEDO)</p>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={star <= 3 ? "text-yellow-400" : "text-gray-300"}
                    size={20}
                    fill={star <= 3 ? "currentColor" : "none"}
                  />
                ))}
                <span className="text-sm text-gray-500 dark:text-gray-400">(4 verified ratings)</span>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-red-700 hover:bg-red-600 text-white py-3 rounded-full mb-6 font-bold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to cart
              </button>

              <div className="space-y-4">
                <h3 className="font-medium dark:text-white">PROMOTIONS</h3>
                <div className="space-y-2">
                  {[
                    "Call 07006000000 To Place Your Order",
                    "Need extra money? Loan up to N500,000 on the Odara Android app.",
                    "Enjoy cheaper shipping fees when you select a PickUp Station at checkout."
                  ].map((promo, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 flex-shrink-0">⭐</span>
                      <Link href="#" className="text-red-700 hover:text-red-600 dark:text-red-400">
                        {promo}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link href="#" className="text-red-700 text-sm hover:text-red-600 dark:text-red-400">
                  Report incorrect product information
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description and Specifications Tabs */}
        <div className="mt-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex space-x-8">
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'description'
                    ? 'border-red-700 text-red-700 dark:text-red-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'specifications'
                    ? 'border-red-700 text-red-700 dark:text-red-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'description' ? (
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300">
                  The KILIAN ETHAN Rotary Hammer Drill is a versatile and powerful cordless tool designed for both professional contractors and DIY enthusiasts. This 20V drill features a 10mm chuck size and comes with a complete set of accessories for various drilling and screwdriving applications. The ergonomic design and lithium-ion battery ensure comfortable extended use and reliable performance.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="py-4 text-sm font-medium text-gray-900 dark:text-white w-1/3">{spec.label}</td>
                        <td className="py-4 text-sm text-gray-500 dark:text-gray-400">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 