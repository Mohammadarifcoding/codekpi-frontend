import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FaqItem = ({item,toggle , isOpen,id}) => {
    console.log(id)
    return (
        <div
        className="border-b border-gray-500/50 py-3 last-of-type:border-b-0"
      >
        <button
          onClick={() => toggle(id)}
          className="flex h-full w-full items-center justify-between font-medium text-black outline-none"
        >
          <span className='lg:text-xl font-medium text-blue-950 text-start'>{item?.title}</span>
          <span className="rounded-full p-2">
           {
            isOpen == id ? <IoIosArrowDown />: <IoIosArrowUp/>
           }
          </span>
        </button>
        <div
          className={`grid overflow-hidden text-gray-500 transition-all duration-300 ease-in-out ${
            isOpen == id ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden pr-4 text-sm font-medium">
            {item?.description}
          </div>
        </div>
      </div>
    );
};

export default FaqItem;