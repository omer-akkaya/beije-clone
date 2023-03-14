import React from "react";
import DiscreteSliderMarks from "./DiscreteSliderMarks";

const GunlukPed = {
  title: "Günlük Ped",
  marks: [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
      label: "60",
    },
  ],
  min: 0,
  max: 60,
};

const SuperGunlukPed = {
  title: "Süper Günlük Ped",
  marks: [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
      label: "60",
    },
  ],
  min: 0,
  max: 60,
};

const BeijeGunlukPedOption = () => {
  return (
    <>
      <DiscreteSliderMarks product={GunlukPed}></DiscreteSliderMarks>
      <DiscreteSliderMarks product={SuperGunlukPed}></DiscreteSliderMarks>
    </>
  );
};

export default BeijeGunlukPedOption;
