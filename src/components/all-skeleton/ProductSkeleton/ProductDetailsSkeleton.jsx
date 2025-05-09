import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="">
          <Skeleton className={"w-96 mt-2 !bg-slate-200 h-10"} />
          <Skeleton className={"w-20 mt-2 !bg-slate-200 h-4"} />
          <Skeleton className={"w-40 mt-2 !bg-slate-200 h-6"} />
        </div>
        <div>
          <Skeleton className={"w-24 mt-2 !bg-slate-200 h-5"} />
          <div className="flex gap-2">
            <Skeleton className={"w-20 mt-2 !bg-slate-200 h-20"}/>
            <Skeleton className={"w-20 mt-2 !bg-slate-200 h-20"}/>
            <Skeleton className={"w-20 mt-2 !bg-slate-200 h-20"}/>
            <Skeleton className={"w-20 mt-2 !bg-slate-200 h-20"}/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className={"w-40 !bg-slate-200 h-8"} />
          <Skeleton className={"w-10 !bg-slate-200 h-8"} />
        </div>
        <div className="flex gap-3">
          <Skeleton className={"w-32 !bg-slate-200 h-8"} />
          <Skeleton className={"w-32 !bg-slate-200 h-8"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
