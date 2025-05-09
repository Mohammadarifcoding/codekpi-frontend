"use client"
import { useDeleteWhishlistSingleMutation, useGetwhishListQuery, usePostWishlistMutation } from '@/components/Redux/services/wishlistApi/wishlistApi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import icons
import { useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeart } from "react-icons/io";
import { toast } from 'react-toastify';
import Link from 'next/link';
import { CloudCog } from 'lucide-react';


const ProductCard = ({ name, price, discount, image, id }) => {
    const maxLength = 12;
    const [postWishlist, { isLoading:postLoading, isSuccess: postSuccess, isError: postError, data: postData, error: postErrorMsg }] =usePostWishlistMutation();
    const [deleteWhishlistSingle, { isLoading:deletedLoading, isSuccess: deleteSuccess, isError: deleteError, data: deleteData, error: deleteErrorMsg }] = useDeleteWhishlistSingleMutation();
    const { token} = useSelector((state) => state.auth);
    const { data: wishList } = useGetwhishListQuery();
    const [isInWishlist, setIsInWishlist] = useState(false);
    useEffect(() => {
        if (wishList && token) {
            const productInWishlist = wishList?.data.some(item => item.productId === id);
            setIsInWishlist(productInWishlist);
        }
    }, [wishList, id, token]);

    const handleWishlistClick = async () => {
        if (!token) {
            toast.info("Please log in to add items to your Wishlist.");
            return;
        }
        if (isInWishlist) {
            console.log(id, "this is id");
            const res = await deleteWhishlistSingle({ id });
            if (res?.data?.success) {
                toast.success(`${res?.data?.message? "Product successfully removed from your wishlist.": res?.data?.message}`); 
                setIsInWishlist(false); 
            } else {
                toast.error(`${res?.error?.data?.message? res?.error?.data?.message:"Failed Deleted to wishlist."}`);
            }
            
        } else {
            // Add to wishlist
            const payload = {productId:id, price:price, productImage:image, productTitle:name }
            const res = await postWishlist(payload);
            if (res?.data?.success) {
                toast.success(`${res?.data?.message ? res?.data?.message:"Added to wishlist.."}`);
                setIsInWishlist(true);  
            } else {
                toast.error(`${res?.error?.data?.message ? res?.data?.error?.data?.message :"Failed added to wishlist" }`);
            }

        }
    }; 

    return (
        <div className="relative w-full h-[300px] p-3 mx-auto border shadow-lg xl:max-w-full max-w-xs rounded-md bg-white">

            {/* Discount Badge */}
            {discount && (
                <div className="absolute px-2 py-1 text-xs text-green-800 bg-green-200 rounded-full top-5 left-5">
                    {discount}
                </div>
            )}

            {/* Wishlist and Cart Icons */}
            <div className="absolute flex space-x-2 top-5 right-5">
                {isInWishlist && token ? (
                              <div disable={deletedLoading}
                                onClick={handleWishlistClick}
                               className="p-2 bg-white rounded-full shadow cursor-pointer">
                                  <FaHeart className={` text-red-700 ${deletedLoading?" animate-pulse":" bg-white"}`} />
                                  </div>
                                    ) : (
                                        <div disable={postLoading}
                                          onClick={handleWishlistClick}
                                         className="p-2 bg-white rounded-full shadow cursor-pointer">
                                            <FaHeart className={`${postLoading?"animate-pulse":" bg-white"}`}/>
                                        </div>

                                    )}
               
                <div className="p-2 bg-white rounded-full shadow cursor-pointer">
                    <FaShoppingCart className="text-gray-600" />
                </div>
            </div>

            <Link href={`/product-details/${id}`}>
            <div>
                <Image src={image} width={200} height={200} alt={name} className="object-cover w-full rounded-md h-52" />
                
                {/* Product Name with Slicing */}
                <h2 className="mt-2 text-sm font-semibold text-start truncate w-full">
                    {name}
                </h2>

                {/* Pricing Section */}
                <div className="flex items-center justify-between mt-2 text-sm">
                    <div>
                        <p className="font-bold text-blue-600">৳ {price}</p>
                        {/* {originalPrice && (
                            <p className="text-xs text-gray-500 line-through">৳ {originalPrice}</p>
                        )} */}
                    </div>
                    <p>Sold: 33</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default ProductCard;
