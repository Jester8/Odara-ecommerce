"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import auth from "../assets/img/hausa.webp";
import logo from "../assets/img/Odara invert.png";
import Link from "next/link";

const Confirm = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError("");

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");

    if (enteredCode.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    
    console.log("Code entered:", enteredCode);
    // Add authentication logic here (API call, verification, etc.)
  };

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
           
            <div className="mb-9 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Confirm Code</h2>
              <p className="text-gray-600 mt-2">
                Enter the 6 digit code sent to {" "}
                <span className="text-purple-800 font-bold">
                  Samuelolu407@gmail.com
                </span>
              </p>
            </div>
            <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none text-lg"
                    placeholder="*"
                  />
                ))}
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-2 px-5 rounded-md hover:bg-purple-800 transition duration-200"
              >
                Reset Password
              </button>
              <div>
                <p className="text-center text-gray-600">
                  Already have an account? {" "}
                  <Link href="/signin" className="text-purple-500 hover:underline">
                    Sign in
                  </Link>
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

export default Confirm;
