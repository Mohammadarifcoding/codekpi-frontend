import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ReviewCard = ({ name, time, rating, text, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  return (
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6 pt-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
              <Image src={imageUrl} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 english">{name}</h3>
              <p className="text-sm text-gray-500 english">{time}</p>
            </div>
          </div>

          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed english">
            {text.length > 250 ? (
              <span>
                {text.slice(0, 250)}...
                <Dialog >
                  <DialogTrigger asChild>
                    <span className="text-primary hover:underline cursor-pointer">
                      see more
                    </span>
                  </DialogTrigger>
                  <DialogContent className="bg-white rounded-lg " >
                    <DialogHeader>
                      <DialogTitle>Full Review</DialogTitle>
                    </DialogHeader>
                    <p className="text-gray-700 leading-relaxed text-sm">{text}</p>
                  </DialogContent>
                </Dialog>
              </span>
            ) : (
              text
            )}
          </p>
        </div>
      </div>
  );
};

export default ReviewCard;
