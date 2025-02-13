"use client";
import Image from "next/image";
import React from "react";
import { Mail } from "lucide-react";
import auth from "../assets/img/forgot.webp";
import logo from "../assets/img/Odara invert.png";
import Link from "next/link";

const Reset = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col relative">
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
        <div className="bg-white rounded-lg shadow-sm flex flex-col sm:flex-row w-full max-w-6xl overflow-hidden relative">
         
          
          <div className="w-full sm:w-1/2 p-8 flex flex-col items-center justify-center">
            <div className="mb-9 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Forgot Password</h2>
              <p className="text-gray-600 mt-2">
                Please enter your email address to reset your password.
              </p>
            </div>

            <form className="space-y-6 w-full max-w-md">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1 relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="Enter Your Email address"
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-purple-800 text-white py-2 px-5 rounded-md hover:bg-purple-800 transition duration-200"
              >
                Reset Password
              </button>
              
              <p className="text-center text-gray-600">
                Don't have an account? <Link href="/signup" className="text-purple-500 hover:underline">Sign Up</Link>
              </p>
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

export default Reset;