import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoMdReorder } from "react-icons/io";
import { CiBadgeDollar } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";


const DashboardData = [
  {
    title: "Genaral",
    routesUserData: [
      { route: "/dashboard/order", name: "My Order", icon: <IoMdReorder/>},
      { route: "/dashboard/wishlist", name: "My Wishlist", icon: <MdFavoriteBorder />},
      { route: "/dashboard/wallet", name: "Wallet", icon: <CiWallet />},
      { route: "/dashboard/transaction", name: "Transaction", icon: <CiWallet />},
      { route: "/dashboard/order-details", name: "Order-Details", icon: <CiLocationOn />},
      { route: "/dashboard/profile", name: "Profile info", icon: <GoPerson />},
      { route: "/dashboard/point", name: "Point", icon: <CiBadgeDollar />},
    ],
  },
  {
    title: "Genaral",
    routesAdminData: [
      { route: "/dashboard/all-transactions", name: "All Transactions", icon: <CiWallet />}, 
      { route: "/dashboard/all-order", name: "All Order", icon: <IoMdReorder/>}, 
      { route: "/dashboard/all-products", name: "All Products", icon: <IoMdReorder/>},
      { route: "/dashboard/add-category", name: "Add Category", icon: <BiCategory/>},
      { route: "/dashboard/add-coupon", name: "Add Coupon", icon: <BiCategory/>},
      { route: "/dashboard/support", name: "Support", icon: <MdSupportAgent />
      },
    ],
  },
];


export default DashboardData;
