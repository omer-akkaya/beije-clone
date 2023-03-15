import React from "react";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";

const StandardPed = {
  title: "Standard Ped",
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

const SuperPed = {
  title: "Süper Ped",
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

const SuperPlusPed = {
  title: "Süper+ Ped",
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

const BeijePedOption = () => {
  const cart = useContext(CartContext);

  const standartPed = cart.standartPed;
  const superPed = cart.superPed;
  const superPlusPed = cart.superPlusPed;

  const setStandartPed = cart.setStandartPed;
  const setSuperPed = cart.setSuperPed;
  const setSuperPlusPed = cart.setSuperPlusPed;

  return (
    <>
      <DiscreteSliderMarks
        value={standartPed}
        product={StandardPed}
        onChange={setStandartPed}
      ></DiscreteSliderMarks>
      <DiscreteSliderMarks
        value={superPed}
        product={SuperPed}
        onChange={setSuperPed}
      ></DiscreteSliderMarks>
      <DiscreteSliderMarks
        value={superPlusPed}
        product={SuperPlusPed}
        onChange={setSuperPlusPed}
      ></DiscreteSliderMarks>
    </>
  );
};

export default BeijePedOption;
