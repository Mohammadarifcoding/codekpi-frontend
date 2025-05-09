"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { FaSearch } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { ImageHosting } from "@/components/shared/Cloudinary";
import { useConvertImageMutation } from "@/components/Redux/services/imageApi/imageApi";
const Search = () => {
  const [image, setImage] = useState(null);
  const [convertImage] = useConvertImageMutation();
  const [loading, setLoading] = useState(false);
  const click = () => {
    console.log("fdsfsd");
    document.getElementById("type3-1").click();
  };
  const handleFileChange = async (e) => {

    e.preventDefault();
    try{
        const file = e.target.files[0];
        if (file) {
            setLoading(true)
          const uploadedImage = await ImageHosting(file); // Get the first file from the image array
          const photo = uploadedImage?.url;
           const conversation = await convertImage({uri:photo});
            const convertedImage = conversation?.data?.data?.data?.image_url 
          setImage(convertedImage);
          console.log(convertedImage);
          setLoading(false)
        }
    }catch(err){
        console.log(err)
        setLoading(false)
        toast.error("Something went wrong")
    }
    
  };

  return (
    <div className="w-full relative flex items-center py-2 border rounded-full px-3 gap-3 ">
      <div onClick={click} className="text-gray-500 z-10 cursor-pointer">
        {loading ? (
          <label>
            <div className="w-6 h-6 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
          </label>
        ) : (
          <label className="w-max">
            <FaCamera className="text-xl" />
          </label>
        )}

        {/* Hidden file input */}
        <input
          onChange={handleFileChange}
          className="hidden"
          type="file"
          name=""
          id="type3-1"
        />
      </div>

      <input
        className=" w-full focus:outline-none "
        type="text"
        placeholder="Search in...."
      />

      <div className="cursor-pointer">
        <FaSearch />
      </div>
    </div>
  );
};

export default Search;
