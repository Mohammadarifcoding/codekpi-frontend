"use client";
import { FaTruckMoving, FaBoxOpen, FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useGetAllTransactionQuery } from "@/components/Redux/services/transactionApi";
import AllTransactionsView from "./AllTransactionsView";


const AllTransactions = () => {
    const { data, isLoading } = useGetAllTransactionQuery();
    // console.log(data?.data)
    const AllTransactionColumns = [
      { label: "Transaction ID", key: "transactionId" },
      { label: "Date", key: "date" },
      { label: "Amount", key: "amount" },
      { label: "Status", key: "status", type: "button" },
      // { label: "Details", key: "details", type: "button" },
    ];
    return (
        <AllTransactionsView
        loading={isLoading}
        title={"All Transactions"}
        data={data?.data || []}
        tabOptions={[
          { name: "All", icon: <FaTruckMoving /> },
          { name: "Pending", icon: <FaTruckMoving /> },
          { name: "Rejected", icon: <RxCross2 />, className: "text-red-400" },
          { name: "Delivered", icon: <FaBoxOpen /> },
          // { name: "Returns", icon: <GiReturnArrow /> },
          { name: "Payment reviewing", icon: <FaShoppingBag /> },
        ]}
        allTransactionColumns={AllTransactionColumns}
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

export default AllTransactions;