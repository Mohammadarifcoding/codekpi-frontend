"use client";
import FadeIn from "@/components/shared/animation/FadeIn";
import FadeUp from "@/components/shared/animation/FadeUp";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
 
  const data = [
    {
      data: "সফল শিক্ষার্থী",
      stats: 800,
      extra: "+",
    },
    {
      data: "কোর্স ",
      stats: 4,
      extra: "",
    },
    {
      data: "সন্তুষ্টি হার",
      stats: 100,
      extra: "%",
    },
  ];
  return (
    <div ref={ref} className="w-full bg-gradient-to-br bangla xl:my-28 lg:my-24 sm:my-16 my-14 from-primary to-primary/80 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
       <FadeIn>
       <h1 className="text-2xl md:text-4xl text-center font-bold mb-2 bangla">
          কেন আমাদের এখানে আসবেন ?
        </h1>
       </FadeIn>

       <FadeIn>
       <p className="text-center text-gray-200 mb-10 bangla">
          তোমাদের সাফল্যই আমাদের অনুপ্রেরণা
        </p>
       </FadeIn>
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.map((item, key) => (
            <FadeUp key={key}>

<div
              
              className="bg-black/20 backdrop-blur rounded-xl p-8 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-2 english">
                {inView ? (
                  <>
                    <CountUp end={item?.stats} duration={2.5} />
                    {item?.extra}
                  </>
                ) : (
                  <>0 {item?.extra} </>
                )}
              </h2>
              <p className="text-gray-200 bangla text-xl">{item?.data}</p>
            </div>
            </FadeUp>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
