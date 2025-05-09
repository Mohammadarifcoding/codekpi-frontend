import FadeIn from "@/components/shared/animation/FadeIn";
import FadeUp from "@/components/shared/animation/FadeUp";
import WhyBestCard from "@/components/shared/cards/WhyBestCard";
import { whyWeBestData } from "@/data/whybest";
import React from "react";

const WhyBest = () => {
  return (
    <div className="w-full container bangla rounded-lg mx-auto bangla  p-3 *:mix-blend-difference text-black my-10">

      <FadeIn>

      <h2 className="text-3xl font-semibold text-center">
        
        আমরাই <span className="text-[#0672ACCC]">কেন</span> সেরা ?
      </h2>
        </FadeIn>
      {/* <p className="text-lg text-gray-600 text-center">
        আমাদের সাপোর্টিং সিস্টেম কেমন{" "}
      </p> */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-5 container lg:px-6 md:px-4 px-2 justify-center mt-20">
         {whyWeBestData?.map((why,key)=>(<FadeUp  key={key}><WhyBestCard data={why}/></FadeUp>))}
      </div>
    </div>
  );
};

export default WhyBest;
