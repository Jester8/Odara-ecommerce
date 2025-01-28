"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import auth from "../assets/img/auth1.png";
import logo from "../assets/img/Odara invert.png";
import google from "../assets/img/google.png";
import Link from "next/link";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          <div className="w-full sm:w-1/2 p-8">
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 mt-2">
                Welcome back to Odara. Please sign in to continue.
              </p>
            </div>

            <form className="space-y-6">
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
                    placeholder="Email address"
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="Enter Password"
                  />
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-md text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2 rounded focus:ring focus:ring-purple-300"
                  />
                  Remember Me
                </label>
                <Link href="reset" className="text-purple-500 hover:underline"> <p>Forgot Password</p></Link>
              </div>

             
          
             
              <button
                type="button"
                className="w-full bg-purple-900 text-white py-3 px-5 rounded-md hover:bg-purple-800 transition duration-200"
              >
                Sign In
              </button>


              
              <button
                type="button"
                className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-white hover:bg-gray-100 transition duration-200"
              >

<Image
                  src={google}
                  alt="Google Logo"
                  width={30}
                  height={40}
                  className="object-contain"
                />
               
                Sign in with Google
              </button>
              <div>

<p className="text-center text-gray-600">
  Don't have an account? <Link href="/signup" className="text-purple-500 hover:underline">Sign Up</Link>
  </p>
</div>

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

export default Signin;
