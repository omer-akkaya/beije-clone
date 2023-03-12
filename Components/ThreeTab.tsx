import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type ThreeTabProps = {
  value: number;
  handleTabChange: any;
};

export default function ThreeTab({ value, handleTabChange }: ThreeTabProps) {
  return (
    <Box sx={{ marginBottom: "50px" }}>
      <Tabs
        onChange={handleTabChange}
        value={value}
        aria-label='Tabs where selection follows focus'
        selectionFollowsFocus
        textColor='secondary'
        indicatorColor='secondary'
        variant='fullWidth'
        // sx={{ marginRight: "15px", marginLeft: "15px" }}
      >
        <Tab sx={{ textTransform: "none" }} label='beije Ped' />
        <Tab sx={{ textTransform: "none" }} label='beije Günlük Ped' />
        <Tab sx={{ textTransform: "none" }} label='beije Tampon' />
      </Tabs>
    </Box>
  );
}
