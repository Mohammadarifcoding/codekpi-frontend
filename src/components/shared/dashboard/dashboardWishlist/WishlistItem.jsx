import React from 'react';
import Image from 'next/image';
import { PiBagThin } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const WishlistItem = ({ product, onRemove }) => {
    console.log(product, "this is proudct");

    return (
        <div className='sm:items-center items-start gap-5  p-4  space-y-2 bg-white border rounded-lg shadow-md flex flex-col sm:flex-row'>

             <Image
                src={product?.productImage} // Dynamic product image
                alt={product?.productTitle}
                className="object-cover sm:w-24 w-full  sm:h-full h-60 rounded-lg"
                width={180} // Next.js Image optimization
                height={180} // Next.js Image optimization
            />

            <div>
                <div className="flex-grow">
                    <h3 className="text-sm font-semibold ">
                        {product?.productTitle.length > 50 ? product?.productTitle.slice(0, 20) + "..." : product?.productTitle}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-red-500">{product?.price}</span>
                        {/* <span className="text-sm text-gray-400 line-through">{300}</span> */}
                    </div>

                    {/* Stock Alert */}
                    <p className="mt-1 text-sm">Order Now</p>
                </div>
                <div className="md:gap-3 gap-1 mt-4 text-sm  flex justify-center items-center">
                    <button  className="flex items-center gap-3 px-4 md:py-2 text-gray-500 transition border rounded-md hover:bg-green-600 hover:text-white">
                        <PiBagThin className='text-2xl md:text-sm'/> Move to cart
                    </button>
                    <button
                        className="flex items-center gap-3 px-6 py-2.5 md:py-2 text-gray-500 transition border rounded-md hover:bg-red-600 hover:text-white"
                        onClick={onRemove} // Trigger remove action
                    >
                        <RiDeleteBin6Line /> Remove
                    </button>
                </div>
            </div>

        </div>
    );
};

export default WishlistItem;
