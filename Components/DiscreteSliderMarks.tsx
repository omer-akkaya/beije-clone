import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

type SliderProps = {
  onChange: (x: number) => {};
  value: number;
  product: {
    title: string;
    marks: { value: number; label?: string }[];
    min: number;
    max: number;
  };
};

export default function DiscreteSliderMarks({
  value,
  onChange,
  product: { title, marks, min, max },
}: SliderProps) {
  function changeHandler(e: any) {
    onChange(e.target.value);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <div className='my-4 text-lg' style={{ fontFamily: "Roboto" }}>
        {title}
      </div>
      <Slider
        onChange={changeHandler}
        value={value}
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
