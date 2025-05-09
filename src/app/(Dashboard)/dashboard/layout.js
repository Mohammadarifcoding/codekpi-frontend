import DashboardLayout from "@/components/shared/dashboard/dashboardLayout/DashboardLayout";
import MobileLayout from "@/components/shared/dashboard/dashboardLayout/MobileLayout";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-[310px] hidden lg:block">
        <DashboardLayout />
      </div>
      <MobileLayout />
      <div className="lg:w-[calc(100%-185px)] w-full pb-5">{children}</div>
    </div>
  );
}
