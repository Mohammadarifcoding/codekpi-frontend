"use client"
import { useGetUsersQuery } from '@/components/Redux/services/Users/Users';
import React from 'react';
import UserCard from '../Users/UserCard';
const Girls = () => {
const {data } = useGetUsersQuery("female")
console.log(data)
    return (
        <div className="container ">
          <h2 className="md:text-3xl text-2xl text-center pt-10 mb-4 font-semibold ">Users list down</h2>
          <div className="grid xl:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {
                 data?.data?.map((user,idx)=>(
                    <UserCard key={idx} num={idx + 1} user={user} />
                 ))
            }
          </div>

           

        </div>
    );
};

export default Girls