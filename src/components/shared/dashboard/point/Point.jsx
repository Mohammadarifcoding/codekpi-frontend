import React from "react";
import Coin from '@/assets/dashboard/game-coin.png'
import Image from "next/image";
const Point = () => {
  return (
    <>
    <div className="p-4 md:p-7 m-5 border text-center bg-slate-50 rounded-lg text-slate-600 font-semibold  md:mx-auto">
      <div className="flex items-center justify-center gap-1">
        <Image alt='coin' src={Coin} className="md:h-16 md:w-16 h-10 w-10"/>
        <p className="md:text-3xl text-2xl">Deposit</p>
      </div>
      <p className="md:text-xl mt-2">0.00 BDT</p>
    </div>
    </>
  );
};

export default Point;
