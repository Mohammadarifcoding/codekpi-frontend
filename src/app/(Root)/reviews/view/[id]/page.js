import ReviewCard from "@/components/shared/cards/ReviewCard";
import React from "react";

const page = async ({ params }) => {
  console.log(params.id);
  const data = await fetch(
    `https://code-kpi-backend.vercel.app/api/v1/review/${params.id}`
  ).then((res) => res.json());
  //   console.log(data);
  return (
    <div className="flex justify-center max-w-[700px] mx-auto items-center min-h-screen px-4 ">
      <div className="sm:mt-0 mt-20">
        <ReviewCard review={data?.data} show={true} />
      </div>
    </div>
  );
};

export default page;
