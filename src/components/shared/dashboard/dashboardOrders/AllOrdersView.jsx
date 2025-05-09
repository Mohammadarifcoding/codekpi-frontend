"use client";
import React, { useState } from "react";
import { DynamicSelect } from "../../form/DynamicSelect";
import OrderTabs from "../dashboardView/OrderTabs";
import OrdersTable from "./OrdersTable";
import AllOrdersTable from "./AllOrdersTable";

const AllOrdersView = ({
  title,
  data = [],
  tabOptions = [],
  filterOptions,
  tabEnabled,
  ordersColumns,
  type,
  loading,
}) => {
  const [activeTab, setActiveTab] = useState(tabOptions[0]?.name);
  const [filterStatus, setFilterStatus] = useState("");
  const [searchId, setSearchId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Use conditional logic to select columns and data key based on "orders" or "allorders"
  const ITEMS_PER_PAGE = 10;

  const filteredData = data.filter((item) => {
    const itemStatus = item.status ? item.status.toLowerCase() : "";
    const activeTabLower = activeTab ? activeTab.toLowerCase() : "";
    const filterStatusLower = filterStatus ? filterStatus.toLowerCase() : "";
  
    const matchesStatus =
      (filterStatusLower === "" && activeTabLower === "all") ||
      (filterStatusLower && itemStatus === filterStatusLower) ||
      (activeTabLower && itemStatus === activeTabLower);
  
    const matchesId = searchId ? (item._id || "").includes(searchId) : true;
  
    return matchesStatus && matchesId;
  });
  
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentItems = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilterStatus("");
    setSearchId("");
    setCurrentPage(1);
  };

  return (
    <div className="p-5 mx-auto lg:p-10">
      <div className="md:p-5 mx-auto">
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>

        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between mb-4">
          {/* Filter Dropdown */}
          <DynamicSelect
            options={filterOptions}
            placeholder={"Filter By Status"}
            className={"md:w-1/2 w-full"}
            onValueChange={(selectedValue) => {
              setFilterStatus(selectedValue);
              setCurrentPage(1);
            }}
          />

          {/* Search Input and Button */}
          <div className="flex mb-3 md:mb-0">
            <input
              type="text"
              placeholder={"Filter By Id"}
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="p-[10px] border border-gray-300 rounded-l-md focus:outline-none w-[80%]"
            />
            <button
              className="px-4 py-[10px] text-white bg-primary rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Tabs */}
        {tabEnabled && (
          <OrderTabs
            options={tabOptions}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />
        )}

        {/* Table Display */}
        <AllOrdersTable data={currentItems} loading={loading} columns={ordersColumns}/>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-md ${
              currentPage === 1 ? "bg-gray-200" : "bg-white"
            }`}
          >
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-md ${
              currentPage === totalPages ? "bg-gray-200" : "bg-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllOrdersView;
