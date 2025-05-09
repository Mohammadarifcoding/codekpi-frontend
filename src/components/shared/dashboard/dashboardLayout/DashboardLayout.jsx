"use client";
import { IoBag } from "react-icons/io5";
import LayoutBar from "./LayoutBar";
import DashboardData from "@/lib/DashboardNavData";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useUser from '@/hooks/useUser'; 

const DesktopLayout = () => {
  const { userRole, user } = useUser();
  const router = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routesData = userRole === 'admin'
  ? DashboardData[1].routesAdminData
  : DashboardData[0].routesUserData;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-72 flex flex-col justify-between border-r bg-white drop-shadow-sm">
        {/* User Info Section */}
        <div className="px-8">
          <div className="py-5">
            <Link href="/" className="flex gap-3">
              <IoBag />
              <h4>Parcel Trade</h4>
            </Link>
          </div>
          <div className="pb-5 mb-6 border-b">
            <h3 className="font-semibold my-2 text-lg">
              Hello <span className="uppercase">{user?.name}</span>
            </h3>
            <p className="text-gray-400">{user?.email}</p>
            <div className="flex items-center mt-2">
              <span className="px-3 py-1 font-semibold rounded-md text-sm">
                0.00
                <span className="font-medium ms-1">BDT</span>
              </span>
              <span className="text-xl text-green-500">
                <CiCircleCheck />
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Menu */}
        <div
          className="flex-grow overflow-y-auto px-8"
          style={{
            scrollbarWidth: "thin",
            msOverflowStyle: "auto",
            scrollbarWidth: "none",
          }}
        >
   
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex flex-col gap-5 mt-3 text-lg">
                {routesData
                  .map((item, _id) => {
                    const isActive = router === item.route;

                    return item.underRoutes ? (
                      <LayoutBar item={item} key={_id} />
                    ) : (
                      <Link
                        key={_id}
                        className={`flex items-center gap-2 hover:bg-secondary ${
                          isActive ? "bg-secondary p-2 rounded-lg" : "p-2 rounded-lg"
                        }`}
                        href={item.route}
                        onClick={() => setIsMenuOpen(false)} 
                      >
                        <span className="font-bold text-2xl">{item?.icon}</span>
                        {item?.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
      
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
