import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import TotalSelectedColor from './TotalSelectedColor';
import { Bounce, toast } from 'react-toastify';
import { DialogClose } from '@/components/ui/dialog';

export default function MultiColorSelect({
  colors,
  colorValues,
  setColorValues,
}) {
  const [selectedColor, setSelectedColor] = useState([]);
  const [newColor, setNewColor] = useState([...colorValues]);

  const allColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-lime-500',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-violet-500',
    'bg-rose-100',
    'bg-rose-200',
    'bg-rose-300',
    'bg-rose-400',
    'bg-rose-500',
    'bg-rose-600',
    'bg-rose-700',
    'bg-rose-800',
    'bg-rose-900',
    'bg-indigo-100',
    'bg-indigo-200',
    'bg-indigo-300',
    'bg-indigo-400',
    'bg-indigo-500',
    'bg-fuchsia-100',
    'bg-fuchsia-200',
    'bg-fuchsia-300',
    'bg-fuchsia-400',
    'bg-fuchsia-500',
    'bg-fuchsia-600',
    'bg-fuchsia-700',
    'bg-fuchsia-800',
    'bg-pink-500',
    'bg-blue-500',
    'bg-gray-500',
    'bg-teal-100',
    'bg-teal-200',
    'bg-teal-300',
    'bg-teal-400',
    'bg-teal-500',
    'bg-teal-600',
    'bg-teal-700',
    'bg-teal-800',
    'bg-teal-900',
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-yellow-300',
    'bg-yellow-400',
    'bg-yellow-500',
    'bg-yellow-600',
    'bg-yellow-700',
    'bg-yellow-800',
    'bg-yellow-900',
    'bg-black',
    'bg-white',
    'bg-gray-200',
    'bg-gray-300',
    'bg-gray-400',
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
    'bg-gray-950',
  ];

  const handleColorSelect = (opt) => {
    if (newColor.length === 10 && !newColor.includes(opt)) {
      toast.error('You can select only 10 colors', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
      return;
    }
    setNewColor([...newColor, opt]);
    newColor.includes(opt)
      ? setNewColor(newColor.filter((p) => p !== opt))
      : setNewColor([...newColor, opt]);

    selectedColor.includes(opt)
      ? setSelectedColor(selectedColor.filter((p) => p !== opt))
      : setSelectedColor([...selectedColor, opt]);
  };

  const handelSaveColors = () => {
    if (newColor.length <= 7) {
      return toast.error('You must select at least 7 colors', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    }
    setColorValues(newColor);
  };

  const handelThrowError = (error) => {
    toast.error(error, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
  };

  return (
    <section className=" ">
      {/* Total selected */}
      <h3 className="mb-1 font-medium">New color</h3>
      <section className="border rounded-full shadow-sm p-2 mb-3">
        <TotalSelectedColor newColor={newColor} />
      </section>
      {/* color select */}
      <h3 className="my-1 font-medium">Select color</h3>
      <section className=" border-4  border-white shadow-md scrollbar-hidden h-[250px] p-1.5 rounded-md  overflow-y-auto   ">
        <div className="grid   grid-cols-12  items-center  gap-3">
          {allColors.map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full flex  items-center justify-center ${color} ${
                newColor.includes(color)
                  ? 'ring-2 ring-offset-2 ring-gray-500'
                  : ''
              }`}
              onClick={() => handleColorSelect(color)}
            >
              {newColor.includes(color) && (
                <span className="font-bold text-white">
                  <Check />
                </span>
              )}
            </button>
          ))}
          <input type="hidden" name="color" value={selectedColor} />
        </div>
      </section>
      <div className="flex justify-center items-center">
        {newColor.length <= 7 ? (
          <Button
            className="text-white w-full mt-3"
            onClick={() =>
              handelThrowError('You must select at least 7 colors')
            }
          >
            Save
          </Button>
        ) : (
          <DialogClose className="text-white w-full">
            <Button
              onClick={handelSaveColors}
              className="mt-3 w-full "
              variant=""
            >
              Save
            </Button>
          </DialogClose>
        )}
      </div>
    </section>
  );
}
