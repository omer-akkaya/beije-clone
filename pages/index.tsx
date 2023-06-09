import Head from "next/head";
import Image from "next/image";
import Header from "@/Components/Header";
import CreateYourOwnPackage from "@/Components/CreateYourOwnPackage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "@/Components/Footer";
import Cart from "../context/Cart";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

const PageHead = () => {
  return (
    <Head>
      <title>beije | Kendi Paketini Oluştur</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default function Home() {
  return (
    <Cart>
      <ThemeProvider theme={theme}>
        <PageHead />
        <Header />
        <CreateYourOwnPackage />
        <Footer />
      </ThemeProvider>
    </Cart>
  );
}
