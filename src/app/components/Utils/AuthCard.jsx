"use client";

import React from "react";
import { Divider } from "@mui/material";
import {
  LocalMallOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  PaymentOutlined,
  FavoriteBorderOutlined,
  SettingsOutlined,
  PrivacyTipOutlined,
} from "@mui/icons-material";
import { LogIn } from "lucide-react";
import Link from "next/link"; 
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";

const AuthCard = (props) => {
  const router = useRouter();

  const {
    style,
    className = "",
    data = [
      { icon: <LocalMallOutlined />, label: "My Orders" },
      { icon: <MessageOutlined />, label: "Messages" },
      { icon: <ShoppingCartOutlined />, label: "Carts" },
      { icon: <PaymentOutlined />, label: "Payment Options" },
      { icon: <FavoriteBorderOutlined />, label: "Wishlist" },
      { icon: <SettingsOutlined />, label: "Settings" },
      { icon: <LogIn />, label: "Vendor Login" },
      { icon: <PrivacyTipOutlined />, label: "Privacy Policy" },
    ],
  } = props;

  return (
    <div
      className={`bg-white shadow-lg rounded-none p-4 w-60 sm:w-72 ${className}`}
      style={style}
    >
      {/* Sign In and Register Buttons */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <Link href="/signin">
        <button
                type="submit"
                className="w-[250px] bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-800 transition duration-200"
              >
                Sign in
              </button>
        </Link>
        <button
                type="submit"
                className="w-[250px] bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-200"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </button>
      </div>
  

      {/* Menu Items */}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className="flex items-center gap-4 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <div className="text-gray-700">{item.icon}</div>
            <div className="text-sm font-medium text-gray-800 hover:text-emerald-500">
              {item.label}
            </div>
          </div>
          {index === 4 && <Divider className="my-2" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AuthCard;
