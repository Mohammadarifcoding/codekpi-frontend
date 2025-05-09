"use client";
import {usePostCouponMutation, useUpdateCouponMutation } from "@/components/Redux/services/couponApi";
import { DatePicker } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddCoupon = ({ couponData, setSelectedCoupon }) => {
  const [postCoupon, { isLoading: isCreating }] = usePostCouponMutation();
  const [updateCoupon, { isLoading: isUpdating }] = useUpdateCouponMutation();
  
  
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [offers, setOffers] = useState("");
  const [code, setCode] = useState("");
  const [limit, setLimit] = useState("");
  const [minBuy, setMinBuy] = useState("");

  // Populate fields if couponData changes (edit mode)
  useEffect(() => {
    if (couponData) {
      setName(couponData.couponName || "");
      setOffers(couponData.offer || "");
      setCode(couponData.CODE || "");
      setLimit(couponData.limit || "");
      setMinBuy(couponData.minBuy || "");
      setDate(new Date(couponData.date));
    }
  }, [couponData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const couponPayload = {
      CODE: code,
      offer: parseInt(offers),
      couponName: name,
      limit: parseInt(limit),
      date: date,
      minBuy: parseInt(minBuy),
    };
    console.log(couponPayload)

    try {
      if (couponData) {
        console.log('Updating coupon with payload:', { ...couponPayload, id: couponData._id });
        const response = await updateCoupon({ ...couponPayload, id: couponData._id }).unwrap();
        console.log('Update response:', response);        
        e.target.reset();
        toast.success("Coupon updated successfully!");
      } else {
        await postCoupon(couponPayload).unwrap();
        toast.success("Coupon created successfully!");
      }
      e.target.reset();
      setSelectedCoupon(null); 
    } catch (error) {
      console.error("Error saving coupon:", error);
      toast.error("Error saving coupon.");
    }
  };


  return (
    <div className="mx-5">
      <h3 className="my-10 text-xl">{couponData ? "Edit Coupon" : "Create Coupon"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-4">
          <div className="">
            <Label>Coupon Offer</Label>
            <Input
              name="offer"
              type="number"
              value={offers}
              onChange={(e) => setOffers(e.target.value)}
              className="mt-2"
              placeholder="coupon offer"
              required
            />
          </div>
          <div className="">
            <Label>Coupon Name</Label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2"
              placeholder="coupon name"
              required
            />
          </div>
          <div className="">
            <Label>Coupon Code</Label>
            <Input
              name="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-2"
              placeholder="coupon code"
              required
            />
          </div>
          <div className="">
            <Label>Coupon Limit</Label>
            <Input
              name="limit"
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="mt-2"
              placeholder="limit"
              required
            />
          </div>
          <div className="">
            <Label>Date</Label>
            <DatePicker
              setDate={setDate}
              date={date}
              name="time"
              className={"w-full mt-2"}
            />
          </div>
          <div className="">
            <Label>Minimum Purchase</Label>
            <Input
              name="minBuy"
              type="number"
              value={minBuy}
              onChange={(e) => setMinBuy(e.target.value)}
              className="mt-2"
              placeholder="minimum buy"
              required
            />
          </div>
        </div>
        <Input
          type="submit"
          className="bg-primary cursor-pointer text-white"
          disabled={isCreating || isUpdating}
          value={couponData ? "Update Coupon" : "Create Coupon"}
        />
      </form>
    </div>
  );
};

export default AddCoupon;
