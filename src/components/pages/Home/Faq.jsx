"use client";
import Image from "next/image";
import React, { useState } from "react";
import faqImage from "/src/assets/Faq/faq.png"
import { dataArr } from "@/data/faq";
import FaqItem from "@/components/shared/faq/FaqItem";
import FadeIn from "@/components/shared/animation/FadeIn";
import FadeRight from "@/components/shared/animation/FadeRight";
const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div id="faq" className="w-full container animate-scroll rounded-lg mx-auto bangla  p-3 *:mix-blend-difference text-black my-10">
      <FadeIn>
      <h2 className="text-3xl font-semibold text-center">
        আমাদের নিয়ে যত <span className="text-[#0672ACCC]">প্রশ্নোত্তর</span>
      </h2>

      </FadeIn>

      <div className="flex lg:flex-row items-center container lg:px-6 md:px-4 px-2 justify-between mt-8">
    <div className=" w-full ">
        {dataArr.map((PerAccordion, idx) => (
          <FaqItem isOpen={isOpen} toggle={toggle} key={idx} item={PerAccordion} id={idx}/>
        ))}
      </div>

       
      <div className="  w-full lg:flex hidden justify-center items-center ">
        <Image src={faqImage} width={400} height={400} alt="faq" className=" max-w-[500px] w-max"/>
      </div>
      </div>

    </div>
  );
};

export default Faq;
