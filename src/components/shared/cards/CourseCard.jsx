import { Card, CardFooter, CardHeader,CardContent } from '@/components/ui/card';
import { Badge, Star, StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CourseCard = ({course}) => {
    return (
        <div className="w-full max-w-sm mx-auto border english rounded-xl border-gray-300  overflow-hidden">
        <div className="p-0">
          <div className="relative">
            <Image
              src={course.image}
              alt={`${course.courseName} course banner`}
              className="w-full h-48 object-cover rounded-t-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{course.courseName}</h2>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${
                  i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
             <span className='ml-2'>(5)</span> 
          </div>
          <div className="flex items-baseline">
            <span className="text-xl font-extrabold text-primary ">৳{course.offer}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">৳{course.price}</span>
            <span className="text-green-500 text-sm ml-2 font-semibold">{course?.discountPercentage}% OFF</span>
          </div>
        </div>
        <div className="p-4 pt-0">
            <a href="https://web.facebook.com/freelancingcareerit" target='_blank'>
            <button className="w-full rounded-lg font-semibold bg-white text-primary py-2  hover:bg-gray-100 transition-colors border border-primary/40">
            Enroll Now
          </button>
            </a>
         
        </div>
      </div>
    );
};

export default CourseCard;