"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, User, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import auth from "../assets/img/auth.jpg";
import logo from "../assets/img/Odara invert.png";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Signup = () => {
  const router = useRouter();
  const [dob, setDob] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      {/* Updated logo container with mobile-specific positioning and scaling */}
      <div className="w-full py-4 sm:py-4 flex justify-center sm:justify-start px-4 sm:px-8 sm:static absolute">
        <div className="sm:transform-none transform scale-40 sm:scale-100">
          <Image
            src={logo}
            alt="Odara Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        {/* Rest of the component remains the same */}
        <div className="bg-white rounded-lg shadow-sm flex flex-col sm:flex-row w-full max-w-6xl overflow-hidden">
          <div className="w-full sm:w-1/2 p-4 sm:p-8">
            {/* Previous code remains identical from here onwards */}
            {currentStep === 1 && (
              <>
                <div className="mb-6 sm:mb-8 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create Your Account</h2>
                  <p className="text-gray-600 mt-2">
                    Welcome to Odara. Please create your account to get started.
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        id="firstName"
                        className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
                        placeholder="Enter your first name"
                      />
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        id="lastName"
                        className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
                        placeholder="Enter your last name"
                      />
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <select
                        className="px-2 py-3 sm:py-2 bg-gray-100 border-r border-gray-300 focus:outline-none text-base"
                      >
                        <option value="+234">🇳🇬 NG</option>
                        <option value="+228">🇹🇬 TG</option>
                        <option value="+233">🇬🇭 GH</option>
                      </select>
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="w-full pl-10 pr-4 py-3 sm:py-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
                          placeholder="Enter your phone number"
                        />
                        <Phone
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
      <label
        htmlFor="dob"
        className="block text-sm font-medium text-gray-700"
      >
        Date Of Birth
      </label>
      <div className="mt-1 relative">
        <DatePicker
          selected={dob}
          onChange={(date) => setDob(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select your date of birth"
           className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
        />
        <Calendar
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
    </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="w-1/3 bg-orange-500 text-white py-3 sm:py-2 px-4 rounded-md hover:bg-orange-400 transition duration-200 text-base"
                onClick={() => router.push("/signin")}

                    >
                      Skip
                    </button>
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="w-1/3 bg-purple-900 text-white py-3 sm:py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200 text-base"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="mb-6 sm:mb-8 text-center sm:text-left flex items-center justify-between">
                  <button
                    onClick={handleBack}
                    className="bg-white p-2 rounded-full shadow-lg flex items-center justify-center"
                  >
                    <ArrowLeft size={24} className="text-gray-700" />
                  </button>
                </div>

                <form className="space-y-4 sm:space-y-6">
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
                        className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
                        placeholder="Email address"
                      />
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

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
                        className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
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

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-base"
                        placeholder="Confirm Password"
                      />
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-900 text-white py-3 sm:py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200 text-base"
                  >
                    Create Your Account
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-700">
                    By clicking the Signup button, you accept the
                    <span className="text-purple-700 font-medium"> Terms and Conditions </span>
                    of Odara.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="hidden sm:block sm:w-1/2 relative h-[600px]">
            <Image
              src={auth}
              alt="Authentication"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;