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
import "tailwindcss/tailwind.css";

const AuthCard = (props) => {
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
      className={`bg-white shadow-lg rounded-lg p-4 w-60 sm:w-72 ${className}`}
      style={style}
    >
      {/* Sign In and Register Buttons */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <button
          className="w-full w-90 bg-emerald-600 text-xl text-white py-2 rounded-full font-medium hover:bg-emerald-600"
        >
          Sign In
        </button>
       <h2 className="text-1xl">
         Register
       </h2>
      

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
          {index === 4 && <Divider className="my-2" />} {/* Divider after Wishlist */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AuthCard;
