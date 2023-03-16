import React, { useContext } from "react";
import { CartContext } from "@/context/Cart";

type Props = {
  tamponPaketleriString: string;
};

const PedPaketleri = ({ tamponPaketleriString }: Props) => {
  const { setMiniTampon, setStandartTampon } = useContext(CartContext);

  function pakettenCikar() {
    setMiniTampon("");
    setStandartTampon("");
  }

  if (tamponPaketleriString.length > 0) {
    return (
      <div className='flex flex-col gap-2 my-5 bg-white px-5 py-8 shadow-lg rounded-xl'>
        <div className='text-xl font-semibold'>Tampon Paketleri</div>
        <div className='text-gray-600'>{tamponPaketleriString}</div>
        <div
          onClick={pakettenCikar}
          className='w-min font-medium hover:cursor-pointer hover:bg-gray-200 whitespace-nowrap rounded-2xl'
        >
          Paketten Çıkar
        </div>
      </div>
    );
  } else {
    return <div className='hidden'></div>;
  }
};

export default PedPaketleri;
