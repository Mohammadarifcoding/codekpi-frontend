import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import dynamic from "next/dynamic";

const DynamicModal = dynamic(() => import("../modal/DynamicModal"), {
  ssr: false,
});

export default function ColorSelect({
  colors,
  setColors,
  errors,
  count,
  previousProduct,
  addColor,
  label = true,
}) {
  const [defaultColors, setDefaultColors] = useState([
    "bg-red-500",
    "bg-secondary",
    "bg-lime-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-sky-500",
  ]);
  let colorValues = colors || defaultColors;
  const [selectedColor, setSelectedColor] = useState("");

  let setColorValues = setColors || setDefaultColors;
  const content = (
    <IoMdAddCircleOutline className="size-7 text-muted-foreground" />
  );

  // Select only one color at a time
  const handleColorSelect = (opt) => {
    setSelectedColor((prevColor) => (prevColor === opt ? "" : opt));
  };

  return (
    <div className="mb-2">
      {label && <Label className="inline-block mt-4 mb-3">Select Color</Label>}
      <div className="flex items-center gap-0.5 space-x-2">
        {colorValues.map((color, index) => (
          <button
            type="button"
            key={index}
            className={`relative w-6 h-6 rounded-full flex items-center justify-center ${color} ${
              selectedColor === color
                ? "ring-2 ring-offset-2 ring-gray-500"
                : ""
            }`}
            onClick={() => handleColorSelect(color)}
          >
            {selectedColor === color && (
              <>
                <span className="font-bold text-white">
                  <Check />
                </span>
                <span className="absolute -top-2 -right-2 text-white text-center h-4 font-medium bg-primary rounded-full px-1 text-xs">
                  {count}
                </span>
              </>
            )}
          </button>
        ))}
        <input type="hidden" name="color" value={selectedColor} />
        {addColor && (
          <DynamicModal
            className="p-0 border-none hover:bg-transparent"
            trigger={content}
          >
            {/* The MultiColorSelect component can be removed if multiselect is not needed */}
          </DynamicModal>
        )}
      </div>
      {errors?.color && (
        <p className="absolute text-sm text-red-500">{errors?.color}</p>
      )}
    </div>
  );
}
