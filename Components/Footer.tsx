import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className='mt-20 flex px-5 py-10 flex-col justify-center items-center text-gray-400 tracking-tight
        md:flex-row md:justify-around pb-32'
        style={{ backgroundColor: "#262626", fontFamily: "Roboto" }}
      >
        <div className='flex flex-col items-center md:items-start'>
          <Image
            src={"/footer-image.svg"}
            alt={"footer image"}
            width={50}
            height={24}
          />
          <div className='pt-10 text-lg' style={{ fontWeight: "600" }}>
            Arayı açmayalım!
          </div>
          <div>
            Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
          </div>
        </div>

        <div
          className='flex w-full text-white justify-between mt-10 text-center text-lg cursor-pointer
        max-w-md'
        >
          <div className='flex flex-col gap-4'>
            <div>Paketler</div>
            <div>Deneme Paketi</div>
            <div>Ekibimize Katıl</div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>Blog</div>
            <div>Sıkça Sorulan Sorular</div>
            <div>Biz Kimiz?</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
