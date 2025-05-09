import React from 'react';
import Image from 'next/image';
import reward from '@/assets/dashboard/reward.svg'
import medal from '@/assets/dashboard/medal.png'

const DashboardReward = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 mt-6 bg-gray-100 rounded-md shadow-md">
            <Image src={reward} alt="Illustration" className="w-40 h-40 mr-4" />
            <div className="flex items-center">
                <div>
                    <p className="mb-2 text-lg font-bold text-center">“কাইবাইতে সারা মাস জুড়ে যত বেশি অর্ডার, মাস শেষে তত বেশি রেইওয়ার্ড”</p>
                    <div className='flex items-center justify-center mx-auto gap-3 p-2 bg-orange-100 rounded-full text-sm w-[300px] border-orange-600 border'>
                        <Image src={medal} alt='' className='w-6 h-6' />
                        <p>You Achieved Level L0</p>
                        <p className='p-1 bg-orange-600 rounded-full' >0 Points</p>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-center text-gray-600">আর মাত্র 50000 টাকার অর্ডার করলে মাস শেষে পাবেন 1000 পয়েন্ট</p>
            <div className="mt-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">0</span>
                        <span className="text-sm">L0</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">1000</span>
                        <span className="text-sm">⭐</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">৳50,000</span>
                        <span className="text-sm">Target</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardReward;