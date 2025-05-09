import { cn } from '@/lib/utils';
import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

export default function TotalSelectedColor({ newColor }) {
  // Ensure only up to 10 colors are shown

  const remainingSlots = 10 - newColor.length;

  return (
    <div>
      <div className="grid grid-cols-10   items-center gap-3">
        {newColor.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full  flex items-center justify-center ${color}`}
          ></div>
        ))}
        {Array(remainingSlots)
          .fill(null)
          .map((_, index) => (
            <IoMdAddCircleOutline
              key={index}
              className="size-7 text-gray-300"
            />
          ))}
        {/* <IoMdAddCircleOutline
          className={cn('size-7 text-muted-foreground', {
            hidden: newColor.length === 10,
          })}
        /> */}
      </div>
    </div>
  );
}
