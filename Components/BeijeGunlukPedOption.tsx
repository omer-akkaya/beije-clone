import React from "react";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";

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
  const cart = useContext(CartContext);

  const dailyPed = cart.dailyPed;
  const superDailyPed = cart.superDailyPed;

  const setDailyPed = cart.setDailyPed;
  const setSuperDailyPed = cart.setSuperDailyPed;

  return (
    <>
      <DiscreteSliderMarks
        value={dailyPed}
        onChange={setDailyPed}
        product={GunlukPed}
      ></DiscreteSliderMarks>
      <DiscreteSliderMarks
        value={superDailyPed}
        onChange={setSuperDailyPed}
        product={SuperGunlukPed}
      ></DiscreteSliderMarks>
    </>
  );
};

export default BeijeGunlukPedOption;
