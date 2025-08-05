import { Button } from '@/components/ui/button';
import { Navdata } from '@/data/navdata';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DropDown = ({menuOpen, router}) => {
    return (
      <div>
        <div
  className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
    menuOpen ? 'max-h-[500px] opacity-100' : 'h-0 opacity-0'
  }`}
>
  <div className="flex flex-col px-4 py-3 gap-2">
    {Navdata.map((nav, idx) => {
      const active = router.pathname === nav.route;
      return (
        <div key={idx} className="group">
          <Link  href={nav.route} scroll={false}>
            <span
              className={cn(
                "flex items-center gap-2 px-2 py-2 rounded-md transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <nav.icon className="w-5 h-5" />
              {nav.name}
            </span>
          </Link>
        </div>
      );
    })}
  </div>
</div>
      </div>

    );
};

export default DropDown;