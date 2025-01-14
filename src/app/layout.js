// Add "use client" to indicate this component uses client-side functionality like useState
"use client";

import React, { useState, useEffect } from 'react'; // Import React hooks
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "../app/components/context/Darkmode";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Loader from '../app/components/ui/Loader'; // Import the Loader component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  // Simulate loading state (you can replace this with actual loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <html lang="en">
      <body 
        className={`${inter.className} transition-colors duration-300 ease-in-out`}
      >
        <DarkModeProvider>
          <div className="min-h-screen bg-gray-100 text-black dark:bg-black dark:text-white">
            {loading ? (
              <Loader /> // Show the loader while loading is true
            ) : (
              <>
                <Topbar />
                {children} {/* Render the page content */}
                <Footer />
              </>
            )}
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
