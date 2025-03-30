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
      className={`bg-white shadow-md rounded-none p-4 w-40 sm:w-52 ${className}`}
      style={style}
    >
     
 
  

      {/* Menu Items */}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className="flex items-center gap-4 py-2 px-1 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <div className="text-gray-700">{item.icon}</div>
            <div className="text-sm font-medium text-gray-800 hover:text-purple-500">
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
