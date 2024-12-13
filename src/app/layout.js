import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import "./globals.css";
import { Roboto_Slab } from "next/font/google";

export const metadata = {
  title: "Odara - Irorun tide",
  description: "Irorun tide",
};
  
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoSlab.variable}>
      <body className="font-slab">
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
