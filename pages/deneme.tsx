import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DiscreteSlider from "@/Components/Slider";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

export default function AccessibleTabs1() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label='Tabs where selection follows focus'
          selectionFollowsFocus
          textColor='secondary'
          indicatorColor='secondary'
          variant='fullWidth'
          sx={{ marginRight: "25px", marginLeft: "25px" }}
        >
          <Tab sx={{ textTransform: "none" }} label='beije Ped' />
          <Tab sx={{ textTransform: "none" }} label='beije Günlük Ped' />
          <Tab sx={{ textTransform: "none" }} label='beije Tampon' />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
