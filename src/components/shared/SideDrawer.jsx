import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { categories } from '@/lib/sidebarData';



const SideDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (categoryName) => {
      if (selectedCategory === categoryName) {
        setSelectedCategory(null); 
      } else {
        setSelectedCategory(categoryName); 
      }
    };

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const handle =()=>{
      console.log("hello");
    }

    return (
        <div className=''>
        <FiAlignJustify className='text-2xl cursor-pointer' onClick={toggleDrawer}/>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            className='bla bla bla'
        >
             <div className='py-4'>
                <div className='px-4  justify-between items-center flex'>
                <h1>Parcel Trade</h1>
                <RxCross1  className=' cursor-pointer' onClick={()=>setIsOpen(false)}/>

                </div>
                <div className='md:hidden w-full  py-2 flex px-4'>
                <Input className='rounded-md outline-none' type="text" placeholder="Search in...." />
            </div>
            <Tabs defaultValue="categories" className="">
      <TabsList className="grid w-full grid-cols-2 gap-2 px-4">
        <TabsTrigger value="menu">MENU BAR</TabsTrigger>
        <TabsTrigger value="categories">CATEGORIES</TabsTrigger>
      </TabsList>
      <TabsContent value="menu">
          <CardContent className="space-y-[10px] px-4 cursor-pointer">
           <div>
           <Link href={"/"}>Blog</Link>
           </div>
           <div>
           <Link href={"/"}>About Us</Link>
           </div>
          </CardContent>
     
      </TabsContent>
      <TabsContent value="categories">
          <CardContent className=" cursor-pointer">
          <div className="sidebar">
      {selectedCategory === null ? (
        <ul className=''>
          {categories.map((category) => (
            <li className='py-[10px] hover:bg-secondary' key={category.name} onClick={() => handleCategoryClick(category.name)}>
              <div className="flex justify-between items-center px-4">
                {/* Using Next.js Image component */}
               <div className='flex gap-2 '>
               <Image
                  src={category.icon}
                  alt={category.name}
                  width={24}
                  height={24}
                  className="icon"
                />
                <span className="ml-2 text-sm">{category.name}</span>
               </div>
               <p className='text-xl'>{category.arrow}
               </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>

           <div className='flex gap-2 items-center mb-1  px-4'>
            <button onClick={() => setSelectedCategory(null)}><IoIosArrowRoundBack /></button>
            <h3>{selectedCategory}</h3>
            </div>
            <hr className=' h-1 bg-gray-100  '/>
          <ul className=' '>
            {categories
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories.map((subcategory, index) => (
              <div  key={index} className='hover:bg-secondary'>
               <Link onClick={handle} href={`/all-product/${subcategory.replace(/\s+/g, '-')}`} >
               <div className=' flex justify-between items-center py-[10px]   px-4' >
                 <li>{subcategory}</li>
                 <MdKeyboardArrowRight />
               </div>
               </Link>
              </div>
              ))}
          </ul>
        </div>
      )}
    </div>
          </CardContent>
      </TabsContent>
    </Tabs>
            </div>
        </Drawer>
    </div>
    );
};

export default SideDrawer;
