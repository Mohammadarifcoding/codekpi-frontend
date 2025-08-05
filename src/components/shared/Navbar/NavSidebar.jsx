'use client';

import { Button } from "@/components/ui/button";
import DropDown from "../DropDown/DropDown";
import { IoCallSharp } from "react-icons/io5";
import CustomButton from "../Button/CustomButton";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function NavActions({  }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-3">
        <CustomButton size="sm" type="primary" Icon={IoCallSharp}>
          Contact now
        </CustomButton>
      </div>

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

      {/* Mobile DropDown */}
      <DropDown menuOpen={menuOpen} setMenuOpen={setMenuOpen} router={router} />
    </>
  );
}
