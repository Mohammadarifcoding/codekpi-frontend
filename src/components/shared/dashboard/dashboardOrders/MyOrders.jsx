"use client";
import { FaTruckMoving, FaBoxOpen, FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import OrdersView from "./OrdersView";
import { useGetCheckoutQuery } from "@/components/Redux/services/checkout/checkoutAPi";

const MyOrders = () => {
  const { data } = useGetCheckoutQuery();
  const orderColumns = [
    { label: "Price", key: "price" },
    { label: "District", key: "district" },
    { label: "TransactionId", key: "TransactionId" },
    { label: "Status", key: "Status" },
    { label: "Details", key: "details", type: "button" },
  ];
  return (
    <div>
      <OrdersView
        title={"My Orders"}
        data={data?.data || []}
        tabOptions={[
          { name: "All", icon: <FaTruckMoving /> },
          { name: "pending payment", icon: <FaTruckMoving /> },
          { name: "Failed", icon: <RxCross2 />, className: "text-red-400" },
          { name: "Completed", icon: <FaBoxOpen /> },
          // { name: "Returns", icon: <GiReturnArrow /> },
          { name: "Deliverd", icon: <FaShoppingBag /> },
        ]}
        ordersColumns={orderColumns}
        filterOptions={["pending payment", "failed", "completed", "delivered"]}
        searchPlaceholder={"Filter By Status"}
        tabEnabled={true}
        type={"orders"}
      />
    </div>
  );
};

export default MyOrders;
