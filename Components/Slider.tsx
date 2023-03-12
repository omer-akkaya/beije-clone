import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const product = {
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

type SliderProps = {
  product: {
    title: string;
    marks: { value: number; label?: string }[];
    min: number;
    max: number;
  };
};

export default function DiscreteSliderMarks({
  product: { title, marks, min, max },
}: SliderProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <div className='my-4 text-lg' style={{ fontFamily: "Roboto" }}>
        {title}
      </div>
      <Slider
        sx={{ fontSize: "100px" }}
        min={min}
        max={max}
        color='secondary'
        aria-label='Custom marks'
        defaultValue={0}
        step={10}
        valueLabelDisplay='auto'
        marks={marks}
      />
    </Box>
  );
}
