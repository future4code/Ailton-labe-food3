import React, { useContext, useEffect, useState } from "react";

import {
  Category,
  Description,
  Img,
  Price,
  Rectangle,
  Info,
  ButtonAdd,
  ButtonRemoved,
  Quantity,
} from "./styled";
import QuantityDialog from "../QuantityDialog/QuantityDialog";
import { GlobalContext } from "../../global/GlobalContext";
import Swal from "sweetalert2";

export default function DetailCard({ product, restaurant, page }) {
  const [openButton, setOpenButton] = useState(false);
  const { setCart, cart } = useContext(GlobalContext);
  const [qntProduct, setQntProduct] = useState(1);
  const [confirmAdd, setConfirmAdd] = useState(false);
  const [exist, setExist] = useState({ bool: false, index: 0 });

  const addToCart = () => {
    if (!cart.restaurant.name || cart.restaurant.name === restaurant.name) {
      setOpenButton(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Carrinho sendo utilizado em outra loja!`,
        confirmButtonColor: "#e8222e",
      });
    }
  };
  const removeCart = () => {
    const listCartRemoved = cart?.products?.filter((item) => {
      if (item.id !== product.id) {
        return item;
      }
    });
    setExist({ bool: false, index: 0 });
    setCart({ ...cart, products: listCartRemoved });
    if (cart.products.length === 1) {
      setCart({ products: [], restaurant: {} });
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], restaurant: {} })
      );
    }
  };
  useEffect(() => {
    if (confirmAdd) {
      const spreadCart = { ...cart };
      spreadCart.restaurant = {
        name: restaurant.name,
        address: restaurant.address,
        deliveryTime: restaurant.deliveryTime,
        id: restaurant.id,
        shipping: restaurant.shipping,
      };
      spreadCart.products.push({
        quantity: qntProduct,
        ...product,
      });
      setCart(spreadCart);
      setQntProduct(1);
      setConfirmAdd(false);
    }
  }, [confirmAdd]);

  useEffect(() => {
    const spreadCart = { ...cart };
    for (let i = 0; i < spreadCart?.products?.length; i++) {
      if (spreadCart?.products[i]?.id === product?.id) {
        setExist({ bool: true, index: i });
      }
    }
  }, [cart]);

  return (
    <Rectangle>
      <QuantityDialog
        openButton={openButton}
        setOpenButton={setOpenButton}
        qntProduct={qntProduct}
        setQntProduct={setQntProduct}
        setConfirmAdd={setConfirmAdd}
      />
      {exist.bool && (
        <Quantity>{cart?.products[exist?.index]?.quantity}</Quantity>
      )}
      <div>
        <Img src={product?.photoUrl} />
      </div>
      <Info>
        <Category>{product?.name}</Category>
        <Description>{product?.description}</Description>
        <Price>
          R$
          {page === "cart" && exist.bool
            ? (product?.price * cart?.products[exist?.index]?.quantity).toFixed(
              2
            )
            : product?.price?.toFixed(2)}
        </Price>
        {!exist.bool && <ButtonAdd onClick={addToCart}>Adicionar</ButtonAdd>}
        {exist.bool && (
          <ButtonRemoved onClick={removeCart}>Remover</ButtonRemoved>
        )}
      </Info>
    </Rectangle>
  );
}
