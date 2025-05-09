"use client"
import { useDeleteCategoriesMutation, useGetCategoriesQuery } from '@/components/Redux/services/categoriesApi/categoriesApi';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const Category = () => {
    const {data} = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoriesMutation();

    const handleDelete = async (id) => {
        try {
          const result = await deleteCategory({ _id: id }).unwrap();
          toast.success("Category Delated successfully!");
        } catch (error) {
          toast.error(error);
        }
      };
    return (
        <div className="container lg:my-20 my-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {data?.data?.map((item, idx) => (
            <div key={idx}>
              <div class="w-64 flex flex-col items-center bg-gray-100 shadow-lg p-9 group">
                <Image
                  width={40}
                  height={30}
                  alt={item?.title}
                  src={item?.icon}
                />
                <p class="text-lg">{item?.title}</p>
                <div className=" -translate-y-[92px] translate-x-24 flex gap-1 items-center">
                  <button onClick={() => handleDelete(item?._id)} className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <Trash className="h-5 w-5 fill-red-300 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Category;