"use client";
import { useDeleteCouponMutation, useGetCouponQuery } from "@/components/Redux/services/couponApi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Scissors, ShoppingCart } from "lucide-react";
import { CiEdit } from "react-icons/ci";
import React from "react";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const Coupon = ({ setSelectedCoupon }) => {
  const { data: couponList } = useGetCouponQuery();
  const [deleteCoupon, { isLoading: isDeleting }] = useDeleteCouponMutation();

  const handleEditClick = (coupon) => {
    console.log(coupon)
    setSelectedCoupon(coupon);
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteCoupon(id).unwrap();
      toast.success("Category Delated successfully!");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10 gap-20">
      {couponList?.data.map((coupon, index) => (
        <Card
          key={index}
          className="w-full max-w-md mx-auto overflow-hidden"
        >
          <CardHeader className="bg-primary text-primary-foreground p-6 relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-background rounded-br-full"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-background rounded-bl-full"></div>
            <CiEdit
              className="absolute top-2 text-black text-2xl right-2 cursor-pointer"
              onClick={() => handleEditClick(coupon)}
            />
            <FaTrash
              className="absolute hover:text-red-400 text-gray-700 text-lg top-3 left-3 cursor-pointer"
              onClick={() => handleDelete(coupon._id)}
            />
            <div className="text-xl md:text-3xl font-extrabold text-center mt-2">
              {coupon?.offer}% OFF
            </div>
            <CardTitle className="text-lg md:text-2xl font-bold text-center text-wrap">
              {coupon?.couponName}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-card">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                <span className="text-sm">Min. Purchase</span>
              </div>
              <p>${coupon?.minBuy}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span className="text-sm">Valid Until</span>
              </div>
              <span className="font-semibold mb-1 text-right">{coupon?.date}</span>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-muted flex justify-between items-center">
            <div className="flex items-center">
              <Scissors className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium">Limited Offer</span>
            </div>
            {coupon?.limit} left
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Coupon;
