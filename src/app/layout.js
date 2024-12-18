import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "../app/components/context/Darkmode";
import Topbar from "./components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Odara - Irorun tide",
  description: "Your ultimate shopping companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} transition-colors duration-300 ease-in-out`}
      >
        <DarkModeProvider>
          <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <Topbar />
            {children}
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}