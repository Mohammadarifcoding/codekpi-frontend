import React from "react";
import { cn } from "@/lib/utils";

const OrderTabs = ({ activeTab, setActiveTab, options }) => {
 
  return (
    <div className="grid grid-cols-1 gap-3 mb-4 lg:grid-cols-5 md:grid-cols-2">
      {options?.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex items-center px-5 py-4 rounded-md border transition 
            ${activeTab === tab.name
              ? "bg-gray-200 border-gray-400"
              : "bg-white border-gray-200"
            }`}
        >
          <span className={cn("mr-2", tab.className)}>{tab.icon}</span>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default OrderTabs;
