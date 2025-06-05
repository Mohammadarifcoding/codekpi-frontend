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
import Container from "./Container";
import DropDown from "./DropDown/DropDown";
import CustomButton from "./Button/CustomButton";

// To enable smooth scrolling globally, add in styles/globals.css:
// html { scroll-behavior: smooth; }

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <Container>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
          isScrolled
            ? "bg-white backdrop-blur-md shadow-sm sm:h-[58px] h-12"
            : "bg-transparent sm:h-[70px] h-16"
        )}
      >
        <div className="flex items-center justify-between container mx-auto h-full">
          {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo || "/placeholder.svg"}
            width={isScrolled ? 90 : 100}
            height={isScrolled ? 30 : 35}
            alt="Company Logo"
            className={`transition-all duration-300 hover:scale-105 h-auto ${isScrolled ? "sm:w-[80px] w-[60px]" : "  sm:w-[100px] w-[70px]"}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden  lg:flex items-center gap-3">
            {Navdata?.map((nav, index) => (
              <Link
                key={index} href={nav?.route}
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
            <CustomButton size="sm" type='primary'  Icon={IoCallSharp} >
              Contact now
          </CustomButton>
            </Link>
          
        </nav>

        {/* Mobile Actions */}
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

      {/* Mobile dropdown */}

<DropDown menuOpen={menuOpen} router={router}/>


    </header>
    </Container>
  );
}
