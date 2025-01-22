"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "../app/components/context/Darkmode";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Loader from "../app/components/ui/Loader";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Check if the current route is '/signup'
  const isSignupPage = pathname === "/signup";

  return (
    <html lang="en">
      <body
        className={`${inter.className} transition-colors duration-300 ease-in-out`}
      >
        <DarkModeProvider>
          <div className="min-h-screen bg-gray-100 text-black dark:bg-black dark:text-white">
            {loading ? (
              <Loader />
            ) : (
              <>
                {!isSignupPage && <Topbar />}
                {children}
                {!isSignupPage && <Footer />}
              </>
            )}
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
