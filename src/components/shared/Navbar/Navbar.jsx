"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navdata } from "@/data/navdata";
import Image from "next/image";
import { IoCallSharp } from "react-icons/io5";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "/src/assets/Logo/logo2.png";
import Container from "../Container";
import CustomButton from "../Button/CustomButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <Container>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md shadow-sm sm:h-[70px] h-16"
        )}
      >
        <div className="flex items-center justify-between container mx-auto h-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo || "/placeholder.svg"}
              width={ 100}
              height={ 35}
              alt="Company Logo"
              className={`transition-all duration-300 hover:scale-105 h-auto sm:w-[80px] w-[60px]`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-3">
            {Navdata?.map((nav, index) => (
              <Link
                key={index}
                href={nav?.route}
                className="relative px-4 py-2 rounded-full text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer group"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <nav.icon className="w-4 h-4" />
                  {nav?.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}

            <Link href="tel:+8801770511497">
              <CustomButton size="sm" type="primary" Icon={IoCallSharp}>
                Contact now
              </CustomButton>
            </Link>
          </nav>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="icon" variant="ghost">
              <a href="tel:+8801770511497">
                <IoCallSharp className="w-5 h-5 text-primary" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile sidebar menu */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end p-4">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-4 px-6">
            {Navdata?.map((nav, index) => (
              <Link
                key={index}
                href={nav.route}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-200"
              >
                <nav.icon className="w-5 h-5" />
                {nav.name}
              </Link>
            ))}

            <Link href="tel:+8801770511497" className="mt-4">
              <CustomButton size="sm" type="primary" Icon={IoCallSharp}>
                Contact now
              </CustomButton>
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </header>
    </Container>
  );
}
