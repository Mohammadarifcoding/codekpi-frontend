"use client";

import img from "@/assets/nav/logo.png";
import Image from "next/image";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { HiOutlinePhone } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiBagThin } from "react-icons/pi";
import { TbRings } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { FiAlignJustify } from "react-icons/fi";
import SideDrawer from "./SideDrawer";
import Link from "next/link";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/features/AllSlice/authSlice";
import { CiLogout } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useGetwhishListQuery } from "../Redux/services/wishlistApi/wishlistApi";
import { useGetCartListQuery } from "../Redux/services/cartApi";
import Search from "./search/Search";

const MiddleBar = () => {
  const token = useSelector((state) => state.auth.token);
  const { data } = useGetCartListQuery();

  const dispatch = useDispatch();
  const { data: wishlist } = useGetwhishListQuery();
  const handleclick = () => {
    dispatch(logout());
  };
  const userPhoto = false;
  return (
    <div className="flex flex-col ">
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl  md:text-xl font-bold ">Parcel Trade</h2>
          {/* <Image className='sm:w-[180px] w-[150px]' src={img} alt='' /> */}

          {/* Only show GoPerson and PiBagThin on small devices */}
        </div>

        {/* Hide the category dropdown and search input on small screens */}
        <div className="hidden w-1/3 gap-5 p-2 mt-3 md:flex">
        <Search/></div>
        <nav className="flex items-center gap-4">
          <div className="md:block hidden">
            <Link
              href={""}
              className="flex items-center justify-center gap-3 text-3xl"
            >
              <span className="">
                {" "}
                <HiOutlinePhone />
              </span>
              <span className=" text-sm ">+880 1879-314050</span>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/dashboard/wishlist"} className="text-3xl">
              <CiHeart />
              <span className="hidden text-sm xl:block">Wishlist</span>
            </Link>
            {wishlist?.data?.length > 0 && token && (
              <span
                className={`absolute  xl:-top-3 xl:right-4 -top-[14px] right-0 text-white  text-center h-4 font-medium bg-red-500  rounded-full px-1 text-xs ${
                  wishlist.data.length >= 10 ? "w-5" : "w-4"
                }`}
              >
                {wishlist?.data?.length}
              </span>
            )}
          </div>
          <div className=" relative">
            <Link href={"/cart"} className="text-3xl">
              <PiBagThin />
              <span className="hidden text-sm xl:block">Cart</span>
            </Link>
            {data?.data?.length > 0 && token && (
              <span
                className={`absolute  xl:-top-3 xl:-right-1 -top-[14px] right-0 text-white  text-center h-4 font-medium bg-red-500  rounded-full px-1 text-xs ${
                  data.data.length >= 10 ? "w-5" : "w-4"
                }`}
              >
                {data?.data?.length}
              </span>
            )}
          </div>
          <div className="xl:hidden block">
            <SideDrawer />
          </div>
        </nav>
      </div>
      <div className="flex  gap-5 p-2 mt-3 md:hidden">
        <Search />
      </div>
    </div>
  );
};

export default MiddleBar;

{
  /* <div className='md:hidden block'>
<DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className='flex'>
                { userPhoto?<Image src={userPhoto} alt='user' height={20} width={20} className="text-gray-500 size-6 rounded-full"></Image>:<FaUserCircle className="text-gray-500 size-6" />}                                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full" align="end">
                <nav className='flex flex-col gap-2 p-2 w-[180px]'>
                    <Link href={'/register'} className='flex items-center gap-2'><GoPerson className='text-xl' />Register</Link>
                    <Link href={'/dashboard'} className='flex items-center gap-2'> <GoPerson className='text-xl' />Dashboard</Link>
                    <Link href={'/'} className='flex items-center gap-2'> <GoPerson className='text-xl' />My Account</Link>
                    {
                        token?<div onClick={handleclick} className=' cursor-pointer flex items-center gap-2'> <CiLogout /> Logout</div>:<Link href={'/login'} className='flex items-center gap-2'><GoPerson className='text-xl' /> Sign In</Link>
                    }
                </nav>
            </DropdownMenuContent>
</DropdownMenu>
</div> */
}
