import Image from "next/image";
import React from "react";
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <div
      className='mt-20 flex px-5 py-10 flex-col justify-center items-center text-gray-400 tracking-tight'
      style={{ backgroundColor: "#262626", fontFamily: "Roboto" }}
    >
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
  );
};

export default Footer;
