import React, { createContext, useState } from "react";
import menu from "./data/menuData";

const CartItems = createContext();

const BasketContext = ({ children }) => {
  const menuData = menu;

  const [cart, setCart] = useState([]);
  const [additems, setAdditems] = useState(0);
  return (
    <CartItems.Provider
      value={{ cart, setCart, menuData, additems, setAdditems }}
    >
      {children}
    </CartItems.Provider>
  );
};

export { BasketContext, CartItems };
