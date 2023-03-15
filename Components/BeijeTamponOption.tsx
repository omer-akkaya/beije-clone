import React from "react";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";

const MiniTampon = {
  title: "Mini Tampon",
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

const StandardTampon = {
  title: "Standart Tampon",
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

const BeijeTamponOption = () => {
  const cart = useContext(CartContext);

  const miniTampon = cart.miniTampon;
  const standartTampon = cart.standartTampon;

  const setMiniTampon = cart.setMiniTampon;
  const setStandartTampon = cart.setStandartTampon;
  return (
    <>
      <DiscreteSliderMarks
        value={miniTampon}
        product={MiniTampon}
        onChange={setMiniTampon}
      ></DiscreteSliderMarks>
      <DiscreteSliderMarks
        value={standartTampon}
        product={StandardTampon}
        onChange={setStandartTampon}
      ></DiscreteSliderMarks>
    </>
  );
};

export default BeijeTamponOption;
