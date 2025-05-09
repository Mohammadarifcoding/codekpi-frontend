"use client";
import { FaTruckMoving, FaBoxOpen, FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {useGetMyTransactionQuery } from "@/components/Redux/services/transactionApi";
import MyTransactionsView from "./MyTransactionsView";


const Transactions = () => {
    const { data, isLoading } = useGetMyTransactionQuery();
    // console.log(data?.data)
    const transactionColumns = [
      { label: "Transaction ID", key: "transactionId" },
      { label: "Date", key: "date" },
      { label: "Amount", key: "amount" },
      { label: "Status", key: "status", type: "button" },
      { label: "Details", key: "details", type: "button" },
    ];
    return (
        <MyTransactionsView
        loading={isLoading}
        title={"My Transactions"}
        data={data?.data || []}
        tabOptions={[
          { name: "All", icon: <FaTruckMoving /> },
          { name: "Pending", icon: <FaTruckMoving /> },
          { name: "Rejected", icon: <RxCross2 />, className: "text-red-400" },
          { name: "Delivered", icon: <FaBoxOpen /> },
          // { name: "Returns", icon: <GiReturnArrow /> },
          { name: "Payment reviewing", icon: <FaShoppingBag /> },
        ]}
        myTransactionColumns={transactionColumns}
        filterOptions={[
          "pending",
          "rejected",
          "delivered",
          "payment reviewing",
        ]}
        tabEnabled={true}
        type={"transaction"}
      />
    );
};

export default Transactions;