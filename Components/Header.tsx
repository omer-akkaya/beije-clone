import React from "react";
import { SlBasket } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import { GoThreeBars } from "react-icons/go";
import Image from "next/image";

//Type declaration for icon properties
type IconProps = {
  IconName: React.ElementType;
  Class?: String;
};

//Component for rendering right top icons
const Icon = ({ IconName, Class }: IconProps) => {
  return (
    <div
      className={`p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer ${
        Class ? Class : ""
      }`}
    >
      <IconName className={`text-2xl`} />
    </div>
  );
};

//Component for navigation items between logo and right top icons
const NavigationItem = ({ title }: { title: String }) => {
  return (
    <span
      style={{ fontFamily: "Roboto" }}
      className='cursor-pointer border-b-[1px] border-primary-color hover:border-slate-700 transition-all'
    >
      {title}
    </span>
  );
};

//Main header component
const Header = () => {
  return (
    <header
      data-testid='title'
      className='flex justify-between px-7 py-4 items-center max-w-7xl mx-auto'
    >
      <div className='cursor-pointer'>
        <Image alt='logo' width={60} height={30} src='logo.svg'></Image>
      </div>
      <div className='hidden lg:flex gap-x-10 text-lg'>
        <NavigationItem title={"Ürünler"} />
        <NavigationItem title={"Biz Kimiz"} />
        <NavigationItem title={"Bağış Kültürü"} />
        <NavigationItem title={"Blog"} />
        <NavigationItem title={"Kendi Paketini Oluştur!"} />
      </div>
      <div className='flex'>
        <Icon IconName={SlBasket} />
        <Icon IconName={RxPerson} />
        <Icon IconName={GoThreeBars} Class={"lg:hidden"} />
      </div>
    </header>
  );
};

export default Header;
