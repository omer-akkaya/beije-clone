import React, { useState, useEffect } from "react";

export const CartContext = React.createContext<any>({});

export default function Cart({ children }: { children: React.ReactNode }) {
  const [standartPed, setStandartPed] = useState(20);
  const [superPed, setSuperPed] = useState(0);
  const [superPlusPed, setSuperPlusPed] = useState(0);
  const [dailyPed, setDailyPed] = useState(0);
  const [superDailyPed, setSuperDailyPed] = useState(0);
  const [miniTampon, setMiniTampon] = useState(0);
  const [standartTampon, setStandartTampon] = useState(0);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const total =
      standartPed +
      superPed +
      superPlusPed +
      dailyPed +
      superDailyPed +
      miniTampon +
      standartTampon;

    setCart(total);
  }, [
    standartPed,
    superPed,
    superPlusPed,
    dailyPed,
    superDailyPed,
    miniTampon,
    standartTampon,
  ]);

  return (
    <CartContext.Provider
      value={{
        cart,
        standartPed,
        setStandartPed,
        superPed,
        setSuperPed,
        superPlusPed,
        setSuperPlusPed,
        dailyPed,
        setDailyPed,
        superDailyPed,
        setSuperDailyPed,
        miniTampon,
        setMiniTampon,
        standartTampon,
        setStandartTampon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
