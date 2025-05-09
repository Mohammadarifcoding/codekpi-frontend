import { Navdata } from '@/data/navdata';
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import  Drawer  from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link as ScrollLink } from "react-scroll";
const NavbarSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className='flex justify-center items-center'>
             <button onClick={toggleDrawer}><IoMdMenu className="text-2xl" /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
               <div className="flex flex-col gap-3 mt-3">

            {Navdata?.map((nav,key)=>(<ScrollLink  to={nav?.route}
              smooth={true}
                key={key}
                duration={1000}  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false) // Prevents default behavior of anchor tag
                    setTimeout(() => {
                      const contactSection = document.getElementById(nav?.route);
                      if (contactSection) {
                        contactSection.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }, 500); // Change the delay time (in milliseconds) as needed
                  }} className="px-3 flex gap-2 items-center"><nav.icon/>  {nav.name}</ScrollLink>))}

               </div>
            </Drawer>
        </div>
    );
};

export default NavbarSidebar;