import Image from "next/image";
import React from "react";
import { GrPowerCycle } from "react-icons/gr";

const OzelPaketin = () => {
  return (
    <div className='hidden lg:flex h-min flex-col rounded-2xl mx-7 p-8 bg-white w-[450px] flex-shrink-0'>
      <span className='text-3xl font-semibold'>Özel Paketin</span>
      <div
        className='shadow-md mt-6 rounded-lg py-3 px-3 flex items-center text-lg'
        style={{ fontFamily: "Roboto" }}
      >
        <GrPowerCycle className='mr-3 text-gray-700' />
        <span>2 ayda 1 gönderim</span>
      </div>
      <Image
        className='mt-6'
        src={"/packet.webp"}
        alt={"packet"}
        width={400}
        height={200}
      />
      <div
        className='bg-gray-300 text-gray-500 text-lg mt-14 py-3 text-center rounded-full cursor-pointer'
        style={{ fontWeight: 500 }}
      >
        Sepete Ekle (₺0,00)
      </div>
    </div>
  );
};

export default OzelPaketin;
