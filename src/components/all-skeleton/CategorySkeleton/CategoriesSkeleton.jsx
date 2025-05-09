import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const CategoriesSkeleton = () => {
    return (
        <div className=' animate-pulse container'>
           <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 mx-2'>
            <div className=' h-[120px] bg-white flex flex-col justify-center items-center  border rounded'>
            <Skeleton className="h-8   w-[60px] bg-gray-200" />
            <Skeleton className="h-2 mt-3 w-[80px] bg-gray-200" />
            </div>
            <div className='h-[120px] bg-white flex flex-col justify-center items-center  border rounded'>
            <Skeleton className="h-8   w-[60px] bg-gray-200" />
            <Skeleton className="h-2 mt-3 w-[80px] bg-gray-200" />
            </div>
            <div className='hidden md:block'>
            <div className=' h-[120px] bg-white flex flex-col justify-center items-center  border rounded'>
            <Skeleton className="h-8   w-[60px] bg-gray-200" />
            <Skeleton className="h-2 mt-3 w-[80px] bg-gray-200" />
            </div>
            </div>
            <div className='hidden md:block'>
            <div className=' h-[120px] bg-white flex flex-col justify-center items-center  border rounded'>
            <Skeleton className="h-8   w-[60px] bg-gray-200" />
            <Skeleton className="h-2 mt-3 w-[80px] bg-gray-200" />
            </div>
            </div>
            <div className='hidden lg:block'>
            <div className=' h-[120px] bg-white flex flex-col justify-center items-center  border rounded'>
            <Skeleton className="h-8   w-[60px] bg-gray-200" />
            <Skeleton className="h-2 mt-3 w-[80px] bg-gray-200" />
            </div>
            </div>
           <div className='hidden lg:block'>
           <div className=' h-[120px] bg-white flex flex-col justify-center items-center  border rounded'>
            <Skeleton className="h-8   w-[60px] bg-gray-200" />
            <Skeleton className="h-2 mt-3 w-[80px] bg-gray-200" />
            </div>
           </div>
           </div>
            
        </div>
    );
};

export default CategoriesSkeleton;