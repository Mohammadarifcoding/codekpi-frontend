import { Skeleton } from "@/components/ui/skeleton";

const ProductSliderSkeleton = () => {
  return (
    <div className="container">
      <Skeleton className={"w-[620px] !bg-slate-200 h-[470px]"}></Skeleton>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-4 mx-auto">
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
        <Skeleton className={"w-50 !bg-slate-200 h-20"}></Skeleton>
      </div>
    </div>
  );
};

export default ProductSliderSkeleton;
