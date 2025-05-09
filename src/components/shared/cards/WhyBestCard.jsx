import React from 'react';
import { FaSuperpowers } from 'react-icons/fa';
const WhyBestCard = ({data}) => {
    return (
        <div 
      className="max-w-sm flex flex-col mx-auto bangla border border-gray-200 overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 "
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    >
      <div className="p-8 flex-grow">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-primary text-white rounded-full">
           <data.icon className="text-xl" />
          </div>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-center text-gray-800">{data?.title}</h3>
        <p className="text-gray-600 text-center leading-relaxed ">{data?.description}</p>
      </div>
      <div className="h-2 bg-gradient-to-r from-primary to-primary/80"></div>
    </div>
    );
};

export default WhyBestCard;