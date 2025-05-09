'use client'
import React, { useState } from 'react';
import watch from '@/assets/dashboard/bag.jpg';
import WishlistModal from './WishlistModal';
import WishlistItem from './WishlistItem';
import { CiShoppingCart } from "react-icons/ci";
import { useDeleteWhishlistAllMutation, useDeleteWhishlistSingleMutation, useGetwhishListQuery } from '@/components/Redux/services/wishlistApi/wishlistApi';
import { toast } from 'react-toastify';
import SkeletonDashWishlist from '@/components/all-skeleton/wishlistSkeleton/WishlistSkeleton';

// Sample Product Data
export const productsData = [
    {
        id: 1,
        name: "Apple Watch Series 6",
        price: "AED 639.00",
        originalPrice: "AED 1,719.00",
        image: watch,
    },
    {
        id: 2,
        name: "Samsung Galaxy Watch 4 Classic",
        price: "AED 899.00",
        originalPrice: "AED 1,099.00",
        image: watch,
    }
];

const DashWishlist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for removal
    const [products, setProducts] = useState(productsData);
    const {data, isLoading}=useGetwhishListQuery()
    const [deleteWhishlistSingle] = useDeleteWhishlistSingleMutation(); 
    const [deleteWhishlistAll] = useDeleteWhishlistAllMutation(); 

    const handleRemoveClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };
    const handleConfirmRemove = async () => {
        if (selectedProduct) {
            try {
                const res = await deleteWhishlistSingle(selectedProduct.id); // API call to delete the item
                if (res?.data?.success) {
                    // Update the UI after successful deletion
                    setSelectedProduct(null);
                    toast.success(`${res?.data?.message? "Product successfully removed from your wishlist.": res?.data?.message}`)
                }else{
                    toast.error(`${res?.error?.data?.message? res?.error?.data?.message:"Failed Deleted to wishlist."}` )
                }
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
        setIsModalOpen(false);
    };
    const handleDeletedall = async()=>{
        if(data.data.length==0){
            toast.info("Your wishlist is empty");
            return
        }
        const res = await deleteWhishlistAll()
        if (res?.data?.success) {
            toast.success(`${res?.data?.message? "All Product successfully removed from your wishlist.": res?.data?.message}`)
        }else{
            toast.error(`${res?.error?.data?.message? res?.error?.data?.message:"Failed Deleted to wishlist."}` )
        }
    }
    if(isLoading){
        return <SkeletonDashWishlist/>
    }

    return (
        <div className="p-4">
            <div className='flex items-center justify-between mb-5'>
                <h2 className="mb-4 text-xl font-semibold">
                    My Wishlist <span className="text-sm text-gray-500">({data?.data?.length} items)</span>
                </h2>
                <button onClick={handleDeletedall} className='md:p-2 p-1 text-white border rounded-md bg-primary'>Clear All</button>
            </div>
            {data?.data?.length > 0 ? (
                <div className={`grid   md:gap-4 gap-2 grid-cols-1 ${data?.data?.length ==1 ?"xl:grid-cols-1":" xl:grid-cols-2"}`}>
                    {data?.data?.map((product) => (
                        <WishlistItem
                            key={product.id}
                            product={product}
                            onRemove={() => handleRemoveClick(product)} 
                        />
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100 border rounded-md">
                    <div className="flex flex-col items-center text-center">
                        <p className="text-lg font-semibold">Your wishlist is empty</p>
                        <p className="mb-4 text-gray-500">You can easily fix that by browsing through our top categories or go find the products you like.</p>
                        <CiShoppingCart className='md:text-[150px]' />
                    </div>
                </div>
            )}

            {/* Render the modal conditionally */}
            {isModalOpen && (
                <WishlistModal
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmRemove}
                />
            )}
        </div>
    );
};

export default DashWishlist;
