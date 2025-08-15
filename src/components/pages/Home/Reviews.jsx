"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import ReviewCard from "@/components/shared/cards/ReviewCard";
import moment from "moment";
import { FaQuoteLeft } from "react-icons/fa";
import ReviewSkeleton from "@/components/shared/skeleton/ReviewSkeleton";
import FadeIn from "@/components/shared/animation/FadeIn";
import FadeUp from "@/components/shared/animation/FadeUp";

const Reviews = () => {
  const [review, setReview] = useState([]);
  // slider settings

  useEffect(() => {
    const GetReviewData = async () => {
      const getData = await axios.get(
        "https://freelancing-career-it-backend.vercel.app/api/v1/review"
      );
      setReview(getData?.data?.data);
    };
    GetReviewData();
  }, []);

  return (
    <div id="review" className="w-full container animate-scroll rounded-lg mx-auto bangla  p-3 *:mix-blend-difference text-black my-10">
     <FadeIn>
     <h2 className="text-3xl font-semibold text-center">
        আমাদের <span className="text-[#0672ACCC]">স্টুডেন্টদের</span> মতামত
      </h2>

     </FadeIn>
    
      

      <Swiper
  modules={[Scrollbar, Autoplay]}
  spaceBetween={20}
  slidesPerView={1} // Default slides per view
  breakpoints={{
    640: {
      slidesPerView: 2, // For tablets (min-width: 640px)
    },
    1024: {
      slidesPerView: 3, // For large screens (min-width: 1024px)
    },
    1440: {
      slidesPerView: 4,
    },
  }}
  autoplay={{
    delay: 2000, // Slide will change every 2 seconds
    disableOnInteraction: true, // Allows autoplay to continue after interaction
  }}
  onSwiper={(swiper) => {
    // Store the swiper instance
    window.mySwiper = swiper;
  }}
  onSlideChange={() => console.log('Slide changed')}
  className="mt-14 pb-10"
>
  {review?.length === 0 ? (
    <div className="flex lg:flex-row flex-col">
      {[1, 4, 5, 7].map((item, key) => (
        <ReviewSkeleton key={key} />
      ))}
    </div>
  ) : (
    review?.map((item, key) => (
      <SwiperSlide
        key={key}
        className="relative"
        onMouseEnter={() => window.mySwiper?.autoplay.stop()} // Pause on hover
        onMouseLeave={() => window.mySwiper?.autoplay.start()} // Resume on hover out
      >
        <FadeUp><ReviewCard
          name={item?.name}
          imageUrl={item?.userImage}
          rating={5}
          text={item?.text}
        /></FadeUp>
        
      </SwiperSlide>
    ))
  )}
</Swiper>

    </div>
  );
};

export default Reviews;
