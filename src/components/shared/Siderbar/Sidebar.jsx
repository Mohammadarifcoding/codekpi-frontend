"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaWallet, FaShoppingCart, FaRegListAlt } from "react-icons/fa"; // Example icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import react from "react";
import { categories } from "@/lib/sidebarData";


const Sidebar = ({setIssideOpen}) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [subCategory, setsubategory] = useState(0);
  const [hoveredItemPosition, setHoveredItemPosition] = useState({ top: 0 });
  const router = useRouter()
  const path = usePathname()
  const limitedCategories = categories.slice(0, 9);


  const handleMouseEnter = (index, event, subcategoriesLength) => {
    setHoveredCategory(index);
    const rect = event.target.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const maxDropdownHeight = 300;
    let top = (rect.top)
    // document.body.style.overflow = "hidden";

    console.log(top);
    if (subcategoriesLength >= 10) {
      let top = (rect.top);
      if (top + maxDropdownHeight > viewportHeight) {
        top = viewportHeight - maxDropdownHeight;
      }

      // setHoveredItemPosition({ top });
    } else {
      // setHoveredItemPosition({ top });

    }
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    if (path !== "/" && !path.startsWith("/all-product")) {
      setIssideOpen(false);
     }
    else {
      setIssideOpen(true);
     }
    // document.body.style.overflow = "auto";

  };
  const handleCategoryClick = (categoryName) => {
    const formattedCategoryName = categoryName.replace(/\s+/g, '-'); // Replace spaces with hyphens
    router.push(`/product/${formattedCategoryName}`);
  };
  const getGridColumnsClass = (subcategoryCount) => {
    if (subcategoryCount <= 10) return 'grid-cols-1 gap-y-1 w-72';
    if (subcategoryCount <= 20) return 'grid-cols-2 gap-x-6 gap-y-1  w-[300px]';
    if (subcategoryCount <= 30) return 'grid-cols-3 gap-x-6 gap-y-1  w-[550px]';
    return 'grid-cols-4 gap-x-6 gap-y-1 w-[700px]';  // For more than 30, use 4 columns
  };
  const getGridColSpanClass = (subcategoryCount) => {
    if (subcategoryCount <= 10) return 'col-span-1';
    if (subcategoryCount <= 20) return 'col-span-2';
    if (subcategoryCount <= 30) return 'col-span-3';
    return 'col-span-4';  // For more than 30, use 4 columns
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="bg-white rounded-md w-52 custom-scrollbar">
      <ul className="">
        {limitedCategories?.map((category, index) => (
          <li
            key={index}
            onMouseEnter={(e) => handleMouseEnter(index, e, category?.subcategories?.length)}
            className={`relative px-4  py-[10px] text-gray-900  cursor-pointer flex justify-between items-center transition-all duration-200 ease-in-out ${hoveredCategory === index ? "mr-0 bg-secondary" : "mr-1"
              } ${index === 0 ? "rounded-t-lg" : ""}`}
              
          >
            <div className={`flex  items-center justify-center gap-4 ${hoveredCategory === index ? "text-primary" : "text-gray-900"}`}>
              <Image width={30} height={20} src={category?.icon} alt={index}></Image>{/* Category Icon */}
              <p className="text-sm">{category?.name}</p>
            </div>
            <p className={` text-xl ${hoveredCategory === index ? "text-primary" : "text-gray-900"}`}>{category?.arrow}</p>

            <div className={`absolute top-0 left-52 bg-white z-50 shadow-xl rounded-b-lg drop-shadow-xl flex flex-col transition-all duration-500 ease-in-out transform

            ${hoveredCategory === index ? "translate-x-0" : "-translate-x-5"}

              `}
              // style={{
              //   top: `${hoveredItemPosition.top}px`,
              // }}
            >
              {hoveredCategory === index && category?.subcategories ? (

                <ul className={`bg-white rounded-b-lg custom-scrollbar overflow-y-auto max-h-[300px] p-4 grid ${getGridColumnsClass(category?.subcategories?.length)}`}>
                  <p className={`font-bold border-b-2 py-1 ${getGridColSpanClass(category?.subcategories?.length)}`}>{category?.name}</p>
                  {category?.subcategories?.map((subcategory, subIndex) => (
                    <li key={subIndex} className="">
                      <ul className="">
                      <Link href={`/all-product/${subcategory.replace(/\s+/g, '-')}`}>
                      <div
                        key={subIndex}
                        className="relative block py-1 text-gray-900 cursor-pointer hover:text-primary"
                      >
                        {subcategory}
                      </div>
                    </Link>
                      </ul>
                    </li>
                  ))}

                </ul>
              ) : (
                <div
                  onClick={() => handleCategoryClick(category?.name)} // Handle category click
                  className="absolute top-0 left-0 w-full h-full"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
