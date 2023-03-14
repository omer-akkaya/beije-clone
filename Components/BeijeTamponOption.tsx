import React from "react";
import DiscreteSliderMarks from "./DiscreteSliderMarks";

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
  return (
    <>
      <DiscreteSliderMarks product={MiniTampon}></DiscreteSliderMarks>
      <DiscreteSliderMarks product={StandardTampon}></DiscreteSliderMarks>
    </>
  );
};

export default BeijeTamponOption;
