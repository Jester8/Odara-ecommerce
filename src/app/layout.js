"use client";
import React, { useState, useEffect } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "../app/components/context/Darkmode";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Loader from "../app/components/ui/Loader";
import { usePathname } from "next/navigation";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
});
;

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const isAuthPage = pathname === "/signin" || pathname === "/signup" || pathname === "/reset" || pathname === "/confirm" || pathname === "/New";

  return (
    <html lang="en">
           <body className={`${bricolage.className} transition-colors duration-300 ease-in-out`}>
        <DarkModeProvider>
          <div className="min-h-screen bg-gray-100 text-black dark:bg-black dark:text-white">
            {loading ? (
              <Loader />
            ) : (
              <>
                {!isAuthPage && <Topbar />}
                {children}
                {!isAuthPage && <Footer />}
              </>
            )}
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}