import React from "react";
import DiscreteSliderMarks from "./Slider";

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
  return (
    <>
      <DiscreteSliderMarks product={StandardPed}></DiscreteSliderMarks>
      <DiscreteSliderMarks product={SuperPed}></DiscreteSliderMarks>
      <DiscreteSliderMarks product={SuperPlusPed}></DiscreteSliderMarks>
    </>
  );
};

export default BeijePedOption;
