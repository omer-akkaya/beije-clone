import React from "react";
import BeijePedOption from "./BeijePedOption";
import DiscreteSliderMarks from "./Slider";
import ThreeTab from "./ThreeTab";

const CreateYourOwnPackage = () => {
  return (
    <div className='mt-20 px-7'>
      <div>
        <div className='font-semibold text-3xl'>Kendi Paketini Oluştur</div>
        <div className='text-lg mt-5 text-gray-500'>
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan, sana özel bir paket oluşturalım.
        </div>
      </div>
      <div className='mt-10'>
        <ThreeTab></ThreeTab>
        <BeijePedOption></BeijePedOption>
      </div>
    </div>
  );
};

export default CreateYourOwnPackage;
