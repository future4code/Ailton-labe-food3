import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState({ children }) {
  const Provider = GlobalContext.Provider;
  const [cart, setCart] = useState({ restaurant: {}, products: [] });

  useEffect(() => {
    if (!cart?.products?.length) {
      const cartStorage = JSON.parse(localStorage.getItem("cart"));
      if (cartStorage) {
        setCart(cartStorage);
      }
    }
  }, []);

  useEffect(() => {
    if (cart?.products?.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const values = { setCart, cart };
  return <Provider value={values}>{children}</Provider>;
}
