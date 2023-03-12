import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ThreeTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Box sx={{ marginBottom: "50px" }}>
      <Tabs
        onChange={handleChange}
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
