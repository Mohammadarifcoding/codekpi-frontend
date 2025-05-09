'use client';

import { useRef, useState } from "react";

import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Users, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "/src/assets/Logo/logo.png";
const Footer = () => {
    
    
    return (
      <footer className="bg-gray-100 text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* <h2 className="text-2xl font-bold mb-4">CodeKpi</h2> */}
            <Image src={logo} width={100} height={100} alt="image"/>
            <p className="text-sm text-gray-400 mb-4">Our vision is to make people skilled</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/freelancingcareerit?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook Page</span>
              </Link>
              <Link href="https://m.facebook.com/groups/publicfreelancingcareer/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Users className="h-6 w-6" />
                <span className="sr-only">Facebook Group</span>
              </Link>
              <Link href="https://youtube.com/@freelancingcareerit?si=J6Hw4M7sq8ifAXia" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube Channel</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>01770511497</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>01986711198</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>freelancingcare8@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeKpi. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
