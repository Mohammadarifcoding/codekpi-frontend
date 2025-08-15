import ReviewCard from "@/components/shared/cards/ReviewCard";
import React from "react";
export const revalidate = 36000;
const page = async ({ params }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/review/${params.id}`
  ).then((res) => res.json());
  return (
    <div className="flex justify-center max-w-[700px] mx-auto items-center min-h-screen px-4 ">
      <div className="sm:mt-0 mt-20">
        <ReviewCard review={data?.data} show={true} />
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const reviewData = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/review`
  ).then((res) => res.json());

  return reviewData?.data.slice(0, 6).map((review) => ({
    id: review._id,
  }));
}

export default page;
