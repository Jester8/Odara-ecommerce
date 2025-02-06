"use client";
import Image from "next/image";
import React, { useState } from "react";
import auth from "../assets/img/yoruba.webp";
import { ArrowLeft, Eye, EyeOff, Lock } from "lucide-react";
import logo from "../assets/img/Odara invert.png";
import Link from "next/link";

const New = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      <div className="w-full py-4 flex justify-center sm:justify-start px-4 sm:px-8">
        <Image
          src={logo}
          alt="Odara Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-sm flex flex-col sm:flex-row w-full max-w-6xl overflow-hidden">
          <div className="w-full sm:w-1/2 p-8 flex flex-col items-center justify-center relative">
            <Link 
              href="/confirm" 
              className="absolute left-8 top-8 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft size={24} />
            </Link>
            
            <div className="mb-9 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
              <p className="text-gray-600 mt-2">
                Enter your new password and confirm it.
              </p>
            </div>
            <form className="space-y-6 w-full max-w-md">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-gray-400"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-2 px-5 rounded-md hover:bg-purple-800 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="hidden sm:block sm:w-1/2 relative h-[600px]">
            <Image
              src={auth}
              alt="Authentication"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
