import Image from "next/image";
import { GrPowerCycle } from "react-icons/gr";
import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "@/context/Cart";
import PedPaketleri from "./PedPaketleri";
import GunlukPedPaketleri from "./GunlukPedPaketleri";
import TamponPaketleri from "./TamponPaketleri";

const OzelPaketin = () => {
  const {
    standartPed,
    superPed,
    superPlusPed,
    dailyPed,
    superDailyPed,
    miniTampon,
    standartTampon,
    cart,
  } = useContext(CartContext);
  const [sepeteEkleBgColor, setsepeteEkleBgColor] = useState(
    "bg-gray-300 text-gray-500"
  );
  const [pedPaketleriString, setPedPaketleriString] = useState("");
  const [gunlukPedPaketleriString, setGunlukPedPaketleriString] = useState("");
  const [tamponPaketleriString, setTamponPaketleriString] = useState("");

  useEffect(() => {
    if (standartPed + superPed + superPlusPed > 0) {
      setPedPaketleriString(
        `${standartPed > 0 ? standartPed + " Standard Ped" : ""} ${
          superPed > 0 ? superPed + " Süper Ped" : ""
        } ${superPlusPed > 0 ? superPlusPed + " Super+ Ped" : ""}`
      );
    } else {
      setPedPaketleriString("");
    }
    if (dailyPed + superDailyPed > 0) {
      setGunlukPedPaketleriString(
        `${dailyPed > 0 ? dailyPed + " Günlük Ped" : ""} ${
          superDailyPed > 0 ? superDailyPed + " Süper Günlük Ped" : ""
        }`
      );
    } else {
      setGunlukPedPaketleriString("");
    }
    if (miniTampon + standartTampon > 0) {
      setTamponPaketleriString(
        `${miniTampon > 0 ? miniTampon + " Mini Tampon" : ""} ${
          standartTampon > 0 ? standartTampon + " Standard Tampon" : ""
        }`
      );
    } else {
      setTamponPaketleriString("");
    }
    if (
      standartPed +
        superPed +
        superPlusPed +
        dailyPed +
        superDailyPed +
        miniTampon +
        standartTampon >
      0
    ) {
      setsepeteEkleBgColor("bg-gray-800 text-white");
    } else {
      setsepeteEkleBgColor("bg-gray-300 text-gray-500");
    }
  }, [
    standartPed,
    superPed,
    superPlusPed,
    dailyPed,
    superDailyPed,
    miniTampon,
    standartTampon,
  ]);

  return (
    <div
      style={{ background: "rgba(255,255,255,10)" }}
      className='mx-auto mt-20 md:mt-0 bg lg:flex h-min flex-col rounded-2xl md:mx-7 p-8 w-[450px] flex-shrink-0'
      data-testid='ozel-paketin'
    >
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

      <PedPaketleri pedPaketleriString={pedPaketleriString} />
      <GunlukPedPaketleri gunlukPedPaketleriString={gunlukPedPaketleriString} />
      <TamponPaketleri tamponPaketleriString={tamponPaketleriString} />
      <div
        className={
          sepeteEkleBgColor +
          " text-lg mt-14 py-3 text-center rounded-full cursor-pointer"
        }
        style={{ fontWeight: 500 }}
      >
        Sepete Ekle (₺
        {
          +(
            +standartPed +
            +superPed +
            +superPlusPed +
            +dailyPed +
            +superDailyPed +
            +miniTampon +
            +standartTampon
          )
        }
        ,00 )
      </div>
    </div>
  );
};

export default OzelPaketin;
