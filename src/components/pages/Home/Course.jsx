
import FadeIn from "@/components/shared/animation/FadeIn";
import FadeUp from "@/components/shared/animation/FadeUp";
import CourseCard from "@/components/shared/cards/CourseCard";
import { courseData } from "@/data/coursedata";
import React from "react";

const Course = () => {
  return (
    <div id="course" className="w-full animate-scroll container rounded-lg mx-auto bangla  p-3 *:mix-blend-difference text-black my-10">
      <FadeIn>  <h2 className="text-3xl font-semibold text-center">
        আমাদের <span className="text-[#0672ACCC]"> কোর্স </span>সমূহ
      </h2></FadeIn>
    
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-14">
       {courseData?.map((course,key)=>(
        <FadeUp key={key}>
<CourseCard course={course} />

        </FadeUp>
            
       ))}
      </div>
    </div>
  );
};

export default Course;
