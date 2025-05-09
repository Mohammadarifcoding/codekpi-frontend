"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { ImFilePicture } from "react-icons/im";
import { Label } from "@/components/ui/label";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Bounce, toast } from "react-toastify";
import { ImageHosting } from "../../Cloudinary/Cloudinary";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const DashboardTable = ({ data, columns, dataKey, user, loading:isLoading }) => {
  console.log(data, "data");
  const [images, setUploadImages] = useState([])
  const [loading,setloading] = useState(false)
  const getButtonClass = (status) => {
    const cleanedStatus = status ? status.trim() : "";
    if (cleanedStatus === "pending") {
      return "bg-green-400 text-white"; 
    } else if (cleanedStatus === "rejected") {
      return "bg-red-400 text-white"; 
    } else if (cleanedStatus === "payment reviewing") {
      return "bg-blue-400 text-white"; 
    } else {
      return "bg-gray-300 text-black";
    }
  };
  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (images.length + files.length <= 4) {
      const newFiles = files.map((file) => URL.createObjectURL(file));
      setUploadImages((prevImages) => [...prevImages, ...newFiles]);
      setloading(true);
      const uploadImagePromises = files.map((file) => ImageHosting(file));
      const responses = await Promise.all(uploadImagePromises);
      const newImageUrls = responses.map((response) => response.url);
      setUploadImages((prevImages) => [
        ...prevImages.filter((image) => !image.startsWith('blob:')), // Remove local URLs if necessary
        ...newImageUrls,
      ]);
      setloading(false);

    }
  };
  const handleImageDelete = (index) => {
    setUploadImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  if (isLoading) {
    return <p>Loading data...</p>; // Ensure this returns a loading message.
  }

  return (
    <div className="bg-white border rounded-md">
      {data.length > 0 ? (
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              {columns.map((column, idx) => (
                <TableHead key={idx} className="text-black">
                  {column.label}
                </TableHead>
              ))}
              {user && <TableHead className="text-black">User Info</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column, idx) => (
                  <TableCell key={idx}>
                    {column.type === "button" ? (
                      <button className={`py-1 px-3 rounded ${getButtonClass(item[column.key])}`}>
                        {item[column.key]}
                      </button>
                    ) : (
                      item[column.key]
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <Link href={`/${dataKey}/details/${item.id}`}>
                    <button className="px-3 py-1 text-gray-500 transition border rounded-md">
                      View Details
                    </button>
                  </Link>
                </TableCell>
                {user && (
                  <TableCell>
                    <Link href={`/${dataKey}/user-info/${item.userId}`}>
                      <span className="text-blue-600">{user.name}</span>
                    </Link>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="p-4 text-center"><p>No data available. </p><div>
        {/* this button used for support it used for order page */}
        <Dialog>
        <DialogTrigger><p className="px-3 py-1 text-gray-500 transition border rounded-md cursor-pointer">Support</p></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ID: 671ccf8594132a3b7fcead8e</DialogTitle>
            <DialogDescription>
            <div>
        <Label className="mb-3">Product Images</Label>
        <div
          className={cn(
            'relative mt-2 border border-dashed rounded-md h-[248px] sm:h-auto md:pl-5 lg:pl-3 xl:pl-10 2xl:pl-20 py-5',
            { 'sm:py-0': images.length > 2 }
          )}
        >
          <Label
            className={cn(
              'sm:flex sm:pl-36 md:pl-0 items-center lg:justify-between border-gray-300',
              { 'justify-around': !images.length },
              { 'h-[248px]': images.length > 2 }
            )}
          >
            <div
              htmlFor="imageUpload"
              className={`flex justify-center flex-col items-center text-center cursor-pointer gap-3 ${
                images.length >= 4 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ImFilePicture className="text-3xl text-muted-foreground" />
              <div className="text-gray-400">
                <p className="mb-3">Drop images or</p>
                <p className="text-blue-500 underline">click to browse</p>
              </div>
            </div>
            <Input
              id="imageUpload"
              name="image"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              multiple
              className="hidden"
              onChange={handleImageUpload}
              disabled={images.length >= 4}
            />
          </Label>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
              <AiOutlineLoading3Quarters className="text-3xl text-blue-500 animate-spin" />
            </div>
          )}
          <div
            className={cn(
              'absolute sm:right-2 -translate-x-1/2 sm:-translate-x-0 left-1/2 sm:left-auto sm:-translate-y-1/2 top-1/2 w-full sm:w-auto px-1 sm:px-0 ',
              { 'sm:right-0': images.length === 3 }
            )}
          >
            {images.length > 0 ? (
              <div className="flex justify-center grid-cols-2 gap-0.5 sm:gap-2 sm:grid">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative group ${
                      images.length === 3 &&
                      index === 2 &&
                      'sm:col-span-3 sm:w-[232px]'
                    } ${
                      images.length === 1 &&
                      index === 0 &&
                      'sm:col-span-3 sm:w-[232px]'
                    }`}
                  >
                    <Image
                      width={300}
                      height={300}
                      src={image}
                      alt={`Product ${index + 1}`}
                      className={cn(
                        'object-cover sm:w-28 rounded-md h-28',
                        { 'sm:w-[232px]': index === 2 && images.length === 3 },
                        { 'sm:w-[232px]': index === 0 && images.length === 1 },
                        { 'opacity-50': loading }
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => handleImageDelete(index)}
                      className="absolute top-0 right-0 p-0.5 text-xs text-white transition-opacity duration-200 bg-red-500 rounded-md opacity-0 group-hover:opacity-80"
                    >
                      <IoCloseSharp className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pt-5 text-center text-gray-400 sm:hidden lg:block sm:pt-0 lg:text-sm xl:text-base">
                <p>Add at least 4 images</p>
                <p>Pay attention to the quality</p>
                {loading && (
                  <AiOutlineLoading3Quarters className=" size-12 animate-spin duration-500 transition" />
                )}
              </div>
            )}
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          You need at least 4 images. Pay attention to the quality of the
          pictures you add (important).
        </p>
      </div>
      <div>
      <div className="grid w-full space-y-1 mt-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" className="px-2" />
      <p className=" text-xs text-gray-500">
        Your message will be copied to the support team.
      </p>
      <Button className="mt-3">Send message</Button>

        </div>
          </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
          </Dialog>
        {/* this button used for support it used for order page */}

</div>
          </div> // Change message if no data is available
      )}
    </div>
  );
};

export default DashboardTable;
