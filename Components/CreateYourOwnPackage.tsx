import React, { useState, useEffect } from "react";
import BeijePedOption from "./BeijePedOption";
import ThreeTab from "./ThreeTab";
import BeijeGunlukPedOption from "./BeijeGunlukPedOption";
import BeijeTamponOption from "./BeijeTamponOption";
import OzelPaketin from "./OzelPaketin";

const CreateYourOwnPackage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [sliderArea, setSliderArea] = useState(<div></div>);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (tabValue == 0) {
      setSliderArea(<BeijePedOption />);
    }
    if (tabValue == 1) {
      setSliderArea(<BeijeGunlukPedOption />);
    }
    if (tabValue == 2) {
      setSliderArea(<BeijeTamponOption />);
    }
  }, [tabValue]);

  return (
    <div
      className='flex mx-auto max-w-7xl mt-40 tracking-tight'
      style={{ fontFamily: "Roboto" }}
    >
      <div className='px-7'>
        <div>
          <div className='font-semibold text-3xl'>Kendi Paketini Oluştur</div>
          <div className='text-lg mt-5 text-gray-500'>
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </div>
        </div>
        <div className='mt-10'>
          <ThreeTab
            value={tabValue}
            handleTabChange={handleTabChange}
          ></ThreeTab>
          {sliderArea}
        </div>
      </div>
      <OzelPaketin />
    </div>
  );
};

export default CreateYourOwnPackage;
