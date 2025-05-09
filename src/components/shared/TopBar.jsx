"use client"
import React, { useEffect, useRef, useState } from 'react';
import { GoPerson } from "react-icons/go";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/features/AllSlice/authSlice';
import { CiLogout } from "react-icons/ci";
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    const handleclick = () => {
        dispatch(logout())
    }
    const userPhoto = false;
    const dropDownRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // This effect ensures the component only behaves on the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, [isClient]);

    if (!isClient) return null; // Render nothing on the server-side

    return (
        <div className="z-50 py-3  w-full bg-secondary">
            
            <div className='items-center justify-between flex gap-4 container'>
                <p className='hidden text-md md:block'>Welcome to Parcel Trade Ecommerce, Explore your best experience</p>
                <div className="md:hidden block flex-1 ">
                <marquee>Welcome to Wolmart Store message or remove it!</marquee>
                </div>
                <div className='flex items-center justify-end    text-sm'>
                    <div className=''>
                        <nav className='flex items-center gap-5'>
                            <Link className='hidden md:block' href={''}>Blog</Link>
                            <Link href={''} className='whitespace-nowrap hidden md:block'>Contact Us</Link>
                            <div
                                ref={dropDownRef}
                                className="relative w-fit"
                            >
                                <button  onMouseEnter={() => setOpen(true)}  className="">
                                    {userPhoto
                                        ? <Image src={userPhoto} alt='user' height={20} width={20} className="text-gray-500 size-6 rounded-full" />
                                        : <FaUserCircle className="text-gray-500 size-6" />
                                    }
                                </button>
                                <div 
                                onMouseLeave={()=>setOpen(false)}
                                    className={`${
                                        open ? 'visible' : 'invisible'
                                    } absolute top-10 z-50 p-3 space-y-1 w-fit min-w-[170px] shadow-md bg-white text-primary border rounded-sm right-0`}
                                >
                                    <Link href={'/dashboard'} className='flex items-center gap-2'> 
                                        <GoPerson className='text-xl' />Dashboard
                                    </Link>
                                    <Link href={'/'} className='flex items-center gap-2'> 
                                        <GoPerson className='text-xl' />My Account
                                    </Link>
                                    {token
                                        ? <div onClick={handleclick} className='cursor-pointer flex items-center gap-2'> 
                                            <CiLogout /> Logout
                                          </div>
                                        : <Link href={'/login'} className='flex items-center gap-2'>
                                            <GoPerson className='text-xl' /> Sign In
                                          </Link>
                                    }
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;


 {/* <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='bg-gray-100'>USD</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="p-2 w-[100px]">
                                    <li>
                                        <NavigationMenuLink>USD</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>EUR</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> */}

                    {/* <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='bg-gray-100'>ENG</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="p-2 w-[100px]">
                                    <li>
                                        <NavigationMenuLink>ENG</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>FRA</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> */}